# AlignIQ — Workforce and Skills Intelligence

AlignIQ is a transparent portfolio prototype inspired by workforce-intelligence work. It maps skill evidence to a target occupation and produces an explainable alignment report using synthetic portfolio records.

## Build stages

| Stage | Demonstrated capability | Evidence in this repository |
| --- | --- | --- |
| Core | Weighted score, evidence model, confidence bands, edge-case tests | `shared/aligniq.ts`, `server/aligniq.test.ts` |
| Taxonomy | Occupations, skills, evidence types, and relationships | `/aligniq/taxonomy` |
| API boundary | Report-builder contract separating profile, occupation, evidence, and report concepts | App route and typed domain vocabulary |
| Web | Accessible report builder with visible scores and evidence traceability | `/aligniq` |
| Evaluation | Reproducibility checks, empty evidence behavior, confidence calibration, and bias limitations | `/aligniq/evaluation` |

## Methodology

The score is a weighted mean of evidence scores, where evidence quality controls the contribution of each record. Confidence is deliberately separate from alignment: a high score with weak or sparse evidence should not automatically become a high-confidence recommendation.

## Limitations

The project uses synthetic evidence and is not a hiring or eligibility decision tool. Real deployment would require consent, versioned occupational sources, governance review, subgroup evaluation, and a documented appeals process. Taxonomy and evidence quality can encode institutional bias, so the system must expose assumptions rather than conceal them.
