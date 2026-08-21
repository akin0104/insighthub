# OpsFlow Stage 03 — Automation Rules

Automation rules remain visible and reviewable. Each rule has a trigger, an action, an owner, an audit event, and a manual override path.

1. Qualified lead follow-up: when a lead becomes Qualified, create a task due within 24 hours.
2. Proposal decision check: when a Proposal has no activity for three days, notify the owner and create a review task.
3. Stale lead escalation: when no activity is recorded for five days, escalate to the team lead.

The interface currently provides a simulation layer over synthetic records. Production adapters should add idempotency keys, retry handling, and external IDs.
