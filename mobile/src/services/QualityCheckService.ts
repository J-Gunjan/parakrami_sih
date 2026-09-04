export interface QualityCheckResult {
  passed: boolean;
  reason?: string;
  score: number;
}

export class QualityCheckService {
  /**
   * Stub heuristic for on-device quality checking.
   * In a production setting, this would use a native frame processor 
   * (e.g. react-native-vision-camera) to check Laplacian variance (blur) 
   * and exposure histograms on the JS thread without blocking.
   * 
   * For this phase, we mock a brief analysis delay and randomly fail 10% 
   * of the time to demonstrate the failure UI flow as requested.
   */
  static async analyzeImage(uri: string): Promise<QualityCheckResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const random = Math.random();
        
        // Mock a 15% failure rate for demonstration
        if (random < 0.05) {
          resolve({ passed: false, reason: 'Too blurry', score: 0.3 });
        } else if (random < 0.10) {
          resolve({ passed: false, reason: 'Too dark', score: 0.4 });
        } else if (random < 0.15) {
          resolve({ passed: false, reason: 'Poor framing', score: 0.45 });
        } else {
          // Success
          resolve({ passed: true, score: 0.85 + (Math.random() * 0.15) });
        }
      }, 600); // 600ms simulated analysis delay
    });
  }
}
