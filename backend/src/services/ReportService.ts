import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export class ReportService {
  /**
   * Generates a PDF report for a synced inspection and returns its relative URL and SHA-256 hash.
   */
  async generateReport(inspectionData: any, evaluationResults: any[]): Promise<{ reportUrl: string; reportHash: string }> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({ margin: 50 });
        
        const reportsDir = path.join(process.cwd(), 'uploads', 'reports');
        if (!fs.existsSync(reportsDir)) {
          fs.mkdirSync(reportsDir, { recursive: true });
        }
        
        const filename = `report_${inspectionData.inspectionId}_${Date.now()}.pdf`;
        const filePath = path.join(reportsDir, filename);
        
        const stream = fs.createWriteStream(filePath);
        doc.pipe(stream);
        
        // Header
        doc.fontSize(20).text('NyayaLabel AI - Inspection Report', { align: 'center' });
        doc.moveDown();
        
        // Metadata
        doc.fontSize(12).font('Helvetica-Bold').text('Inspection Details');
        doc.font('Helvetica').fontSize(10);
        doc.text(`ID: ${inspectionData.inspectionId}`);
        doc.text(`Shop Name: ${inspectionData.shopName}`);
        doc.text(`Date: ${new Date(inspectionData.inspectionDate).toLocaleString()}`);
        doc.text(`Commodity: ${inspectionData.commodityCategory} (${inspectionData.packageType})`);
        doc.moveDown();
        
        // Findings
        doc.fontSize(12).font('Helvetica-Bold').text('Compliance Findings');
        doc.moveDown();
        
        if (evaluationResults.length === 0) {
          doc.font('Helvetica').fontSize(10).text('No rules evaluated.');
        } else {
          evaluationResults.forEach((result, index) => {
            doc.font('Helvetica-Bold').fontSize(10).text(`${index + 1}. Rule: ${result.ruleCode} - ${result.status}`);
            doc.font('Helvetica').fontSize(10);
            doc.text(`Observed: ${result.observedValue}`);
            doc.text(`Required: ${result.expectedValue}`);
            doc.text(`Explanation: ${result.aiExplanation || result.reason}`);
            doc.moveDown();
          });
        }
        
        doc.end();
        
        stream.on('finish', () => {
          // Calculate SHA-256
          const fileBuffer = fs.readFileSync(filePath);
          const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
          
          resolve({
            reportUrl: `/uploads/reports/${filename}`,
            reportHash: hash
          });
        });
        
        stream.on('error', (err) => {
          reject(err);
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

export const reportService = new ReportService();
