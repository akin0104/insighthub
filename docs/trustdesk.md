# TrustDesk — Responsible AI Knowledge Assistant

TrustDesk is a citation-grounded knowledge assistant prototype for business policies and operations documents. It is deliberately designed around inspection, evaluation, and safe refusal rather than generic chat behavior.

## Build stages

| Stage | Demonstrated capability | Evidence |
| --- | --- | --- |
| Corpus | Versioned synthetic documents with IDs and categories | `shared/trustdesk.ts` and corpus cards in `/trustdesk` |
| Retrieval | Keyword baseline and semantic comparison mode | Retrieval controls and ranked source records |
| Evaluation | Retrieval hit signal, citation coverage, groundedness, and refusal tests | `server/trustdesk.test.ts` and evaluation console |
| Guardrails | Credential, secret, and prompt-injection refusal patterns | `evaluateTrustdesk()` and refusal state |
| Web | Source-inspection interface with feedback-ready structure | `/trustdesk` |

## Design boundary

The demo does not claim to be a production model. It demonstrates a retriever contract and evidence UX over synthetic documents. A production version would add access control, document-level permissions, PII handling, embedding evaluation, model monitoring, and human review.
