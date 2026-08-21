import { drizzle } from "drizzle-orm/mysql2";
import { eq } from "drizzle-orm";
import { ENV } from "./_core/env";
import { activities, contacts, kpiDefinitions, leads, projects, satisfactionScores, tasks, vendors } from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: any): Promise<void> {
  const db = await getDb();
  if (!db || !user?.openId) return;
  const { users } = await import("../drizzle/schema");
  await db.insert(users).values({ openId: user.openId, name: user.name ?? null, email: user.email ?? null, loginMethod: user.loginMethod ?? null, lastSignedIn: new Date() }).onDuplicateKeyUpdate({ set: { name: user.name ?? null, email: user.email ?? null, lastSignedIn: new Date() } });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const { users } = await import("../drizzle/schema");
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

export async function getAnalyticsData() {
  const db = await getDb();
  if (!db) return { leads: [], contacts: [], projects: [], tasks: [], activities: [], satisfactionScores: [], vendors: [], kpiDefinitions: [] };
  const [leadRows, contactRows, projectRows, taskRows, activityRows, satisfactionRows, vendorRows, kpiRows] = await Promise.all([
    db.select().from(leads), db.select().from(contacts), db.select().from(projects), db.select().from(tasks),
    db.select().from(activities), db.select().from(satisfactionScores), db.select().from(vendors), db.select().from(kpiDefinitions),
  ]);
  return { leads: leadRows, contacts: contactRows, projects: projectRows, tasks: taskRows, activities: activityRows, satisfactionScores: satisfactionRows, vendors: vendorRows, kpiDefinitions: kpiRows };
}

export async function getAnalyticsSnapshot() {
  const data = await getAnalyticsData();
  const activeLeads = data.leads.filter((lead) => ["New", "Qualified", "Proposal"].includes(lead.stage));
  const stageWeight: Record<string, number> = { New: 0.2, Qualified: 0.5, Proposal: 0.75 };
  const pipelineHealth = activeLeads.reduce((sum, lead) => sum + Number(lead.value) * (stageWeight[lead.stage] ?? 0), 0);
  const won = data.leads.filter((lead) => lead.stage === "Won").length;
  const conversionRate = data.leads.length ? (won / data.leads.length) * 100 : 0;
  const satisfaction = data.satisfactionScores.length ? data.satisfactionScores.reduce((sum, item) => sum + item.score, 0) / data.satisfactionScores.length : 0;
  const completedTasks = data.tasks.filter((task) => task.status === "Done");
  const efficientTasks = completedTasks.filter((task) => Number(task.turnaroundHours) <= 24).length;
  const processEfficiency = completedTasks.length ? (efficientTasks / completedTasks.length) * 100 : 0;
  const budget = data.projects.reduce((sum, project) => sum + Number(project.budget), 0);
  const spent = data.projects.reduce((sum, project) => sum + Number(project.spent), 0);
  return { ...data, metrics: { pipelineHealth, conversionRate, satisfaction, processEfficiency, budgetUtilization: budget ? (spent / budget) * 100 : 0, taskCompletion: data.tasks.length ? (completedTasks.length / data.tasks.length) * 100 : 0 } };
}
