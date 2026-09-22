import { useEffect, useState } from 'react';
import { Card } from '../components/ui/Card';
import { Map } from '../components/ui/Map';
import { ShieldAlert, Search, Activity, Target } from 'lucide-react';
import { format } from 'date-fns';
import { demoInspections } from '../data/demoInspections';
interface OverviewStats {
  totalInspections: number;
  violationRate: number;
  totalProducts: number;
  hotspots: { name: string; count: number }[];
}

interface PriorityScore {
  brandName: string;
  sku: string;
  category: string;
  inspectionsCount: number;
  failedCount: number;
  lastInspectionDate: string;
  locations: string;
  score: number;
  mainReason: string;
}

interface TrendData {
  id: string;
  inspectionId: string;
  date: string;
  shopName: string;
  location: string;
  result: string;
}

export const AnalyticsDashboard = () => {
  const [stats, setStats] = useState<OverviewStats | null>(null);
  const [priorities, setPriorities] = useState<PriorityScore[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<{brandName: string, sku: string} | null>(null);
  const [trends, setTrends] = useState<TrendData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/analytics/overview').then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      }),
      fetch('/api/analytics/priorities').then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
    ]).then(([overviewData, priorityData]) => {
      setStats(overviewData);
      setPriorities(priorityData);
      setLoading(false);
    }).catch(err => {
      console.warn('Failed to load analytics data, falling back to demo data', err);
      
      // Fallback OverviewStats
      const totalInspections = demoInspections.length;
      const failed = demoInspections.filter(i => i.overallResult === 'FAIL').length;
      const violationRate = Math.round((failed / totalInspections) * 100) || 0;
      
      const totalProducts = demoInspections.reduce((sum, i) => sum + (i.products?.length || 0), 0);
      
      const hotspotCount: Record<string, number> = {};
      demoInspections.forEach(i => {
        const district = i.location.district || 'Unknown';
        if (i.overallResult === 'FAIL') {
          hotspotCount[district] = (hotspotCount[district] || 0) + 1;
        }
      });
      const hotspots = Object.entries(hotspotCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setStats({ totalInspections, violationRate, totalProducts, hotspots });

      // Fallback PriorityScore
      const productStats: Record<string, any> = {};
      demoInspections.forEach(i => {
        if (!i.products) return;
        i.products.forEach(p => {
          const key = `${p.brandName || 'Unknown'}_${p.barcodeOrGtin || 'Unknown'}`;
          if (!productStats[key]) {
            productStats[key] = {
              brandName: p.brandName || 'Unknown',
              sku: p.barcodeOrGtin || 'Unknown',
              category: p.category,
              inspectionsCount: 0,
              failedCount: 0,
              lastInspectionDate: i.startedAt,
              locations: i.location.district || 'Unknown',
              mainReason: 'Non-compliant declarations'
            };
          }
          productStats[key].inspectionsCount++;
          if (p.complianceResult?.decision === 'FAIL') {
            productStats[key].failedCount++;
          }
          if (new Date(i.startedAt) > new Date(productStats[key].lastInspectionDate)) {
            productStats[key].lastInspectionDate = i.startedAt;
          }
        });
      });
      
      const prio = Object.values(productStats).map(p => ({
        ...p,
        score: Math.round((p.failedCount / p.inspectionsCount) * 100) || 0
      })).sort((a, b) => b.score - a.score);

      setPriorities(prio);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      fetch(`/api/analytics/trends?brandName=${encodeURIComponent(selectedProduct.brandName)}&sku=${encodeURIComponent(selectedProduct.sku)}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch');
          return res.json();
        })
        .then(data => setTrends(data))
        .catch(err => {
          console.warn('Failed to load trends, falling back to demo data', err);
          const related = demoInspections.filter(i => 
            i.products?.some(p => p.brandName === selectedProduct.brandName && p.barcodeOrGtin === selectedProduct.sku)
          );
          const demoTrends = related.map(i => ({
            id: i.id,
            inspectionId: i.id,
            date: i.startedAt,
            shopName: i.shopName,
            location: i.location.district || 'Unknown',
            result: i.overallResult
          })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          
          setTrends(demoTrends);
        });
    }
  }, [selectedProduct]);

  if (loading) return <div className="p-8 text-center text-slate-500">Loading Analytics...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Analytics & Risk Prioritization</h1>
        <p className="text-slate-600">Overview of inspection trends and automated risk scoring.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-white border-slate-200 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-50 rounded-md text-indigo-700">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Inspections</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{stats?.totalInspections || 0}</h3>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white border-slate-200 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-rose-50 rounded-md text-rose-700">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Violation Rate</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{stats?.violationRate || 0}%</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-slate-200 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-amber-50 rounded-md text-amber-700">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Products Inspected</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{stats?.totalProducts || 0}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-slate-200 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-50 rounded-md text-emerald-700">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Top Hotspot</p>
              <h3 className="text-lg font-bold mt-1 text-slate-900 truncate">{stats?.hotspots?.[0]?.name || 'N/A'}</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Map Section */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold tracking-tight">Geospatial Distribution</h2>
          <Map />
        </div>

        {/* Trends Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">Repeat Analysis / Trends</h2>
          <Card className="p-6 h-[400px] overflow-y-auto bg-white border-slate-200 shadow-sm">
            {selectedProduct ? (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-nyaya-700">{selectedProduct.brandName}</h3>
                  <p className="text-sm text-slate-500">SKU: {selectedProduct.sku}</p>
                </div>
                
                <div className="relative border-l-2 border-slate-200 pl-4 space-y-6 ml-2">
                  {trends.map(t => (
                    <div key={t.id} className="relative">
                      <div className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full ${t.result === 'FAIL' ? 'bg-rose-500' : 'bg-emerald-500'} border-2 border-white`} />
                      <div className="text-sm font-medium text-slate-900">{format(new Date(t.date), 'MMM d, yyyy')}</div>
                      <div className="text-xs text-slate-500 mt-1">{t.shopName} ({t.location})</div>
                      <div className={`text-xs font-bold mt-1 ${t.result === 'FAIL' ? 'text-rose-600' : 'text-emerald-600'}`}>{t.result}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-500 text-sm text-center">
                Select a high priority product below to view its chronological history and repeat violations.
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Priorities Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">Inspection Priorities</h2>
        <Card className="border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-600 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4">Manufacturer</th>
                  <th className="px-6 py-4">SKU / Category</th>
                  <th className="px-6 py-4">Inspections (Fail / Total)</th>
                  <th className="px-6 py-4">Primary Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {priorities.map((p, i) => (
                  <tr 
                    key={i} 
                    className="hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedProduct({ brandName: p.brandName, sku: p.sku })}
                  >
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-bold
                        ${p.score > 70 ? 'bg-rose-50 text-rose-700 border border-rose-200' : 
                          p.score > 40 ? 'bg-amber-50 text-amber-700 border border-amber-200' : 
                          'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                        {p.score}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900">{p.brandName}</td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900">{p.sku}</div>
                      <div className="text-xs text-slate-500">{p.category}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-rose-600 font-medium">{p.failedCount}</span>
                      <span className="text-slate-500"> / {p.inspectionsCount}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{p.mainReason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

    </div>
  );
};
