import {
  Scale,
  ShieldCheck,
  Activity,
  Database,
  FileText,
  MapPin,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import type { SyncStatus } from '@nyayalabel/shared';

export function App() {
  const syncStatus: SyncStatus = 'synced';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md px-6 py-4 sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg text-white tracking-tight">NyayaLabel AI</h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 font-mono">
                SIH26034
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Legal Metrology Compliance & Inspection Intelligence Platform
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Sync Engine: {syncStatus.toUpperCase()}
          </div>
          <div className="text-xs text-slate-400 border-l border-slate-800 pl-4 hidden md:block">
            Department of Consumer Affairs, GoI
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
        {/* Hero Banner */}
        <section className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold">
              <Cpu className="w-3.5 h-3.5" /> Scaffolding Phase 0 Initialized
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Legal Metrology Compliance Verification & Governance Dashboard
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Automated label scrutiny for the Legal Metrology (Packaged Commodities) Rules, 2011.
              Equipped with on-device computer vision, area measurement, OCR extraction, versioned
              statutory rules engine, and GIS risk analytics.
            </p>
          </div>
        </section>

        {/* Monorepo Architecture Overview Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-5 rounded-xl space-y-3">
            <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-base">@nyayalabel/shared</h3>
            <p className="text-xs text-slate-400">
              Unified TypeScript interfaces for Officer, Inspection, Product, DeclarationFields,
              Violation, and ComplianceRule.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-sky-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Type safe & synced
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl space-y-3">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-base">@nyayalabel/backend</h3>
            <p className="text-xs text-slate-400">
              Node.js + Express REST API, MongoDB integration, JWT auth, and offline synchronization
              queues.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-indigo-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Port 5000 ready
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl space-y-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 w-fit">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-base">@nyayalabel/web</h3>
            <p className="text-xs text-slate-400">
              React + Vite + Tailwind review portal for appellate officers, evidence inspector, and
              GIS analytics.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Vite Dev Server ready
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl space-y-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-base">@nyayalabel/mobile</h3>
            <p className="text-xs text-slate-400">
              React Native Expo officer app with WatermelonDB (SQLite) offline storage and local
              photo capture.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Expo scaffolded
            </div>
          </div>
        </section>

        {/* Pipeline Stage Visualization */}
        <section className="glass-card p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-400" />
              10-Stage SIH26034 Architecture Pipeline
            </h3>
            <span className="text-xs text-slate-400">End-to-End Compliance Verification</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-2 text-xs">
            {[
              { step: '01', title: 'Mobile App', desc: 'Offline capture' },
              { step: '02', title: 'Image Quality AI', desc: 'Blur & glare check' },
              { step: '03', title: 'CV / OCR / Area', desc: 'PDA segmentation' },
              { step: '04', title: 'Declaration Extr.', desc: '11 mandatory fields' },
              { step: '05', title: 'Legal Rule Engine', desc: 'GSR 202(E) rules' },
              { step: '06', title: 'Compliance Engine', desc: 'Font & USP checks' },
              { step: '07', title: 'PASS/REVIEW/FAIL', desc: 'Scoring & severity' },
              { step: '08', title: 'Evidence Engine', desc: 'Crop bounding box' },
              { step: '09', title: 'AI Explanation', desc: 'Multi-lingual law' },
              { step: '10', title: 'GIS & Audit', desc: 'Government portal' },
            ].map(stage => (
              <div
                key={stage.step}
                className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-1"
              >
                <span className="text-[10px] font-mono text-sky-400 font-bold">{stage.step}</span>
                <div className="font-semibold text-slate-200">{stage.title}</div>
                <div className="text-slate-400 text-[11px]">{stage.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-500">
        NyayaLabel AI — Legal Metrology Inspection & Compliance Intelligence System (SIH26034)
      </footer>
    </div>
  );
}

export default App;
