import { Terminal, Database, Trash2, Download, Clock, Activity, ArrowDownCircle, ShieldCheck } from 'lucide-react';
import { AnalyticsEvent, Reservation } from '../types';

interface DevConsoleProps {
  events: AnalyticsEvent[];
  reservations: Reservation[];
  onClearDatabase: () => void;
  onClearEvents: () => void;
}

export default function DevConsole({
  events,
  reservations,
  onClearDatabase,
  onClearEvents,
}: DevConsoleProps) {

  const exportToJson = (data: any, fileName: string) => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', fileName);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="w-full bg-slate-950 border-t border-slate-800 text-slate-300 font-mono text-xs" id="dev-console-panel">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex items-center space-x-3 border-b border-slate-850 pb-4 mb-6">
          <Terminal className="h-5 w-5 text-cyan-400 animate-pulse" />
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">
              Astrateq Pre-Launch Sandbox Analytics & Database Console
            </h3>
            <p className="text-[10px] text-slate-500 font-sans mt-0.5">
              Reviewer Suite: This console simulates backend log tracking and telemetry. It captures user interaction events and early-access registrations in real-time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Analytics Event stream */}
          <div className="flex flex-col h-[320px] rounded-xl border border-slate-850 bg-slate-900/40 overflow-hidden shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between bg-slate-950 px-4 py-3 border-b border-slate-850">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-cyan-400" />
                <span className="font-bold text-slate-200 tracking-wider text-[11px] uppercase">
                  Real-Time Analytics Event Feed (Section 13)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={onClearEvents}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-400 hover:text-white transition-colors"
                >
                  Clear Logs
                </button>
              </div>
            </div>

            {/* Event List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-950/60 font-mono text-[11px]">
              {events.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 italic">
                  <span>No events captured yet.</span>
                  <span className="text-[10px] text-slate-700 mt-1">Interact with the page above (clicks, input, tier selection, submit) to see events fire.</span>
                </div>
              ) : (
                events.map((event) => (
                  <div key={event.id} className="p-3 rounded bg-slate-900 border border-slate-800/80 animate-fade-in-up">
                    <div className="flex items-center justify-between mb-1.5 text-cyan-400">
                      <span className="font-bold tracking-wide uppercase">{event.name}</span>
                      <span className="text-[10px] text-slate-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {new Date(event.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    {/* Event metadata */}
                    <div className="bg-slate-950/80 p-2 rounded text-[10px] text-slate-300 max-h-24 overflow-y-auto overflow-x-hidden whitespace-pre-wrap leading-relaxed">
                      {JSON.stringify(event.metadata, null, 2)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Column 2: Saved Reservations database */}
          <div className="flex flex-col h-[320px] rounded-xl border border-slate-850 bg-slate-900/40 overflow-hidden shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between bg-slate-950 px-4 py-3 border-b border-slate-850">
              <div className="flex items-center space-x-2">
                <Database className="h-4 w-4 text-emerald-400" />
                <span className="font-bold text-slate-200 tracking-wider text-[11px] uppercase">
                  Captured LocalStorage Reservations (Database)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => exportToJson(reservations, 'astrateq_reservations_db.json')}
                  disabled={reservations.length === 0}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-300 hover:text-white transition-colors flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                  title="Export Database to JSON"
                >
                  <Download className="h-3 w-3" /> Export
                </button>
                <button
                  onClick={onClearDatabase}
                  disabled={reservations.length === 0}
                  className="px-2 py-1 rounded bg-slate-800/80 hover:bg-rose-950 hover:text-rose-200 text-[10px] text-slate-400 transition-colors flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Trash2 className="h-3 w-3" /> Clear
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-950/60 font-mono text-[11px]">
              {reservations.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 italic text-center">
                  <span>Database Empty</span>
                  <span className="text-[10px] text-slate-700 mt-1">Submit the reservation form to capture early-access driver cohorts.</span>
                </div>
              ) : (
                reservations.map((res) => (
                  <div key={res.id} className="p-3 rounded bg-slate-900 border border-emerald-500/15">
                    <div className="flex items-center justify-between mb-1 text-emerald-400 font-bold text-[12px]">
                      <span>{res.id}</span>
                      <span className="text-[10px] text-slate-500 font-normal">
                        {new Date(res.timestamp).toLocaleDateString()} {new Date(res.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] text-slate-300 bg-slate-950/40 p-2 rounded">
                      <div><span className="text-slate-500">Email:</span> {res.email}</div>
                      <div><span className="text-slate-500">Tier:</span> {res.tierId === 'tier-3' ? 'Founder Priority' : res.tierId === 'tier-2' ? 'Guardian Pro' : 'Readiness Access'}</div>
                      <div><span className="text-slate-500">Score:</span> {res.score}/100</div>
                      <div><span className="text-slate-500">Mode:</span> {res.mode === 'mode-b' ? 'Deposit' : 'No-Payment'}</div>
                      <div className="col-span-2"><span className="text-slate-500">Vehicle:</span> {res.vehicleType || 'Not specified'}</div>
                      <div className="col-span-2"><span className="text-slate-500">Region:</span> {res.region || 'Not specified'}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

        {/* Console Legend */}
        <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] text-slate-500 flex items-center justify-between font-sans">
          <span>Astrateq Pre-Launch Funnel v1.0.0</span>
          <span>Simulation Active · Localized to Canada</span>
        </div>

      </div>
    </div>
  );
}
