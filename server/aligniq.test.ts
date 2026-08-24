import { describe, expect, it } from "vitest";
import { buildAlignmentReport, calculateAlignment, runAlignIqEvaluation } from "../shared/aligniq";

describe("AlignIQ scoring", () => {
  it("produces a weighted score and confidence band", () => {
    const result = calculateAlignment([
      { skill: "analysis", score: 90, quality: 1 },
      { skill: "automation", score: 60, quality: 0.5 },
      { skill: "engineering", score: 70, quality: 0.8 },
    ]);
    expect(result.score).toBe(77);
    expect(result.confidence).toBe("Moderate–high");
  });

  it("returns a safe low-confidence state without evidence", () => {
    expect(calculateAlignment([])).toEqual({ score: 0, confidence: "Low" });
  });

  it("exposes report traceability and evaluation guardrails", () => {
    const report = buildAlignmentReport();
    const evaluation = runAlignIqEvaluation();
    expect(report.evidence.length).toBeGreaterThanOrEqual(3);
    expect(report.limitations.length).toBe(3);
    expect(evaluation.confidenceGuardrail).toBe(true);
    expect(evaluation.biasDisclosurePresent).toBe(true);
  });
});
