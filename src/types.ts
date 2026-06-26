export type FunnelMode = 'mode-a' | 'mode-b';

export type CohortClassification =
  | 'Founding Early Allocation'
  | 'Priority Evaluation Cohort'
  | 'Standard Validation Queue';

export interface DiagnosticResult {
  score: number;
  classification: CohortClassification;
  confidence: 'High' | 'Moderate' | 'Needs Review';
  riskProfile: string;
  region: string;
  vehicleType: string;
  vehicleYear: number;
}

export interface Tier {
  id: string;
  name: string;
  tagline: string;
  bestFor: string;
  includes: string[];
  notGuaranteed: string[];
  depositAmount?: number;
}

export interface Reservation {
  id: string;
  email: string;
  tierId: string;
  score: number;
  classification: string;
  mode: FunnelMode;
  timestamp: string;
  vehicleType?: string;
  region?: string;
}

export interface AnalyticsEvent {
  id: string;
  name: string;
  timestamp: string;
  metadata: Record<string, any>;
}
