import { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { inspectionService } from '../services/api';
import { InspectionSummary } from '@nyayalabel/shared';
import { Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function InspectionList() {
  const [inspections, setInspections] = useState<InspectionSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInspections = async () => {
      try {
        const data = await inspectionService.getInspections();
        setInspections(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchInspections();
  }, []);

  const filtered = inspections.filter(insp => 
    insp.shopName.toLowerCase().includes(search.toLowerCase()) ||
    insp.locationAddress.toLowerCase().includes(search.toLowerCase()) ||
    insp.officerName?.toLowerCase().includes(search.toLowerCase()) ||
    insp.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Inspections</h1>
          <p className="text-slate-400">View and manage legal metrology compliance inspections.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input 
              placeholder="Search inspections..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 w-full sm:w-64"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-slate-400">Loading inspections...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-400">No inspections found.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID / Date</TableHead>
                  <TableHead>Shop / Region</TableHead>
                  <TableHead>Officer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Result</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((insp) => (
                  <TableRow key={insp.id} className="cursor-pointer hover:bg-slate-800/50" onClick={() => navigate(`/inspections/${insp.id}`)}>
                    <TableCell>
                      <div className="font-medium text-sky-400">{insp.id}</div>
                      <div className="text-xs text-slate-400">{new Date(insp.createdAt).toLocaleDateString()}</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-slate-200">{insp.shopName}</div>
                      <div className="text-xs text-slate-400 truncate max-w-[200px]">{insp.locationAddress}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-slate-300">{insp.officerName}</div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={insp.status} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={insp.overallResult} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); navigate(`/inspections/${insp.id}`); }}>
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
