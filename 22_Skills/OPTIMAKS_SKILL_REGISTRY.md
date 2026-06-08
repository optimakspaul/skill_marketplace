# OPTIMAKS_SKILL_REGISTRY.md

**Version:** v1.7.9.3-agency-skill-registry  
**Status:** Active controlled registry  
**Purpose:** Define which external agency-agents skills may be selected inside Optimaks issue workpacks.

---

## 1. Governing rule

External agency agents are advisory execution personas only.

They may support:

```text
implementation planning
focused review
validation checklist design
handoff quality
technical writing
```

They must not:

```text
override Optimaks Constitution
expand issue scope
modify files outside the issue boundary
trigger autonomous multi-agent execution
advance to the next issue
merge PRs
change production settings
change DB / RLS / auth / billing without explicit issue approval
```

---

## 2. Approved MVP01 development skill subset

| Optimaks use | Approved agency skill | External file |
|---|---|---|
| Repo onboarding / first scan | Codebase Onboarding Engineer | `22_Skills/external/agency-agents-main/engineering/engineering-codebase-onboarding-engineer.md` |
| Backend / Supabase / API design | Backend Architect | `22_Skills/external/agency-agents-main/engineering/engineering-backend-architect.md` |
| Frontend / Next.js / UI implementation | Frontend Developer | `22_Skills/external/agency-agents-main/engineering/engineering-frontend-developer.md` |
| Database / index / query review | Database Optimizer | `22_Skills/external/agency-agents-main/engineering/engineering-database-optimizer.md` |
| Vercel / CI / deployment support | DevOps Automator | `22_Skills/external/agency-agents-main/engineering/engineering-devops-automator.md` |
| Security / Auth / RLS review | Security Engineer | `22_Skills/external/agency-agents-main/engineering/engineering-security-engineer.md` |
| Pull request review | Code Reviewer | `22_Skills/external/agency-agents-main/engineering/engineering-code-reviewer.md` |
| API validation | API Tester | `22_Skills/external/agency-agents-main/testing/testing-api-tester.md` |
| Accessibility review | Accessibility Auditor | `22_Skills/external/agency-agents-main/testing/testing-accessibility-auditor.md` |
| Performance review | Performance Benchmarker | `22_Skills/external/agency-agents-main/testing/testing-performance-benchmarker.md` |
| Anti-hallucination / readiness review | Reality Checker | `22_Skills/external/agency-agents-main/testing/testing-reality-checker.md` |
| Documentation / handoff writing | Technical Writer | `22_Skills/external/agency-agents-main/engineering/engineering-technical-writer.md` |

---

## 3. Approved product / GTM / strategy skill subset

Use these outside coding issues, or only when the issue explicitly touches product planning, sales, marketing, or GTM documentation.

| Optimaks use | Approved agency skill | External file |
|---|---|---|
| MVP scope / product decisions | Product Manager | `22_Skills/external/agency-agents-main/product/product-manager.md` |
| Issue prioritization | Sprint Prioritizer | `22_Skills/external/agency-agents-main/product/product-sprint-prioritizer.md` |
| Project coordination | Project Shepherd | `22_Skills/external/agency-agents-main/project-management/project-management-project-shepherd.md` |
| Customer feedback synthesis | Feedback Synthesizer | `22_Skills/external/agency-agents-main/product/product-feedback-synthesizer.md` |
| Proposal / quote positioning | Proposal Strategist | `22_Skills/external/agency-agents-main/sales/sales-proposal-strategist.md` |
| Outbound / cold email strategy | Outbound Strategist | `22_Skills/external/agency-agents-main/sales/sales-outbound-strategist.md` |
| Technical sales explanation | Sales Engineer | `22_Skills/external/agency-agents-main/sales/sales-engineer.md` |
| SEO / landing page content | SEO Specialist | `22_Skills/external/agency-agents-main/marketing/marketing-seo-specialist.md` |
| LinkedIn / social content | Social Media Strategist | `22_Skills/external/agency-agents-main/marketing/marketing-social-media-strategist.md` |

---

## 4. Restricted skills

These may only be used in read-only or advisory mode unless a future constitution amendment explicitly changes their status.

| External skill | Status | Restriction |
|---|---|---|
| Agents Orchestrator | Restricted | May suggest coordination only. Must not run autonomous multi-agent workflow. |
| Rapid Prototyper | Restricted | May suggest prototype options only. Must not bypass issue boundary or validation. |
| Autonomous Optimization Architect | Restricted | May suggest future optimization only. Must not alter scope or implement automatically. |

---

## 5. Required issue declaration

Every issue using an external agency skill must declare:

```text
Primary Agency Skill:
Secondary Agency Skill:
Review Gate Skill:
Skill Mode:
Reason for selection:
Allowed use:
Forbidden use:
External skill files read:
```

If no external skill is needed, write:

```text
Agency Skill Selection: Not required for this issue.
```

---

## 6. Recommended review gate

For coding issues, prefer one review gate skill:

```text
Reality Checker
Code Reviewer
Security Engineer
API Tester
```

For DB / auth / RLS issues, use Security Engineer or Reality Checker as the review gate.

For product / GTM documents, use Product Manager, Proposal Strategist, SEO Specialist, or Feedback Synthesizer as appropriate.
