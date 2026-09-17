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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-slate-400">Overview of inspection metrics and recent activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inspections</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-sky-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{total}</div>
            <p className="text-xs text-slate-400">Last 30 days</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{complianceRate}%</div>
            <p className="text-xs text-slate-400">{compliant} compliant records</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Non-Compliant</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{nonCompliant}</div>
            <p className="text-xs text-slate-400">Require enforcement action</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{pending}</div>
            <p className="text-xs text-slate-400">Awaiting reviewer decision</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Inspections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inspections.slice(0, 5).map(insp => (
              <div key={insp.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="flex flex-col gap-1">
                  <Link to={`/inspections/${insp.id}`} className="font-medium text-sky-400 hover:underline">
                    {insp.shopName}
                  </Link>
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <span>{new Date(insp.createdAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>Officer: {insp.officerName}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-slate-300 hidden sm:block">
                    {insp.locationAddress}
                  </div>
                  <StatusBadge status={insp.overallResult} />
                </div>
              </div>
            ))}
            {inspections.length === 0 && (
              <div className="text-sm text-slate-400 text-center py-4">No recent inspections found.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
