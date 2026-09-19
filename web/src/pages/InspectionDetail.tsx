import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { inspectionService } from '../services/api';
import { Inspection } from '@nyayalabel/shared';
import { ArrowLeft, Edit3, Image as ImageIcon, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export function InspectionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [inspection, setInspection] = useState<Inspection | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOverrideModalOpen, setIsOverrideModalOpen] = useState(false);
  const [overrideReason, setOverrideReason] = useState('');
  const [overrideResult, setOverrideResult] = useState<'PASS' | 'FAIL' | 'REVIEW'>('PASS');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchInspection = async () => {
      if (!id) return;
      try {
        const data = await inspectionService.getInspectionById(id);
        if (data) setInspection(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchInspection();
  }, [id]);

  const handleOverrideSubmit = async () => {
    if (!id || !overrideReason.trim()) return;
    setSubmitting(true);
    try {
      await inspectionService.overrideResult(id, overrideResult, overrideReason);
      const updated = await inspectionService.getInspectionById(id);
      if (updated) setInspection(updated);
      setIsOverrideModalOpen(false);
      setOverrideReason('');
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="text-slate-400 p-8">Loading inspection details...</div>;
  }

  if (!inspection) {
    return <div className="text-slate-400 p-8">Inspection not found.</div>;
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate('/inspections')}
          className="flex items-center text-sm text-nyaya-700 hover:text-nyaya-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Inspections
        </button>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setIsOverrideModalOpen(true)}>
            <Edit3 className="w-4 h-4 mr-2" /> Override Result
          </Button>
          <Button>Export PDF</Button>
        </div>
      </div>

      {/* SECTION A: Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Inspection Record: {inspection.id}</CardTitle>
                <StatusBadge status={inspection.overallResult} />
              </div>
              <CardDescription>Conducted on {new Date(inspection.createdAt).toLocaleString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 text-sm">
                <div>
                  <dt className="text-slate-500">Shop Name</dt>
                  <dd className="font-medium text-slate-900">{inspection.shopName}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Officer ID</dt>
                  <dd className="font-medium text-slate-900">{inspection.officerId}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-slate-500">Location</dt>
                  <dd className="font-medium text-slate-900">{inspection.location.address}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Sync Status</dt>
                  <dd className="font-medium text-slate-900 uppercase">{inspection.syncStatus}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          {/* SECTION B: Products & OCR Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-nyaya-700" /> Extracted Product Data
            </h3>
            {inspection.products?.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center text-slate-500">
                  No products recorded for this inspection.
                </CardContent>
              </Card>
            ) : (
              inspection.products?.map((product, idx) => (
                <Card key={product.id}>
                  <CardHeader className="bg-slate-50 border-b border-slate-200 pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base text-slate-900">Product #{idx + 1}</CardTitle>
                      <StatusBadge status={product.complianceResult?.decision || product.status} />
                    </div>
                    <CardDescription>Category: {product.category} • Barcode: {product.barcodeOrGtin || 'N/A'}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-700 border-b border-slate-200 pb-2">Extracted Declarations</h4>
                        <dl className="space-y-2 text-sm">
                          {product.extractedDeclarations && Object.entries(product.extractedDeclarations).map(([key, value]) => (
                            <div key={key} className="grid grid-cols-2">
                              <dt className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                              <dd className="font-medium text-slate-900">{String(value)}</dd>
                            </div>
                          ))}
                          {(!product.extractedDeclarations || Object.keys(product.extractedDeclarations).length === 0) && (
                            <div className="text-slate-400 italic">No OCR data available</div>
                          )}
                        </dl>
                      </div>

                      {/* Evidence Images for this product */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-700 border-b border-slate-200 pb-2">Captured Evidence</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {inspection.images?.filter(img => img.productId === product.id).map(img => (
                            <div key={img.id} className="relative aspect-square rounded-md overflow-hidden border border-slate-200 group">
                              <img src={img.remoteUrl || img.localFilePath} alt="Evidence" className="object-cover w-full h-full" />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-xs text-white bg-slate-900/80 px-2 py-1 rounded">View Full</span>
                              </div>
                            </div>
                          ))}
                          {(!inspection.images || inspection.images.filter(img => img.productId === product.id).length === 0) && (
                            <div className="aspect-square rounded-md border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400">
                              <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                              <span className="text-xs">No images</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* SECTION C: Violations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" /> Detected Violations
            </h3>
            {(!inspection.violations || inspection.violations.length === 0) ? (
              <Card>
                <CardContent className="p-6 text-center text-emerald-700 flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 mb-2" />
                  No violations detected by AI Engine.
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {inspection.violations.map((violation, idx) => (
                  <Card key={violation.id} className="border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-red-700">Violation #{idx + 1}: {violation.fieldName}</span>
                            <StatusBadge status={violation.severity} />
                          </div>
                          <p className="text-sm text-slate-700">Rule Reference: <span className="font-mono text-nyaya-700">{violation.ruleId} (v{violation.ruleVersion})</span></p>
                          <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                            <div className="bg-white p-2 rounded border border-slate-200">
                              <div className="text-slate-500 text-xs mb-1">Expected</div>
                              <div className="text-slate-900">{violation.expectedValue}</div>
                            </div>
                            <div className="bg-red-100 border border-red-200 p-2 rounded">
                              <div className="text-red-700 text-xs mb-1">Observed</div>
                              <div className="text-red-900">{violation.observedValue}</div>
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-slate-500">AI Confidence: {Math.round(violation.confidence * 100)}%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Audit Trail Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Audit Trail</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative border-l border-slate-200 ml-3 space-y-6 pb-4">
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-nyaya-500 rounded-full -left-[6.5px] top-1 border-2 border-white"></div>
                  <div className="text-sm font-medium text-slate-900">Inspection Created</div>
                  <div className="text-xs text-slate-500">{new Date(inspection.startedAt).toLocaleString()}</div>
                </div>
                {inspection.completedAt && (
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1 border-2 border-white"></div>
                    <div className="text-sm font-medium text-slate-900">AI Evaluation Completed</div>
                    <div className="text-xs text-slate-500">{new Date(inspection.completedAt).toLocaleString()}</div>
                  </div>
                )}
                {inspection.notes && inspection.notes.split('\n').filter(Boolean).map((note, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[6.5px] top-1 border-2 border-white"></div>
                    <div className="text-sm font-medium text-amber-900">Reviewer Action</div>
                    <div className="text-xs text-slate-700 mt-1 bg-slate-50 p-2 rounded border border-slate-200">{note}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Override Modal */}
      <Modal 
        isOpen={isOverrideModalOpen} 
        onClose={() => setIsOverrideModalOpen(false)}
        title="Override Compliance Result"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-300">
            You are about to override the original automated AI result. This action will be logged in the audit trail.
          </p>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900">New Result</label>
            <div className="flex gap-2">
              {(['PASS', 'FAIL', 'REVIEW'] as const).map(res => (
                <button
                  key={res}
                  type="button"
                  onClick={() => setOverrideResult(res)}
                  className={`flex-1 py-2 rounded-md text-sm font-medium border transition-colors ${
                    overrideResult === res 
                      ? 'bg-nyaya-50 border-nyaya-500 text-nyaya-700' 
                      : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <label className="text-sm font-medium text-slate-900">Mandatory Reason</label>
            <textarea
              className="w-full h-24 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-nyaya-500 focus:border-transparent resize-none"
              placeholder="Explain why the automated result is being overridden..."
              value={overrideReason}
              onChange={e => setOverrideReason(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <Button variant="ghost" onClick={() => setIsOverrideModalOpen(false)}>Cancel</Button>
            <Button 
              onClick={handleOverrideSubmit} 
              disabled={submitting || !overrideReason.trim()}
              variant={overrideResult === 'FAIL' ? 'danger' : overrideResult === 'PASS' ? 'success' : 'default'}
            >
              {submitting ? 'Submitting...' : 'Confirm Override'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
