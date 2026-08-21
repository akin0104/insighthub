import { describe, expect, it } from "vitest";
import { deriveOpsflowMetrics } from "./db";

describe("OpsFlow metrics", () => {
  it("calculates open leads, conversion, and overdue task aging", () => {
    const metrics = deriveOpsflowMetrics({
      leads: [{ stage: "New" }, { stage: "Proposal" }, { stage: "Won" }, { stage: "Lost" }],
      tasks: [
        { status: "Todo", dueAt: new Date(Date.now() - 60_000) },
        { status: "In progress", dueAt: new Date(Date.now() + 86_400_000) },
        { status: "Done", dueAt: new Date(Date.now() - 86_400_000) },
      ],
    });

    expect(metrics.openLeads).toBe(2);
    expect(metrics.conversionRate).toBe(25);
    expect(metrics.agingTasks).toBe(1);
  });
});
