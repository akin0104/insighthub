# OpsFlow Process Case Study

## Business context

A small business-development team needs to coordinate prospect research, outreach, client conversations, and follow-up without losing ownership between inboxes, notes, and spreadsheets.

## Before

The as-is process depends on individual memory. Lead context is fragmented, stage changes do not consistently create a next action, and managers cannot quickly distinguish healthy pipeline movement from stale work.

## Intervention

OpsFlow introduces an explicit lead and contact domain, owner assignment, stage-aware tasks, visible automation rules, integration contracts, and an audit-event log. The workflow treats each stage change as an operational event rather than a cosmetic status update.

## After

The operating dashboard makes open opportunities, task aging, conversion, ownership, and recent activities visible in one place. Active rules can be evaluated from the UI, while each evaluation is persisted as an audit event with a rule ID, event type, payload, and timestamp.

## Evidence to review

The live app exposes the process model, dedicated OpsFlow records, three persisted rules, four owners/lead records, five workflow tasks, four activities, and three seeded audit events. The repository includes the schema, typed procedures, UI routes, and this case study so a reviewer can trace the business problem to the implementation.

## Next measurement step

In a production rollout, compare median first-response time, overdue-task rate, and stage-to-stage conversion for a baseline period against the first 30 days after adoption. The current dataset is synthetic and demonstrates measurement design rather than real organizational performance.
