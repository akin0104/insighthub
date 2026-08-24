import { describe, expect, it } from "vitest";
import { calculateDropOff, evaluateExperiment, funnelRate, summarizeCohort } from "../shared/growthlab";

describe("GrowthLab metrics", () => {
  it("calculates funnel conversion and experiment lift", () => {
    expect(funnelRate(1240, 74)).toBe(6);
    expect(evaluateExperiment(7.6, 8.6)).toEqual({ lift: 13.2, guardrail: true });
  });

  it("handles empty funnels safely", () => {
    expect(funnelRate(0, 0)).toBe(0);
    expect(evaluateExperiment(0, 8)).toEqual({ lift: 0, guardrail: true });
  });

  it("reports cohort conversion, activation, and drop-off", () => {
    expect(calculateDropOff(100, 25)).toBe(75);
    expect(summarizeCohort([{ cohort: "2026-01", sessions: 100, leads: 25, qualifiedCalls: 10 }])[0]).toMatchObject({ conversionRate: 25, activationRate: 40, dropOffRate: 75 });
  });
});
