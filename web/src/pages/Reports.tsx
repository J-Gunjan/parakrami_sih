import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { FileText, Download, Play } from 'lucide-react';

export function Reports() {
  const [generating, setGenerating] = useState(false);

  const mockReports = [
    { id: 'REP-2024-001', name: 'Monthly Compliance Report', filters: 'August 2024, Jaipur', date: '2024-09-01', status: 'READY' },
    { id: 'REP-2024-002', name: 'Officer Performance Summary', filters: 'All Regions', date: '2024-08-15', status: 'READY' },
  ];

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      alert('Mock report generation triggered. In a real environment, this would queue a job and notify when ready.');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <FileText className="w-6 h-6 text-sky-400" /> Reports
        </h1>
        <p className="text-slate-400">Generate analytics and export compliance records.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Build a Report</CardTitle>
              <CardDescription>Filter data to generate custom exports.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Report Name</label>
                <Input placeholder="e.g. Q3 Summary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Date Range</label>
                <div className="flex gap-2">
                  <Input type="date" />
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Region</label>
                <select className="w-full h-10 rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-100">
                  <option>All Regions</option>
                  <option>Jaipur Central</option>
                  <option>Jodhpur South</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Product Category</label>
                <select className="w-full h-10 rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-100">
                  <option>All Categories</option>
                  <option>Packaged Food</option>
                  <option>Electronics</option>
                </select>
              </div>
              <Button className="w-full mt-4" onClick={handleGenerate} disabled={generating}>
                {generating ? 'Generating...' : <><Play className="w-4 h-4 mr-2" /> Generate Excel Report</>}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Previously Generated</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report ID</TableHead>
                    <TableHead>Name & Filters</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockReports.map(rep => (
                    <TableRow key={rep.id}>
                      <TableCell className="font-mono text-xs text-slate-400">{rep.id}</TableCell>
                      <TableCell>
                        <div className="font-medium text-slate-200">{rep.name}</div>
                        <div className="text-xs text-slate-500">{rep.filters}</div>
                      </TableCell>
                      <TableCell className="text-sm text-slate-300">{rep.date}</TableCell>
                      <TableCell>
                        <Badge variant="success">{rep.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
