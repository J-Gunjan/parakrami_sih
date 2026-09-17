import { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { ruleService } from '../services/api';
import { ComplianceRule } from '@nyayalabel/shared';
import { Scale, Plus, GitBranch } from 'lucide-react';

export function RuleManagement() {
  const [rules, setRules] = useState<ComplianceRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRule, setSelectedRule] = useState<ComplianceRule | null>(null);

  // Form State for new version
  const [formData, setFormData] = useState({
    requirement: '',
    description: '',
    severity: 'MEDIUM' as ComplianceRule['severity']
  });

  const fetchRules = async () => {
    try {
      setLoading(true);
      const data = await ruleService.getRules();
      setRules(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRules();
  }, []);

  const handleOpenNewVersion = (rule: ComplianceRule) => {
    setSelectedRule(rule);
    setFormData({
      requirement: rule.requirement,
      description: rule.description,
      severity: rule.severity
    });
    setIsModalOpen(true);
  };

  const handleCreateVersion = async () => {
    if (!selectedRule) return;
    try {
      await ruleService.createRuleVersion(selectedRule.ruleId, formData);
      setIsModalOpen(false);
      fetchRules();
    } catch (e) {
      console.error(e);
    }
  };

  const filteredRules = rules.filter(rule => 
    rule.title.toLowerCase().includes(search.toLowerCase()) || 
    rule.ruleCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Scale className="w-6 h-6 text-sky-400" /> Rule Management
          </h1>
          <p className="text-slate-400">Admin-only portal for managing versioned compliance rules.</p>
        </div>
        <div className="flex items-center gap-2">
          <Input 
            placeholder="Search rules..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-64"
          />
          <Button variant="outline"><Plus className="w-4 h-4 mr-2"/> New Rule</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="p-8 text-center text-slate-400">Loading rules...</div>
        ) : filteredRules.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-slate-400">No rules found.</CardContent>
          </Card>
        ) : (
          filteredRules.map(rule => (
            <Card key={rule.ruleId} className={rule.isActive ? 'border-sky-500/30' : 'opacity-60 grayscale'}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg text-white">{rule.title}</h3>
                      <Badge variant={rule.isActive ? 'success' : 'outline'}>
                        {rule.isActive ? 'ACTIVE' : 'HISTORICAL'}
                      </Badge>
                      <Badge variant="outline" className="font-mono bg-slate-900">v{rule.version}</Badge>
                    </div>
                    <div className="text-sm text-slate-400 font-mono">Code: {rule.ruleCode}</div>
                    <p className="text-sm text-slate-300 max-w-3xl">{rule.description}</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-4">
                      <div><span className="text-slate-500">Requirement:</span> <span className="text-slate-200">{rule.requirement}</span></div>
                      <div><span className="text-slate-500">Category:</span> <span className="text-slate-200">{rule.category}</span></div>
                      <div><span className="text-slate-500">Severity:</span> <Badge variant="warning">{rule.severity}</Badge></div>
                      <div><span className="text-slate-500">Effective:</span> <span className="text-slate-200">{new Date(rule.effectiveFrom).toLocaleDateString()} {rule.effectiveUntil ? `- ${new Date(rule.effectiveUntil).toLocaleDateString()}` : '- Present'}</span></div>
                    </div>
                    <div className="text-xs text-sky-400/80 mt-2">Source: {rule.sourceAct} • {rule.sourceRule}</div>
                  </div>
                  <div>
                    {rule.isActive && (
                      <Button variant="outline" size="sm" onClick={() => handleOpenNewVersion(rule)}>
                        <GitBranch className="w-4 h-4 mr-2" /> Create New Version
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Rule Version"
      >
        <div className="space-y-4">
          <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 p-3 rounded">
            You are creating a new version of <strong>{selectedRule?.ruleCode}</strong>. The current version (v{selectedRule?.version}) will be marked as historical to preserve audit integrity for past inspections.
          </p>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Description</label>
            <textarea
              className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-100"
              rows={3}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Requirement Criteria</label>
            <Input
              value={formData.requirement}
              onChange={e => setFormData({...formData, requirement: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Severity</label>
            <select
              className="w-full h-10 rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-100"
              value={formData.severity}
              onChange={e => setFormData({...formData, severity: e.target.value as any})}
            >
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
              <option value="CRITICAL">CRITICAL</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleCreateVersion}>Deploy New Version</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
