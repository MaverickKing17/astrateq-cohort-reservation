import { Sliders, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { FunnelMode, DiagnosticResult, CohortClassification } from '../types';

interface SimulatorControlBarProps {
  mode: FunnelMode;
  onModeChange: (mode: FunnelMode) => void;
  diagnostic: DiagnosticResult;
  onDiagnosticChange: (diagnostic: DiagnosticResult) => void;
  onTriggerEvent: (name: string, meta: Record<string, any>) => void;
}

export default function SimulatorControlBar({
  mode,
  onModeChange,
  diagnostic,
  onDiagnosticChange,
  onTriggerEvent,
}: SimulatorControlBarProps) {
  // Determine classification and confidence based on score
  const updateScoreAndClassification = (newScore: number) => {
    let classification: CohortClassification = 'Priority Evaluation Cohort';
    let confidence: 'High' | 'Moderate' | 'Needs Review' = 'High';
    let riskProfile = 'Highway / Seasonal';

    if (newScore >= 90) {
      classification = 'Founding Early Allocation';
      confidence = 'High';
      riskProfile = 'Road Trip / Highway';
    } else if (newScore >= 70) {
      classification = 'Priority Evaluation Cohort';
      confidence = 'High';
      riskProfile = 'Highway / Seasonal';
    } else {
      classification = 'Standard Validation Queue';
      confidence = 'Moderate';
      riskProfile = 'Commute / Mixed Use';
    }

    const updated = {
      ...diagnostic,
      score: newScore,
      classification,
      confidence,
      riskProfile,
    };
    onDiagnosticChange(updated);
    onTriggerEvent('score_simulated', { score: newScore, classification });
  };

  const handleFieldChange = (field: keyof DiagnosticResult, value: any) => {
    const updated = { ...diagnostic, [field]: value };
    onDiagnosticChange(updated);
    onTriggerEvent('diagnostic_field_simulated', { field, value });
  };

  const resetSimulator = () => {
    const defaultDiagnostic: DiagnosticResult = {
      score: 80,
      classification: 'Priority Evaluation Cohort',
      confidence: 'High',
      riskProfile: 'Highway / Seasonal',
      region: 'Ontario / GTA',
      vehicleType: 'SUV / Crossover',
      vehicleYear: 2022,
    };
    onDiagnosticChange(defaultDiagnostic);
    onModeChange('mode-a');
    onTriggerEvent('simulator_reset', {});
  };

  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 px-4 py-3 text-slate-200">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Title */}
        <div className="flex items-center space-x-2 text-cyan-400">
          <Sliders className="h-4 w-4 animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wider uppercase">
            Astrateq pre-launch sandbox controller
          </span>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 text-xs md:gap-6">
          {/* Mode switch */}
          <div className="flex items-center space-x-2 border-r border-slate-800 pr-4 md:pr-6">
            <span className="text-slate-400 font-medium">Funnel Mode:</span>
            <div className="inline-flex rounded-md bg-slate-950 p-0.5">
              <button
                onClick={() => {
                  onModeChange('mode-a');
                  onTriggerEvent('mode_switched', { mode: 'mode-a' });
                }}
                className={`rounded px-2.5 py-1 text-[11px] font-semibold transition-all ${
                  mode === 'mode-a'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Mode A (No-Payment)
              </button>
              <button
                onClick={() => {
                  onModeChange('mode-b');
                  onTriggerEvent('mode_switched', { mode: 'mode-b' });
                }}
                className={`rounded px-2.5 py-1 text-[11px] font-semibold transition-all ${
                  mode === 'mode-b'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Mode B (Refundable Deposit)
              </button>
            </div>
          </div>

          {/* Score simulator */}
          <div className="flex items-center space-x-3 pr-4 border-r border-slate-800">
            <span className="text-slate-400 font-medium">Score:</span>
            <input
              type="range"
              min="20"
              max="100"
              value={diagnostic.score}
              onChange={(e) => updateScoreAndClassification(parseInt(e.target.value))}
              className="h-1.5 w-24 cursor-pointer rounded-lg bg-slate-800 accent-cyan-500"
            />
            <span className="font-mono font-bold text-cyan-400 text-sm w-6">{diagnostic.score}</span>
          </div>

          {/* Vehicle type & Region dropdowns */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">Region:</span>
              <select
                value={diagnostic.region}
                onChange={(e) => handleFieldChange('region', e.target.value)}
                className="rounded border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] font-medium text-slate-200 outline-none focus:border-cyan-500"
              >
                <option value="Ontario / GTA">Ontario / GTA</option>
                <option value="British Columbia / Vancouver">BC / Vancouver</option>
                <option value="Quebec / Montreal">Quebec / Montreal</option>
                <option value="Alberta / Calgary">Alberta / Calgary</option>
                <option value="Nova Scotia / Halifax">Nova Scotia</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">Vehicle:</span>
              <select
                value={diagnostic.vehicleType}
                onChange={(e) => handleFieldChange('vehicleType', e.target.value)}
                className="rounded border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] font-medium text-slate-200 outline-none focus:border-cyan-500"
              >
                <option value="SUV / Crossover">SUV / Crossover</option>
                <option value="Electric Vehicle">Electric Vehicle</option>
                <option value="Sedan / Hybrid">Sedan / Hybrid</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Commercial Van">Commercial Van</option>
              </select>
            </div>
          </div>

          {/* Reset button */}
          <button
            onClick={resetSimulator}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 px-2 py-1 rounded transition-colors"
            title="Reset Simulator Defaults"
          >
            <RefreshCw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
