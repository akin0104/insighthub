# InsightHub — Client-Operations Decision Intelligence

InsightHub is a full-stack analytics dashboard that turns client-operations records into governed KPIs, pipeline analysis, delivery visibility, process-improvement signals, and evidence-based recommendations.

## Why this project exists

The product models a realistic client-operations workflow across leads, contacts, projects, tasks, activities, budgets, vendors, and satisfaction scores. It demonstrates how I connect **business analysis, data modeling, automation thinking, visualization, and software delivery** in one decision-support product.

All records in the demo are synthetic and are included for portfolio demonstration only.

## What the dashboard demonstrates

| Area | Capability |
|---|---|
| Executive summary | Pipeline health, client satisfaction, conversion rate, process efficiency, budget utilization, and task completion |
| Pipeline analytics | Lead-source breakdown, stage progression, explicit stage drop-off analysis, and searchable opportunity register |
| Client operations | Project progress, budget utilization, vendor health, satisfaction detail, project register, and activity register |
| Process improvement | Database-derived turnaround trends, completion rates, before/after efficiency view, and blocked-work visibility |
| Methodology | Definition, data source, calculation logic, and known limitation for every KPI |
| Recruiter evidence | Embedded README section, export-ready CSV tables, loading/error/empty states, responsive layout, and tests |

## Architecture

The application uses a React and TypeScript frontend with Recharts visualizations, a typed tRPC/Express backend, Drizzle ORM, and a MySQL-compatible database. The relational schema stores the source records, while the backend computes the analytics snapshot from those records before the dashboard renders the views.

```text
Synthetic operations records
          ↓
Drizzle / MySQL tables
          ↓
Typed tRPC analytics snapshot
          ↓
React pages + Recharts visualizations
          ↓
KPI methodology + evidence-led insight narrative
```

## Technology stack

React · TypeScript · Tailwind CSS · Express · tRPC · Drizzle ORM · MySQL · Recharts · Vitest · Manus WebDev

## Run and review

The hosted demo is available at [insighthub-ejlhm26s.manus.space](https://insighthub-ejlhm26s.manus.space). The app includes five routes: Executive summary, Pipeline analytics, Client operations, Process improvement, and Data dictionary.

## Quality and governance

The project documents every KPI with its definition, source, calculation logic, and limitation. The data is explicitly synthetic, calculations are derived from database records, tables support search and sorting, CSV export is functional, and Vitest covers the seeded analytics response and KPI contract shape.

## Resume-ready impact statement

> Built a governed client-operations analytics platform with relational data modeling, typed analytics procedures, Recharts dashboards, pipeline drop-off analysis, satisfaction reporting, process-efficiency metrics, CSV exports, KPI methodology documentation, and responsive recruiter-facing product design.


## OpsFlow — Business Process and CRM Automation

OpsFlow is the second build program in this portfolio. It turns prospect research, outreach, client coordination, CRM tracking, and process improvement into a working business-systems workspace.

### Build stages

| Stage | Evidence | Status |
| --- | --- | --- |
| Process model | As-is/to-be maps, personas, requirements, acceptance criteria | Complete |
| Core domain | Dedicated owners, leads, tasks, activities, stages, and next actions | Complete |
| Automation | Persisted rules, rule evaluation endpoint, and audit-event history | Complete |
| Operations dashboard | Pipeline stages, task aging, conversion, ownership, and activity signals | Complete |
| Integrations | Mock CRM, email, calendar, and webhook contracts | Complete |

The central business question is: **How can a small team reduce manual follow-up work while making ownership and pipeline health visible?**

The live OpsFlow workspace is available at `/opsflow` with routes for `/opsflow/process`, `/opsflow/automation`, `/opsflow/dashboard`, and `/opsflow/integrations`. Detailed evidence is documented in `docs/opsflow/`.


## Portfolio build programs

| Program | Business question | Live route | Evidence |
| --- | --- | --- | --- |
| AlignIQ | How can skills alignment stay explainable instead of becoming an opaque score? | `/aligniq` | Weighted scoring model, typed report API, taxonomy, evidence traceability, evaluation fixtures, and bias limitations |
| TrustDesk | How can teams use internal knowledge without losing source evidence or privacy boundaries? | `/trustdesk` | Synthetic corpus, retrieval comparison, citation coverage, groundedness checks, refusal tests, and guardrails |
| GrowthLab | How can digital activity become measurable strategy and experimentation? | `/growthlab` | Event taxonomy, funnel analytics, campaign reporting, privacy boundaries, and experiment interpretation |

These programs extend InsightHub and OpsFlow into a connected recruiter portfolio: decision intelligence, business systems, workforce intelligence, responsible AI, and digital growth analytics. All demo records are synthetic and labeled as such.

Detailed implementation notes are available in `docs/aligniq.md`, `docs/trustdesk.md`, and `docs/growthlab.md`.


## Bimshimer Hair — WordPress-style CMS storefront

Bimshimer Hair is a fictional beauty-commerce case study built as a realistic WordPress-style storefront and content-operations workspace. It demonstrates responsive product browsing, hair and skincare catalog structure, product-detail routing, a demo bag, editorial content, content publishing states, inventory signals, order workflow visibility, and an explicit boundary around real payments and fulfillment.

**Live routes:** `/bimshimer`, `/bimshimer/shop`, `/bimshimer/hair`, `/bimshimer/skincare`, `/bimshimer/product/:id`, `/bimshimer/journal`, `/bimshimer/about`, `/bimshimer/contact`, `/bimshimer/cart`, and `/bimshimer/admin`.

**Truthful resume wording:** Built a WordPress-style beauty storefront and CMS operations demo with responsive product browsing, publishing states, inventory signals, order workflow views, and accessible content structure. This project is not presented as a production WordPress installation.

Documentation: [`docs/bimshimer-hair.md`](docs/bimshimer-hair.md).
