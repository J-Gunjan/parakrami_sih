import { RuleModel } from '../models/Rule.js';
import { RuleEvaluationResult, EvaluationResultStatus } from '@nyayalabel/shared';

export class RuleEngineService {
  /**
   * Deterministically evaluates the product data against the Indian Legal Metrology rules
   * stored in MongoDB. Returns a 4-state result (PASS, FAIL, REVIEW, NOT_APPLICABLE).
   */
  async evaluate(
    commodityCategory: string,
    packageType: string,
    extractedFields: Record<string, any>,
    measurements: { netQtyFontHeightMm?: number; mprPresence?: boolean },
    inspectionDate: Date = new Date()
  ): Promise<RuleEvaluationResult[]> {
    
    const results: RuleEvaluationResult[] = [];
    
    // 1. Fetch all rules valid on the inspectionDate
    const rules = await RuleModel.find({
      effectiveFrom: { $lte: inspectionDate },
      $or: [
        { effectiveUntil: null },
        { effectiveUntil: { $gt: inspectionDate } }
      ],
      isActive: true
    }).lean();

    // 2. Evaluate each rule
    for (const rule of rules) {
      const isCategoryMatch = 
        rule.applicableCommodity === 'ALL' || 
        (Array.isArray(rule.applicableCommodity) && rule.applicableCommodity.includes(commodityCategory)) ||
        rule.applicableCommodity === commodityCategory;

      if (!isCategoryMatch) {
        results.push(this.buildResult(rule, 'NOT_APPLICABLE', 'N/A', 'N/A', `Rule not applicable to commodity category: ${commodityCategory}`, 1.0, inspectionDate));
        continue;
      }

      // -- Rule: MRP Presence
      if (rule.ruleCode === 'MRP_PRESENCE') {
        const mrpObserved = extractedFields.mrp ? true : false;
        if (mrpObserved) {
          results.push(this.buildResult(rule, 'PASS', 'Present', 'Present', 'MRP is clearly declared.', 1.0, inspectionDate));
        } else {
          // Check confidence. If AI is unsure, REVIEW. If AI is sure it's missing, FAIL.
          const mrpConfidence = extractedFields._mrp_confidence ?? 0.8;
          if (mrpConfidence < 0.7) {
            results.push(this.buildResult(rule, 'REVIEW', 'Not detected clearly', 'Present', 'MRP not detected, but confidence is low. Manual review required.', mrpConfidence, inspectionDate));
          } else {
            results.push(this.buildResult(rule, 'FAIL', 'Missing', 'Present', 'No MRP declaration found on the package.', mrpConfidence, inspectionDate));
          }
        }
        continue;
      }

      // -- Rule: Generic Name Presence
      if (rule.ruleCode === 'GENERIC_NAME_PRESENCE') {
        const nameObserved = extractedFields.commonName || extractedFields.productName;
        if (nameObserved) {
          results.push(this.buildResult(rule, 'PASS', nameObserved, 'Present', 'Common or generic name is declared.', 1.0, inspectionDate));
        } else {
          results.push(this.buildResult(rule, 'FAIL', 'Missing', 'Present', 'Common or generic name is missing.', 0.9, inspectionDate));
        }
        continue;
      }

      // -- Rule: Net Quantity Minimum Height (<= 200g)
      if (rule.ruleCode === 'NET_QTY_MIN_HEIGHT_1') {
        const parsedWeightStr = extractedFields.netQuantity || '';
        const weightMatch = parsedWeightStr.match(/(\d+(?:\.\d+)?)\s*(g|ml|kg|l)/i);
        
        let applies = false;
        if (weightMatch) {
          const val = parseFloat(weightMatch[1]);
          const unit = weightMatch[2].toLowerCase();
          if ((unit === 'g' || unit === 'ml') && val <= 200) applies = true;
        }

        if (!applies) {
           results.push(this.buildResult(rule, 'NOT_APPLICABLE', 'N/A', 'N/A', 'Condition (<= 200g/ml) not met.', 1.0, inspectionDate));
           continue;
        }

        if (!measurements.netQtyFontHeightMm) {
           results.push(this.buildResult(rule, 'REVIEW', 'Unknown', '>= 2.0 mm', 'Physical measurement unavailable.', 0, inspectionDate));
           continue;
        }

        const height = measurements.netQtyFontHeightMm;
        const required = (rule.threshold as any).minFontHeightMm || 2.0;
        
        if (height >= required) {
           results.push(this.buildResult(rule, 'PASS', `${height.toFixed(2)} mm`, `>= ${required.toFixed(1)} mm`, 'Font height exceeds minimum requirement.', 1.0, inspectionDate));
        } else if (height <= required - 0.1) { // 0.1mm tolerance
           results.push(this.buildResult(rule, 'FAIL', `${height.toFixed(2)} mm`, `>= ${required.toFixed(1)} mm`, 'Font height is below legal minimum.', 0.9, inspectionDate));
        } else {
           results.push(this.buildResult(rule, 'REVIEW', `${height.toFixed(2)} mm`, `>= ${required.toFixed(1)} mm`, 'Font height is borderline. Manual review advised.', 0.6, inspectionDate));
        }
        continue;
      }
      
      // Default / Dev Unverified Rule fallback
      if (rule.ruleCode === 'DEV_UNVERIFIED_DEMO_RULE') {
         results.push(this.buildResult(rule, 'REVIEW', 'Demo Data', 'Demo Data', 'Evaluating unverified demo rule.', 0.5, inspectionDate));
      }
    }

    return results;
  }

  private buildResult(
    rule: any, 
    status: EvaluationResultStatus, 
    observedValue: string, 
    expectedValue: string, 
    reason: string, 
    confidence: number,
    inspectionDate: Date
  ): RuleEvaluationResult {
    return {
      ruleId: rule.ruleId,
      ruleCode: rule.ruleCode,
      ruleVersion: rule.version,
      status,
      observedValue,
      expectedValue,
      reason,
      severity: rule.severity,
      legalSource: {
        act: rule.sourceAct,
        rule: rule.sourceRule,
        notification: rule.sourceNotification,
        reference: rule.sourceReference
      },
      verificationStatus: rule.verificationStatus,
      confidence,
      inspectionDate
    };
  }
}

export const ruleEngineService = new RuleEngineService();
