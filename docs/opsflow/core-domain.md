# OpsFlow Stage 02 — Core Domain

The core domain uses leads, contacts, tasks, activities, owners, stages, and status transitions. The current demo maps these concepts to the InsightHub relational dataset while keeping the OpsFlow boundaries explicit for a future dedicated service.

| Entity | Purpose |
| --- | --- |
| Lead | Company, source, stage, value, and owner context |
| Contact | Person and organization relationship context |
| Task | Next action, assignee, priority, status, and SLA |
| Activity | Timestamped outreach or delivery event |
| Owner | Accountable person for the next action |
| Status transition | Evidence that work moved from one state to another |
