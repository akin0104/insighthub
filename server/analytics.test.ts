import { describe, expect, it } from "vitest";
import { getAnalyticsSnapshot } from "./db";

describe("analytics snapshot", () => {
  it("returns seeded records and calculated KPI values", async () => {
    const snapshot = await getAnalyticsSnapshot();
    expect(snapshot.leads.length).toBeGreaterThan(0);
    expect(snapshot.projects.length).toBeGreaterThan(0);
    expect(snapshot.metrics.pipelineHealth).toBeGreaterThan(0);
    expect(snapshot.metrics.conversionRate).toBeGreaterThan(0);
    expect(snapshot.metrics.satisfaction).toBeGreaterThanOrEqual(1);
    expect(snapshot.metrics.satisfaction).toBeLessThanOrEqual(5);
  }, 15000);

  it("documents every KPI with all required methodology fields", async () => {
    const snapshot = await getAnalyticsSnapshot();
    expect(snapshot.kpiDefinitions.length).toBeGreaterThanOrEqual(6);
    for (const kpi of snapshot.kpiDefinitions) {
      expect(kpi.definition.trim()).not.toBe("");
      expect(kpi.dataSource.trim()).not.toBe("");
      expect(kpi.calculationLogic.trim()).not.toBe("");
      expect(kpi.limitation.trim()).not.toBe("");
    }
  });
});
