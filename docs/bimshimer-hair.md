# Bimshimer Hair — WordPress-style CMS storefront

Bimshimer Hair is a fictional beauty-commerce case study built to demonstrate the product, content, and operations thinking used when creating a WordPress-style client site. It is not presented as a production WordPress installation. The project models the public experience and the content-management decisions a WordPress build would require.

## Public experience

The storefront includes a warm editorial home page, a shop catalog, hair and skincare category views, product-detail pages, a demo bag, an about page, a journal page, and a contact page. The visual system uses cream, cocoa, espresso, muted terracotta, and soft gold tones with custom-generated hair and skincare imagery.

## Studio workspace

The Bimshimer Studio route models the WordPress-style admin workflow. Its content overview surfaces published pages and draft content; the catalog view shows product metadata and publishing status; inventory signals show reorder thresholds; and the orders workspace demonstrates order status, fulfillment stage, customer-care readiness, and the boundary between a UI demo and a real payment or shipping integration.

## Recruiter evidence

The project demonstrates responsive storefront composition, semantic navigation, accessible labels and alt text, product information hierarchy, reusable catalog cards, client-facing content structure, stateful bag interactions, CMS content operations, inventory visibility, and a documented commerce integration boundary. The truthful resume wording is: “Built a WordPress-style beauty storefront and CMS operations demo with responsive product browsing, content publishing states, inventory signals, order workflow views, and accessible content structure.”

## Routes

| Route | Purpose |
|---|---|
| `/bimshimer` | Public storefront home |
| `/bimshimer/shop` | Full product edit |
| `/bimshimer/hair` | Hair and hair-care category |
| `/bimshimer/skincare` | Skincare category |
| `/bimshimer/product/:id` | Product-detail experience |
| `/bimshimer/journal` | Editorial content page |
| `/bimshimer/about` | Brand story page |
| `/bimshimer/contact` | Contact journey demo |
| `/bimshimer/cart` | Stateful demo bag |
| `/bimshimer/admin` | CMS-style studio workspace |

## Scope boundary

The site intentionally does not process real payments, send email, connect to a WordPress server, or fulfill orders. Those boundaries are visible in the Studio workspace so the project demonstrates honest systems thinking instead of implying production commerce infrastructure that does not exist.
