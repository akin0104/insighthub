export const growthEvents = [
  { name: "page_view", stage: "Acquisition", count: 1240, privacy: "No identifiers" },
  { name: "cta_click", stage: "Engagement", count: 286, privacy: "Consent-aware" },
  { name: "lead_submit", stage: "Conversion", count: 74, privacy: "Purpose-limited" },
  { name: "qualified_call", stage: "Activation", count: 31, privacy: "First-party" },
];

export const campaignRows = [
  { campaign: "Search / analyst tools", sessions: 420, leads: 32, spend: 680, conversion: 7.6 },
  { campaign: "LinkedIn / operations", sessions: 310, leads: 24, spend: 540, conversion: 7.7 },
  { campaign: "Email / case study", sessions: 210, leads: 18, spend: 180, conversion: 8.6 },
];

export function funnelRate(from: number, to: number) { return from ? Math.round((to / from) * 1000) / 10 : 0; }
export function evaluateExperiment(control: number, variant: number) { return { lift: control ? Math.round(((variant - control) / control) * 1000) / 10 : 0, guardrail: variant > 0 }; }

export function calculateDropOff(from: number, to: number) { return from ? Math.round(((from - to) / from) * 1000) / 10 : 0; }

export function summarizeCohort(rows: Array<{ cohort: string; sessions: number; leads: number; qualifiedCalls: number }>) {
  return rows.map((row) => ({ ...row, conversionRate: funnelRate(row.sessions, row.leads), activationRate: funnelRate(row.leads, row.qualifiedCalls), dropOffRate: calculateDropOff(row.sessions, row.leads) }));
}
