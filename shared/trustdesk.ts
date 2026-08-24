export type TrustDocument = { id: string; title: string; category: string; text: string };

export const trustdeskCorpus: TrustDocument[] = [
  { id: "policy-001", title: "Client escalation policy", category: "Operations", text: "Escalate blocked client work to the account owner within one business day and record the reason in the activity log." },
  { id: "policy-002", title: "Data access policy", category: "Security", text: "Request access through the approved owner, use least privilege, and never include passwords or API keys in support messages." },
  { id: "policy-003", title: "Remote working guide", category: "People", text: "Teams should document handoffs, keep calendars current, and use the shared workspace for decisions that affect delivery." },
];

const refusalPatterns = [/password/i, /api key/i, /secret/i, /bypass/i, /ignore previous/i, /system prompt/i];

export function retrieveTrustdesk(query: string, mode: "keyword" | "semantic" = "keyword") {
  const terms = query.toLowerCase().split(/\W+/).filter(Boolean);
  return trustdeskCorpus.map((doc) => ({ ...doc, score: terms.reduce((sum, term) => sum + (doc.text.toLowerCase().includes(term) ? 1 : 0), 0) + (mode === "semantic" && doc.category.toLowerCase().includes(terms[0] ?? "") ? 1 : 0) })).filter((doc) => doc.score > 0).sort((a, b) => b.score - a.score);
}

export function evaluateTrustdesk(query: string) {
  const refused = refusalPatterns.some((pattern) => pattern.test(query));
  const results = refused ? [] : retrieveTrustdesk(query);
  return { refused, results, citationCoverage: results.length ? 100 : refused ? 100 : 0, groundedness: results.length > 0 && !refused };
}
