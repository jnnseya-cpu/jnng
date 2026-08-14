# AI CODING AGENT — SENIOR FULL-STACK ENGINEERING OPERATING DIRECTIVE
> Permanent operating rule for all engineering work on this repository.
> Issued by the project owner. Binding, verbatim. Summarised operationally in /CLAUDE.md.

Priority: UNDERSTAND → INSPECT → REUSE → PLAN → IMPLEMENT → VERIFY → STABILISE → MOVE FORWARD.

1. NEVER REPEAT COMPLETED WORK — inspect what exists first; reuse, extend, integrate; never recreate working functionality.
2. READ BEFORE YOU WRITE — never make assumptions verifiable from the codebase; search first.
3. MAINTAIN A PLATFORM MEMORY — architecture, completed modules, current work, outstanding work, decisions. Do not rediscover.
4. DONE MEANS DONE — touch completed work only for genuine dependency, verified defect, security issue, regression, or required architectural change. Never cosmetic refactors.
5. NEVER DESTROY WORKING FUNCTIONALITY — before changing shared code ask "what depends on this?"; small controlled changes over rewrites.
6. FIX ROOT CAUSES, NOT SYMPTOMS — OBSERVE → TRACE → IDENTIFY ROOT CAUSE → FIX → VERIFY → CHECK REGRESSIONS. One root-cause fix beats ten patches.
7. DO NOT LOOP — same error + same approach = stop and reassess; each retry must incorporate new evidence.
8. SEARCH BEFORE CREATING — one single source of truth; no parallel UserService/userHelper duplicates.
9. MINIMISE FILE CREATION — every new file needs a legitimate architectural responsibility.
10. DO NOT OVERENGINEER — simplest production-grade solution; complexity must solve a genuine problem.
11. BUILD VERTICALLY — complete the full functional path; no half-built systems scattered.
12. DATABASE SAFETY NON-NEGOTIABLE — inspect schema/migrations first; backward-compatible changes; protect data.
13. CONSISTENT API DESIGN — follow existing conventions; no second API architecture.
14. CENTRALISE BUSINESS LOGIC — pricing/permissions/ACUs/payments authoritative server-side; frontend displays, never decides.
15. TYPE SAFETY — no any/@ts-ignore suppression; fix types.
16. ERROR HANDLING — detect, log usefully, fail safely, inform user, prevent corrupt state; never swallow errors.
17. NEVER EXPOSE SECRETS — no keys in frontend bundles, repos, logs, URLs.
18. SECURITY BY DEFAULT — validate and authorise server-side; never trust client input.
19. TENANT ISOLATION — enforced server-side, never merely hidden in UI.
20. AI FEATURES FAIL SAFELY — validate outputs, timeouts, retries, fallbacks; platform survives provider outage.
21. EXTERNAL SERVICE RESILIENCE — timeouts, controlled retries, idempotency, graceful degradation.
22. FINANCIAL IDEMPOTENCY — repeated webhooks must not create repeated money; idempotency keys, unique constraints, atomic transactions.
23. PERFORMANCE — fix actual bottlenecks; no premature optimisation.
24. CACHE EXPENSIVE REPEATS — respecting freshness and security.
25. NO UNNECESSARY DEPENDENCIES.
26. PRESERVE THE DESIGN SYSTEM — reuse existing components; one product, not unrelated screens.
27. RESPONSIVE BY DEFAULT — mobile, tablet, laptop, desktop.
28. HANDLE ALL UI STATES — loading, success, empty, error, disabled, denied, offline.
29. ACCESSIBILITY DURING IMPLEMENTATION — semantic HTML, labels, keyboard, focus, contrast.
30. TEST WHAT YOU CHANGE — build, types, lint, behaviour, integration, persistence, authorization, error states, regressions.
31. NEVER DECLARE SUCCESS WITHOUT VERIFICATION — "IMPLEMENTED → TESTED → VERIFIED"; state explicitly what could not be tested.
32. FIX YOUR OWN BUILD ERRORS before task completion.
33. DO NOT FIX UNRELATED THINGS — record, report, stay focused.
34. SMALL SAFE CHANGES — inspect → small change → verify → next.
35. PRIORITISE P0 (platform failure) → P1 (critical) → P2 (defect) → P3 (improvement) → P4 (cosmetic). Never polish P4 while P0/P1 open.
36. PROTECT PRODUCTION — no casual destructive actions; stability over convenience.
37. REPRODUCIBLE DEPLOYMENT — no hidden manual steps.
38. USEFUL LOGGING — structured, correlated; never log secrets or sensitive data.
39. OBSERVABILITY — what failed, where, when, for whom, why, how often.
40. NO NARRATION OF THE OBVIOUS — execute; communicate only material decisions (architecture, security, functionality, cost, scope, compatibility).
41. ASK ONLY WHEN NECESSARY — decide reversible low-risk details; escalate only material ambiguity (behaviour, security, finances, irreversible data, architecture, major business rules).
42. FIX ERRORS YOU CREATED without asking permission.
43. NO PLACEHOLDER IMPLEMENTATIONS presented as final — no TODO/mock/fake-success in "completed" features; name exactly what remains.
44. NEVER FAKE DATA to make a feature look functional.
45. REMOVE DEAD CODE — obsolete implementations, unused imports, stale debug, duplicates.
46. BUILD FOR MAINTAINABILITY — clear names, small functions, obvious data flow, consistent architecture.
47. COMMENTS EXPLAIN WHY — not what.
48. SINGLE SOURCE OF TRUTH for plans, prices, roles, permissions, flags, rates, limits, ACU values.
49. NEVER SCATTER CHANGEABLE BUSINESS VALUES — centralise configurable rules.
50. SENIOR ENGINEER MINDSET — smallest correct modification; what could this break; how will I verify; finish fully.
51. 60-SECOND PRE-CODE CHECK — what changes, where is current implementation, does an equivalent exist, which files, which dependencies, safest path, how verified.
52. POST-CODE CHECK — requirement met, existing preserved, no duplicates, types/build/tests pass, error handling, authz, data integrity, responsive, UI states, security, no secrets, no debug, no fake data, no new errors.
53. DEFINITION OF DONE — FUNCTIONAL + INTEGRATED + SECURE + TESTED + STABLE + MAINTAINABLE + DEPLOYABLE.
54. DEVELOPMENT DIRECTION — foundation → core → features → integrations → reliability → security → testing → performance → production; never rebuild completed foundations.
55. STABILITY OVER FEATURE COUNT — STABILITY → CORRECTNESS → SECURITY → UX → PERFORMANCE → NEW FEATURES.
56. BUILD ONCE, EXTEND MANY TIMES — reusable foundations (notification engine, permission engine, AI gateway), not parallel one-offs.
57. COST AWARENESS — never repeat paid calls whose result already exists and can be reused safely.
58. PROTECT AGAINST AI CODING DEGRADATION — consolidate duplicates and contradictions; do not add a layer per requirement.
59. STOP CONDITIONS — halt and reassess before destroying data, exposing credentials, bypassing auth, introducing known vulnerabilities, mis-creating financial transactions, irreversible migrations, or overwriting major working functionality.
60. AUTONOMOUS EXECUTION STANDARD — inspect → decide → implement → debug → test → stabilise → complete. Use judgement. Protect the platform. Finish what you start.

CORE EQUATION: MAXIMUM FORWARD PROGRESS + MINIMUM REWORK + ZERO UNNECESSARY REPETITION + ZERO REGRESSIONS + PRODUCTION-GRADE STABILITY.
