-- GrowthLab funnel query contract
-- Expected columns: event_name, anonymous_session_id, campaign, occurred_at
WITH session_funnel AS (
  SELECT
    anonymous_session_id,
    MAX(CASE WHEN event_name = 'page_view' THEN 1 ELSE 0 END) AS viewed,
    MAX(CASE WHEN event_name = 'cta_click' THEN 1 ELSE 0 END) AS engaged,
    MAX(CASE WHEN event_name = 'lead_submit' THEN 1 ELSE 0 END) AS converted,
    MAX(CASE WHEN event_name = 'qualified_call' THEN 1 ELSE 0 END) AS activated,
    MIN(campaign) AS campaign
  FROM growth_events
  WHERE occurred_at >= :start_date AND occurred_at < :end_date
  GROUP BY anonymous_session_id
)
SELECT campaign,
  SUM(viewed) AS sessions,
  SUM(engaged) AS engaged_sessions,
  SUM(converted) AS leads,
  SUM(activated) AS qualified_calls,
  ROUND(100.0 * SUM(engaged) / NULLIF(SUM(viewed), 0), 1) AS engagement_rate,
  ROUND(100.0 * SUM(converted) / NULLIF(SUM(viewed), 0), 1) AS conversion_rate,
  ROUND(100.0 * (SUM(viewed) - SUM(converted)) / NULLIF(SUM(viewed), 0), 1) AS drop_off_rate
FROM session_funnel
GROUP BY campaign
ORDER BY conversion_rate DESC;

-- Cohort extension: group by DATE_FORMAT(first_seen_at, '%Y-%m-01')
-- and compare lead_submit / qualified_call within 7, 14, and 30 days.
