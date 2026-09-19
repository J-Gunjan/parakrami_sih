import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { StatusBadge } from '../components/ui/StatusBadge';
import { inspectionService } from '../services/api';
import { InspectionSummary } from '@nyayalabel/shared';
import { ClipboardCheck, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DashboardHome() {
  const [inspections, setInspections] = useState<InspectionSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await inspectionService.getInspections();
        setInspections(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-slate-400">Loading dashboard data...</div>;
  }

  const total = inspections.length;
  const compliant = inspections.filter(i => i.overallResult === 'PASS').length;
  const nonCompliant = inspections.filter(i => i.overallResult === 'FAIL').length;
  const pending = inspections.filter(i => i.overallResult === 'REVIEW').length;
  const complianceRate = total > 0 ? Math.round((compliant / total) * 100) : 0;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Dashboard</h1>
        <p className="text-slate-600">Overview of inspection metrics and recent activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6 bg-white border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-50 rounded-md text-indigo-700">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Inspections</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{total}</h3>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">Last 30 days</p>
        </Card>
        
        <Card className="p-6 bg-white border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-50 rounded-md text-emerald-700">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Compliance Rate</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{complianceRate}%</h3>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">{compliant} compliant records</p>
        </Card>

        <Card className="p-6 bg-white border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-rose-50 rounded-md text-rose-700">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Non-Compliant</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{nonCompliant}</h3>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">Require enforcement action</p>
        </Card>

        <Card className="p-6 bg-white border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-amber-50 rounded-md text-amber-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Pending Review</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{pending}</h3>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">Awaiting reviewer decision</p>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">Recent Inspections</h2>
        <Card className="border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-200">
            {inspections.slice(0, 5).map(insp => (
              <div key={insp.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-slate-50 transition-colors">
                <div className="flex flex-col gap-1 mb-4 sm:mb-0">
                  <Link to={`/inspections/${insp.id}`} className="font-semibold text-lg text-nyaya-700 hover:underline">
                    {insp.shopName}
                  </Link>
                  <div className="text-sm text-slate-500 flex flex-wrap items-center gap-2">
                    <span className="font-medium text-slate-700">{new Date(insp.createdAt).toLocaleDateString()}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Officer: {insp.officerName}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="truncate max-w-[200px] lg:max-w-md">{insp.locationAddress}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBadge status={insp.overallResult} />
                </div>
              </div>
            ))}
            {inspections.length === 0 && (
              <div className="text-sm text-slate-500 text-center py-8">No recent inspections found.</div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
