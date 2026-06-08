# OPTIMAKS_APPROVED_AGENCY_AGENT_MAP.md

**Version:** v1.7.9.3-agency-skill-registry  
**Status:** Active mapping  
**Purpose:** Map common Optimaks issue types to approved agency-agents skills.

---

## 1. Issue type to skill map

| Issue type | Primary skill | Secondary skill | Review gate skill |
|---|---|---|---|
| Repo / constitution verification | Codebase Onboarding Engineer | Technical Writer | Reality Checker |
| Next.js app foundation | Frontend Developer | Codebase Onboarding Engineer | Code Reviewer |
| Supabase client setup | Backend Architect | Security Engineer | Reality Checker |
| P0 table / schema work | Backend Architect | Database Optimizer | Security Engineer |
| RLS policy work | Security Engineer | Backend Architect | Reality Checker |
| App shell / shared UI | Frontend Developer | UX Architect | Accessibility Auditor |
| Workflow page | Frontend Developer | Product Manager | Code Reviewer |
| API route | Backend Architect | API Tester | Security Engineer |
| CI / Vercel / deployment | DevOps Automator | SRE | Reality Checker |
| Documentation / README / handoff | Technical Writer | Project Shepherd | Reality Checker |
| Landing page / SEO | SEO Specialist | UX Architect | Product Manager |
| Sales proposal / pricing explanation | Proposal Strategist | Sales Engineer | Product Manager |
| Customer feedback synthesis | Feedback Synthesizer | Product Manager | Project Shepherd |

---

## 2. MVP01 examples

### ISSUE-003 — Next.js App Foundation

```text
Primary Agency Skill: Frontend Developer
Secondary Agency Skill: Codebase Onboarding Engineer
Review Gate Skill: Code Reviewer
Skill Mode: Advisory + Implementation Support
```

### ISSUE-004 — Supabase P0 Tables

```text
Primary Agency Skill: Backend Architect
Secondary Agency Skill: Database Optimizer
Review Gate Skill: Security Engineer
Skill Mode: Advisory + Implementation Support
```

### ISSUE-007 — RLS Helper Functions and Policies

```text
Primary Agency Skill: Security Engineer
Secondary Agency Skill: Backend Architect
Review Gate Skill: Reality Checker
Skill Mode: Advisory + Review Gate
```

---

## 3. Default fallback

If an issue is unclear, use:

```text
Primary Agency Skill: Codebase Onboarding Engineer
Secondary Agency Skill: Not required
Review Gate Skill: Reality Checker
Skill Mode: Read-only Scan + Advisory
```

Then stop and record any ambiguity in the DONE report.
