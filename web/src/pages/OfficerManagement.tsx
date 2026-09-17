import { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { officerService } from '../services/api';
import { Officer } from '@nyayalabel/shared';
import { Users, UserPlus, Shield, MoreVertical } from 'lucide-react';

export function OfficerManagement() {
  const [officers, setOfficers] = useState<Officer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchOfficers = async () => {
      try {
        const data = await officerService.getOfficers();
        setOfficers(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchOfficers();
  }, []);

  const filteredOfficers = officers.filter(o => 
    o.name.toLowerCase().includes(search.toLowerCase()) ||
    o.email.toLowerCase().includes(search.toLowerCase()) ||
    o.badgeNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-sky-400" /> Officer Management
          </h1>
          <p className="text-slate-400">Manage inspector accounts, roles, and jurisdictions.</p>
        </div>
        <div className="flex items-center gap-2">
          <Input 
            placeholder="Search officers..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-64"
          />
          <Button><UserPlus className="w-4 h-4 mr-2" /> Add Officer</Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-slate-400">Loading officers...</div>
          ) : filteredOfficers.length === 0 ? (
            <div className="p-8 text-center text-slate-400">No officers found.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Officer Name / Email</TableHead>
                  <TableHead>Badge Number</TableHead>
                  <TableHead>Jurisdiction</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOfficers.map(officer => (
                  <TableRow key={officer.id}>
                    <TableCell>
                      <div className="font-medium text-slate-200">{officer.name}</div>
                      <div className="text-xs text-slate-500">{officer.email}</div>
                    </TableCell>
                    <TableCell className="font-mono text-sm text-slate-300">{officer.badgeNumber}</TableCell>
                    <TableCell className="text-sm text-slate-300">{officer.jurisdiction}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {officer.role === 'ADMIN' && <Shield className="w-3 h-3 text-red-400" />}
                        <span className="text-xs font-semibold text-slate-300">{officer.role}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">ACTIVE</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
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
