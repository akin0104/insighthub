export type AlignmentEvidence = { skill: string; score: number; quality: number; source: string };

export const alignIqProfile = {
  id: "demo-operations-analyst",
  name: "Operations Analyst pathway",
};

export const alignIqOccupation = {
  id: "business-analyst",
  title: "Business Analyst",
  skills: ["Requirements analysis", "Data analysis", "Workflow automation", "Technical implementation"],
};

export const alignIqEvidence: AlignmentEvidence[] = [
  { skill: "Requirements analysis", score: 92, quality: 0.9, source: "InsightHub process and KPI documentation" },
  { skill: "Data analysis", score: 84, quality: 0.8, source: "InsightHub analytics snapshot and Recharts views" },
  { skill: "Workflow automation", score: 71, quality: 0.7, source: "OpsFlow rules and audit events" },
  { skill: "Technical implementation", score: 66, quality: 0.6, source: "React, TypeScript, tRPC, and Vitest project artifacts" },
];

export function calculateAlignment(evidence: AlignmentEvidence[]) {
  if (evidence.length === 0) return { score: 0, confidence: "Low" as const };
  const score = Math.round(evidence.reduce((sum, item) => sum + item.score * item.quality, 0) / evidence.reduce((sum, item) => sum + item.quality, 0));
  const averageQuality = evidence.reduce((sum, item) => sum + item.quality, 0) / evidence.length;
  const confidence = averageQuality >= 0.8 && evidence.length >= 3 ? "High" as const : averageQuality >= 0.55 ? "Moderate–high" as const : "Low" as const;
  return { score, confidence };
}

export function buildAlignmentReport() {
  const result = calculateAlignment(alignIqEvidence);
  return {
    profile: alignIqProfile,
    occupation: alignIqOccupation,
    evidence: alignIqEvidence,
    score: result.score,
    confidence: result.confidence,
    limitations: ["Synthetic portfolio evidence", "Taxonomy quality can encode bias", "Not a hiring decision"],
  };
}

export function runAlignIqEvaluation() {
  const contradictory = calculateAlignment([{ skill: "analysis", score: 100, quality: 0.1, source: "weak" }, { skill: "analysis", score: 0, quality: 0.9, source: "strong" }]);
  return {
    emptyEvidence: calculateAlignment([]),
    contradictoryEvidence: contradictory,
    confidenceGuardrail: contradictory.confidence !== "High",
    biasDisclosurePresent: buildAlignmentReport().limitations.length >= 3,
  };
}
