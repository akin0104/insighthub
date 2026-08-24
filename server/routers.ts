import { getAnalyticsSnapshot, getOpsflowSnapshot, recordOpsflowEvent } from "./db";
import { alignIqEvidence, alignIqOccupation, alignIqProfile, buildAlignmentReport, runAlignIqEvaluation } from "@shared/aligniq";
import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  analytics: router({
    snapshot: publicProcedure.query(() => getAnalyticsSnapshot()),
  }),
  opsflow: router({
    snapshot: publicProcedure.query(() => getOpsflowSnapshot()),
    recordEvent: publicProcedure.input(z.object({ leadId: z.number().optional(), ruleId: z.number().optional(), eventType: z.string(), payload: z.record(z.string(), z.unknown()) })).mutation(({ input }) => recordOpsflowEvent(input)),
  }),
  aligniq: router({
    profile: publicProcedure.query(() => alignIqProfile),
    occupation: publicProcedure.query(() => alignIqOccupation),
    evidence: publicProcedure.query(() => alignIqEvidence),
    report: publicProcedure.query(() => buildAlignmentReport()),
    evaluation: publicProcedure.query(() => runAlignIqEvaluation()),
  }),
});

export type AppRouter = typeof appRouter;
