import { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Building2, Search, AlertTriangle } from 'lucide-react';

export function ManufacturerDirectory() {
  const [search, setSearch] = useState('');

  const mockManufacturers = [
    { id: 'MFR-101', name: 'Britannia Industries Ltd.', hq: 'Bangalore, KA', inspections: 45, complianceRate: 98, repeatOffender: false },
    { id: 'MFR-102', name: 'Local Snacks Co.', hq: 'Jaipur, RJ', inspections: 12, complianceRate: 75, repeatOffender: true },
    { id: 'MFR-103', name: 'Hindustan Unilever Ltd.', hq: 'Mumbai, MH', inspections: 120, complianceRate: 99, repeatOffender: false },
  ];

  const filtered = mockManufacturers.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Building2 className="w-6 h-6 text-sky-400" /> Manufacturer Directory
          </h1>
          <p className="text-slate-400">Search manufacturers and view aggregated compliance history.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input 
              placeholder="Search by name or ID..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 w-full sm:w-64"
            />
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Manufacturer</TableHead>
                <TableHead>Headquarters</TableHead>
                <TableHead className="text-center">Total Inspections</TableHead>
                <TableHead className="text-center">Compliance Rate</TableHead>
                <TableHead>Status / Flags</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(mfr => (
                <TableRow key={mfr.id}>
                  <TableCell>
                    <div className="font-medium text-slate-200">{mfr.name}</div>
                    <div className="text-xs text-slate-500">{mfr.id}</div>
                  </TableCell>
                  <TableCell className="text-sm text-slate-300">{mfr.hq}</TableCell>
                  <TableCell className="text-center text-sm font-medium text-white">{mfr.inspections}</TableCell>
                  <TableCell className="text-center">
                    <div className={`text-sm font-semibold ${mfr.complianceRate < 80 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {mfr.complianceRate}%
                    </div>
                  </TableCell>
                  <TableCell>
                    {mfr.repeatOffender ? (
                      <div className="flex items-center text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded w-fit">
                        <AlertTriangle className="w-3 h-3 mr-1" /> Repeat Offender
                      </div>
                    ) : (
                      <StatusBadge status="COMPLIANT" />
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">History</Button>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-slate-400 py-8">
                    No manufacturers found matching search criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
