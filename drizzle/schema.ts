import { int, mysqlEnum, mysqlTable, text, timestamp, decimal, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  company: varchar("company", { length: 160 }).notNull(),
  source: varchar("source", { length: 80 }).notNull(),
  stage: mysqlEnum("stage", ["New", "Qualified", "Proposal", "Won", "Lost"]).notNull(),
  owner: varchar("owner", { length: 120 }).notNull(),
  value: decimal("value", { precision: 12, scale: 2 }).notNull(),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
});

export const contacts = mysqlTable("contacts", {
  id: int("id").autoincrement().primaryKey(),
  leadId: int("leadId"),
  name: varchar("name", { length: 160 }).notNull(),
  role: varchar("role", { length: 120 }).notNull(),
  email: varchar("email", { length: 240 }).notNull(),
  company: varchar("company", { length: 160 }).notNull(),
  status: varchar("status", { length: 40 }).notNull(),
  createdAt: timestamp("createdAt").notNull(),
});

export const projects = mysqlTable("projects", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  client: varchar("client", { length: 160 }).notNull(),
  status: mysqlEnum("status", ["On track", "At risk", "Complete", "Planning"]).notNull(),
  owner: varchar("owner", { length: 120 }).notNull(),
  budget: decimal("budget", { precision: 12, scale: 2 }).notNull(),
  spent: decimal("spent", { precision: 12, scale: 2 }).notNull(),
  progress: int("progress").notNull(),
  dueDate: timestamp("dueDate").notNull(),
  createdAt: timestamp("createdAt").notNull(),
});

export const tasks = mysqlTable("tasks", {
  id: int("id").autoincrement().primaryKey(),
  projectId: int("projectId"),
  title: varchar("title", { length: 200 }).notNull(),
  status: mysqlEnum("status", ["Todo", "In progress", "Done", "Blocked"]).notNull(),
  assignee: varchar("assignee", { length: 120 }).notNull(),
  priority: mysqlEnum("priority", ["Low", "Medium", "High"]).notNull(),
  turnaroundHours: decimal("turnaroundHours", { precision: 8, scale: 1 }).notNull(),
  completedAt: timestamp("completedAt"),
  createdAt: timestamp("createdAt").notNull(),
});

export const activities = mysqlTable("activities", {
  id: int("id").autoincrement().primaryKey(),
  leadId: int("leadId"),
  projectId: int("projectId"),
  type: varchar("type", { length: 80 }).notNull(),
  summary: varchar("summary", { length: 240 }).notNull(),
  owner: varchar("owner", { length: 120 }).notNull(),
  outcome: varchar("outcome", { length: 120 }).notNull(),
  occurredAt: timestamp("occurredAt").notNull(),
});

export const satisfactionScores = mysqlTable("satisfaction_scores", {
  id: int("id").autoincrement().primaryKey(),
  projectId: int("projectId"),
  client: varchar("client", { length: 160 }).notNull(),
  score: int("score").notNull(),
  feedback: text("feedback"),
  collectedAt: timestamp("collectedAt").notNull(),
});

export const vendors = mysqlTable("vendors", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  projects: int("projects").notNull(),
  spend: decimal("spend", { precision: 12, scale: 2 }).notNull(),
  status: mysqlEnum("status", ["Healthy", "Watch", "Review"]).notNull(),
});

export const kpiDefinitions = mysqlTable("kpi_definitions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 120 }).notNull().unique(),
  definition: text("definition").notNull(),
  dataSource: text("dataSource").notNull(),
  calculationLogic: text("calculationLogic").notNull(),
  limitation: text("limitation").notNull(),
  category: varchar("category", { length: 80 }).notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Lead = typeof leads.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Activity = typeof activities.$inferSelect;
