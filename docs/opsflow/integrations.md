# OpsFlow Stage 05 — Integration Boundaries

OpsFlow defines mock boundaries for CRM synchronization, outbound email, calendar events, and inbound webhooks.

| Boundary | Contract expectations |
| --- | --- |
| CRM | External lead/contact IDs, source, owner, and reconciliation status |
| Email | Outbound message ID, recipient, delivery state, and response event |
| Calendar | Meeting ID, attendees, start time, and attendance event |
| Webhook | Idempotency key, actor, occurredAt, payload, and replay ID |

All production integrations should validate payloads before writes, retry transient failures with backoff, and preserve a visible manual override path.
