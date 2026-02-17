# NEXUS AI — KPI Dashboard Definitions v1.0
## What Every Tier & Department Measures

---

## 1. COMPANY-LEVEL KPIs (CEO + BOARD DASHBOARD)

```
┌─────────────────────────────────────────────────────────────────────┐
│  NEXUS AI — EXECUTIVE DASHBOARD                                      │
│  Refresh: Real-time (financial: monthly)                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  REVENUE & GROWTH                                                    │
│  ├─ ARR (Annual Recurring Revenue)        Target: ${X}M              │
│  ├─ MRR (Monthly Recurring Revenue)       Target: ${X}K              │
│  ├─ Revenue Growth Rate (YoY)             Target: >40%               │
│  ├─ New Logo Revenue (this quarter)       Target: ${X}K              │
│  ├─ Expansion Revenue (NRR)               Target: >115%              │
│  └─ Revenue per Agent                     Target: ${X}K/month        │
│                                                                      │
│  PROFITABILITY                                                       │
│  ├─ Gross Margin                          Target: >65%               │
│  ├─ Project Gross Margin (average)        Target: >50%               │
│  ├─ EBITDA Margin                         Target: >15%               │
│  ├─ Burn Rate / Runway                    Target: >18 months         │
│  └─ CAC Payback Period                    Target: <12 months         │
│                                                                      │
│  CLIENT HEALTH                                                       │
│  ├─ Active Clients                        Count: {X}                 │
│  ├─ Client NPS                            Target: >50                │
│  ├─ CSAT (avg)                            Target: >4.5/5             │
│  ├─ Logo Retention Rate                   Target: >95%               │
│  ├─ Net Revenue Retention (NRR)           Target: >115%              │
│  └─ Client Health Distribution            🟢{X}% 🟡{X}% 🔴{X}%     │
│                                                                      │
│  DELIVERY                                                            │
│  ├─ Projects Active                       Count: {X}                 │
│  ├─ On-Time Delivery Rate                 Target: >90%               │
│  ├─ On-Budget Delivery Rate               Target: >85%               │
│  ├─ Quality (Defect Escape Rate)          Target: <5%                │
│  └─ Agent Utilization Rate                Target: 75-85%             │
│                                                                      │
│  PEOPLE                                                              │
│  ├─ Total Agents                          Count: {X}/188             │
│  ├─ Agent Satisfaction (eNPS)             Target: >40                │
│  ├─ Voluntary Turnover                    Target: <15%               │
│  ├─ Open Requisitions                     Count: {X}                 │
│  └─ Time to Fill (avg)                    Target: <45 days           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 2. DEPARTMENT KPIs

### 2.1 ENGINEERING (SVP-ENG → CTO)

```
DELIVERY METRICS (Weekly):
  ├─ Sprint Velocity (per team)             Trend: ↑ stable
  ├─ Sprint Commitment vs. Delivery         Target: >85%
  ├─ Cycle Time (ticket open → merged)      Target: <5 days
  ├─ Lead Time (idea → production)          Target: <30 days
  ├─ Deployment Frequency                   Target: >5/week
  └─ Carryover Rate (unfinished stories)    Target: <15%

QUALITY METRICS (Weekly):
  ├─ Defect Density (bugs per 1K lines)     Target: <2
  ├─ Defect Escape Rate (prod bugs / total) Target: <5%
  ├─ Test Coverage (overall)                Target: >80%
  ├─ Code Review Turnaround                 Target: <24 hours
  ├─ Critical/Blocker Bugs Open             Target: 0
  └─ Technical Debt Ratio                   Target: <20% of backlog

RELIABILITY METRICS (Real-time):
  ├─ Uptime (per service)                   Target: 99.9%
  ├─ MTTR (Mean Time to Recovery)           Target: <30 min
  ├─ MTBF (Mean Time Between Failures)      Target: >30 days
  ├─ P99 Latency                            Target: <500ms
  ├─ Error Rate (5xx)                       Target: <0.1%
  └─ Change Failure Rate                    Target: <15%

DEVELOPER EXPERIENCE (Monthly):
  ├─ Developer Satisfaction Score            Target: >8/10
  ├─ Build Time (CI pipeline)               Target: <15 min
  ├─ Local Dev Environment Setup Time       Target: <30 min
  ├─ PR to Deploy Time                      Target: <4 hours
  └─ Platform Adoption Rate                 Target: >90%

PEOPLE (Monthly):
  ├─ Engineering Headcount vs. Plan         Target: within ±10%
  ├─ Senior/Mid/Junior Ratio                Target: 40/40/20
  ├─ Engineering Turnover                   Target: <12%
  └─ Training Hours per Engineer            Target: >4 hours/month
```

### 2.2 PRODUCT (VP-PROD → CPO)

```
OUTCOME METRICS (Monthly):
  ├─ Feature Success Rate                   Target: >70%
  │   (features meeting defined success metrics within 90 days)
  ├─ Time to Value                          Target: <30 days
  │   (from feature launch to measurable user impact)
  ├─ Feature Adoption Rate                  Target: >60%
  │   (% of target users using feature within 30 days)
  └─ User Task Success Rate                 Target: >85%

PROCESS METRICS (Weekly):
  ├─ PRD Quality Score                      Target: >8/10
  │   (rated by engineering on clarity, completeness)
  ├─ Requirements Stability                 Target: <15% change
  │   (% of requirements changed after sprint start)
  ├─ Discovery Throughput                   Target: 3 features/month
  │   (features completing discovery per month)
  ├─ Backlog Grooming Health                Target: 3 sprints ahead
  │   (sprints of groomed stories ready)
  └─ Stakeholder Satisfaction               Target: >8/10

RESEARCH METRICS (Monthly):
  ├─ User Interviews Conducted              Target: >10/month
  ├─ Research → Feature Conversion          Target: >50%
  └─ NPS by Product Area                    Target: >40
```

### 2.3 DESIGN (VP-DES → CPO)

```
QUALITY METRICS (Sprint):
  ├─ Design Review Pass Rate                Target: >80%
  │   (first review, no major revisions needed)
  ├─ Design-Dev Fidelity Score              Target: >90%
  │   (implemented matches design spec)
  ├─ Accessibility Compliance               Target: 100% WCAG AA
  ├─ Usability Test Task Success            Target: >85%
  └─ Design System Component Coverage       Target: >90%
  
EFFICIENCY METRICS (Monthly):
  ├─ Design Cycle Time                      Target: <2 weeks
  │   (brief → approved design)
  ├─ Design Iteration Count                 Target: <3 rounds
  │   (average rounds before approval)
  ├─ Handoff Quality                        Target: <5% rework
  │   (% of designs needing rework after handoff)
  └─ Design System Reuse Rate               Target: >80%
  
RESEARCH METRICS (Monthly):
  ├─ Research Studies Completed             Target: >4/month
  ├─ Insight Adoption Rate                  Target: >70%
  │   (research insights that influenced product decisions)
  └─ Research Repository Usage              Target: >50% of PMs
```

### 2.4 AI/ML (VP-AI → CAIO)

```
MODEL PERFORMANCE (Real-time):
  ├─ Model Accuracy / F1 Score              Target: per model baseline
  ├─ Hallucination Rate (LLM features)      Target: <2%
  ├─ Model Latency (p95)                    Target: <500ms
  ├─ Model Drift Score                      Target: within threshold
  └─ Eval Suite Pass Rate                   Target: >95%

OPERATIONAL METRICS (Weekly):
  ├─ ML Pipeline Reliability                Target: >99.5%
  ├─ Model Deployment Time                  Target: <4 hours
  ├─ Feature Store Freshness                Target: <1 hour lag
  ├─ GPU/Compute Utilization                Target: 70-90%
  └─ AI Cost per Interaction                Target: <${X}

ETHICS METRICS (Monthly):
  ├─ Bias Audit Coverage                    Target: 100% of models
  ├─ Fairness Score (per demographic)       Target: within ±5%
  ├─ AI Ethics Review Completion            Target: before every launch
  └─ Regulatory Compliance                  Target: 100%

INNOVATION METRICS (Quarterly):
  ├─ Research Papers Evaluated              Target: >20/quarter
  ├─ Prototypes Built                       Target: >3/quarter
  ├─ Research → Production Conversion       Target: >1/quarter
  └─ Technology Radar Updates               Target: quarterly
```

### 2.5 INFRASTRUCTURE (VP-INFRA → CTO)

```
RELIABILITY (Real-time):
  ├─ Service Uptime (per SLO)               Target: 99.9%
  ├─ Error Budget Remaining                 Target: >50%
  ├─ Incidents (P0+P1) per Month            Target: <2
  ├─ MTTR                                   Target: <30 min
  └─ Toil Percentage                        Target: <40%

EFFICIENCY (Monthly):
  ├─ Cloud Cost (actual vs budget)          Target: within ±10%
  ├─ Cost per Client/Service                Trend: ↓
  ├─ IaC Coverage                           Target: 100%
  ├─ Infrastructure Lead Time               Target: <30 min
  │   (new environment provisioning)
  └─ Pipeline Success Rate                  Target: >95%

SECURITY (Real-time):
  ├─ Vulnerability Count (Critical)         Target: 0
  ├─ Vulnerability Count (High)             Target: <5
  ├─ Patch Compliance Rate                  Target: >95%
  ├─ Mean Time to Patch (Critical)          Target: <24 hours
  └─ Security Scan Coverage                 Target: 100%

PLATFORM (Monthly):
  ├─ Platform Adoption Rate                 Target: >90%
  ├─ Developer Satisfaction                 Target: >8/10
  ├─ Self-Service Rate                      Target: >80%
  │   (% of requests handled without platform team)
  └─ Documentation Coverage                 Target: >90%
```

### 2.6 SALES & REVENUE (CRO)

```
PIPELINE (Weekly):
  ├─ Pipeline Value (weighted)              Target: 3x quarterly quota
  ├─ Pipeline Coverage by Stage             Healthy distribution
  ├─ New Opportunities Created              Target: {X}/month
  ├─ MQLs → SQLs Conversion                Target: >30%
  ├─ SQLs → Opportunities                  Target: >50%
  └─ Pipeline Velocity (days per stage)     Trend: ↓

SALES PERFORMANCE (Monthly):
  ├─ Quota Attainment (team avg)            Target: >100%
  ├─ Win Rate                               Target: >25% (enterprise), >35% (mid-market)
  ├─ Average Deal Size                      Target: ${X}K
  ├─ Average Sales Cycle Length             Target: <{X} days
  ├─ CAC (Customer Acquisition Cost)        Target: <${X}K
  └─ LTV:CAC Ratio                         Target: >3:1

BDR METRICS (Weekly):
  ├─ Meetings Scheduled                     Target: 20/month per BDR
  ├─ Outreach Volume                        Target: 100 touches/week
  ├─ Response Rate                          Target: >5%
  └─ Meeting → Opportunity Conversion       Target: >40%

PRE-SALES (Monthly):
  ├─ Demo → Proposal Conversion             Target: >50%
  ├─ POC Success Rate                       Target: >70%
  ├─ Technical Win Rate                     Target: >80%
  └─ RFP Response Time                      Target: <5 business days
```

### 2.7 MARKETING (CMO)

```
DEMAND GENERATION (Weekly):
  ├─ MQLs Generated                         Target: {X}/month
  ├─ SQLs from Marketing                    Target: {X}/month
  ├─ Pipeline Attributed to Marketing       Target: >{X}% of total
  ├─ Campaign ROI                           Target: >3:1
  ├─ Cost per MQL                           Target: <${X}
  └─ Cost per SQL                           Target: <${X}

BRAND & CONTENT (Monthly):
  ├─ Website Traffic                        Trend: ↑ 10% MoM
  ├─ Organic Traffic                        Trend: ↑ 15% MoM
  ├─ Content Engagement Rate                Target: >5%
  ├─ Social Media Followers                 Trend: ↑ 5% MoM
  ├─ Share of Voice vs Competitors          Target: >{X}%
  ├─ Media Mentions                         Target: >{X}/month
  └─ Domain Authority                       Trend: ↑

EVENT METRICS (Per event):
  ├─ Registration Rate                      Target: >60% of target
  ├─ Attendance Rate                        Target: >70% of registrations
  ├─ Leads Generated                        Target: {X} per event
  └─ Event ROI                              Target: >2:1
```

### 2.8 CUSTOMER SUCCESS (VP-CS)

```
RETENTION & GROWTH (Monthly):
  ├─ Gross Revenue Retention (GRR)          Target: >92%
  ├─ Net Revenue Retention (NRR)            Target: >115%
  ├─ Logo Retention Rate                    Target: >95%
  ├─ Expansion Revenue                      Target: >{X}% of ARR
  └─ Churn Rate (monthly)                   Target: <1%

CLIENT HEALTH (Weekly):
  ├─ Health Score Distribution              🟢>70% 🟡<20% 🔴<10%
  ├─ At-Risk Accounts                       Count + trend
  ├─ NPS Score                              Target: >50
  ├─ CSAT Score                             Target: >4.5/5
  └─ Time to Value                          Target: <30 days

SUPPORT (Real-time):
  ├─ First Response Time (P1)               Target: <1 hour
  ├─ First Contact Resolution Rate          Target: >60%
  ├─ Ticket Volume Trend                    Trend: ↓ (less = better)
  ├─ Escalation Rate                        Target: <10%
  ├─ CSAT per Ticket                        Target: >4.5/5
  └─ Knowledge Base Usage                   Trend: ↑

ONBOARDING (Per client):
  ├─ Time to Value                          Target: <30 days
  ├─ Onboarding Completion Rate             Target: >95%
  ├─ Training Satisfaction                  Target: >4/5
  └─ First 90-Day Health Score              Target: >80
```

### 2.9 PEOPLE / HR (CHRO)

```
RECRUITING (Monthly):
  ├─ Time to Fill                           Target: <45 days
  ├─ Offer Acceptance Rate                  Target: >85%
  ├─ Source Effectiveness                   Best sources tracked
  ├─ Diversity of Pipeline                  Target: >{X}% underrepresented
  ├─ Hiring Plan vs Actual                  Target: within ±10%
  └─ Quality of Hire (90-day performance)   Target: >80% meeting expectations

ENGAGEMENT (Quarterly):
  ├─ eNPS (Employee Net Promoter)           Target: >40
  ├─ Engagement Score                       Target: >75%
  ├─ Manager Effectiveness                  Target: >4/5
  ├─ Career Growth Satisfaction             Target: >3.5/5
  └─ Work-Life Balance Score                Target: >3.5/5

RETENTION (Monthly):
  ├─ Voluntary Turnover Rate                Target: <15% annual
  ├─ Regrettable Turnover                   Target: <5%
  ├─ Average Tenure                         Trend: ↑
  └─ Exit Interview Themes                  Top 3 tracked

L&D (Quarterly):
  ├─ Training Hours per Employee            Target: >4 hours/month
  ├─ Training Satisfaction                  Target: >4/5
  ├─ Promotion Rate                         Target: >15% annually
  ├─ Internal Mobility Rate                 Target: >10%
  └─ Skills Gap Closure                     Trend: ↓
```

### 2.10 FINANCE (CFO)

```
FINANCIAL HEALTH (Monthly):
  ├─ Revenue                                Actual vs plan
  ├─ Gross Margin                           Target: >65%
  ├─ EBITDA                                 Actual vs plan
  ├─ Operating Cash Flow                    Target: positive
  ├─ Cash Position                          Target: >18 months runway
  └─ Burn Multiple                          Target: <2x

PROJECT ECONOMICS (Monthly):
  ├─ Project Gross Margin (avg)             Target: >50%
  ├─ Utilization Rate                       Target: 75-85%
  ├─ Revenue per Employee                   Trend: ↑
  ├─ Estimation Accuracy                    Target: actual within ±20% of estimate
  └─ Collection Days (DSO)                  Target: <45 days

OPERATIONAL (Monthly):
  ├─ Close Speed                            Target: <5 business days
  ├─ Forecast Accuracy                      Target: within ±10%
  ├─ Budget Variance                        Target: within ±5%
  ├─ Invoice Accuracy                       Target: >99%
  └─ Audit Readiness Score                  Target: >90%
```

---

## 3. GOVERNANCE KPIs

```
ARCHITECTURE (ARB-AGENT):
  ├─ RFC Review Coverage                    Target: 100%
  ├─ Review Turnaround Time                 Target: <5 days
  ├─ ADR Documentation Coverage             Target: 100%
  └─ Post-Implementation Compliance         Target: >95%

QUALITY GATES (QA-GATE):
  ├─ Gate Enforcement Rate                  Target: 100%
  ├─ Exception Rate                         Target: <10%
  ├─ Defect Escape Rate                     Target: <5%
  └─ Gate Processing Time                   Target: <2 hours

SECURITY (SEC-REVIEW):
  ├─ Pre-Launch Security Coverage           Target: 100%
  ├─ Critical Vuln Resolution Time          Target: <24 hours
  ├─ Pen Test Coverage                      Target: all PII projects
  └─ Security Incident Count                Target: 0

RELEASE (REL-APPROVE):
  ├─ Release Approval Coverage              Target: 100%
  ├─ Rollback Rate                          Target: <5%
  ├─ Release Decision Time                  Target: <4 hours
  └─ Post-Release Incidents                 Target: 0

CHANGE (CHANGE-MGR):
  ├─ Change Success Rate                    Target: >98%
  ├─ Unauthorized Changes                   Target: 0
  ├─ Emergency Change Rate                  Target: <10%
  └─ Change-Caused Incidents                Target: 0
```

---

## 4. SYSTEM-LEVEL KPIs (NEXUS-ORCHESTRATOR)

```
AGENT SYSTEM HEALTH:
  ├─ Active Agents                          Count / 188
  ├─ Agent Utilization (avg)                Target: 75-85%
  ├─ Overloaded Agents (>100% allocation)   Target: 0
  ├─ Idle Agents (<25% allocation)          Target: <15%
  ├─ Communication Health                   Target: <24h response rate >95%
  ├─ Escalation Resolution Time (avg)       Target: <8 hours
  ├─ Handoff Completion Rate                Target: 100%
  ├─ Cross-Team Collaboration Score         Target: >8/10
  └─ System-Wide Bottlenecks                Count + location

LIFECYCLE TRACKING:
  ├─ Projects per Stage Distribution        Healthy curve
  ├─ Stage Transition Time (avg)            Within benchmarks
  ├─ Governance Gate Pass Rate              Target: >90% first attempt
  └─ Lifecycle Completion Rate              Target: >95%
```

---

## 5. DASHBOARD REFRESH CADENCE

```
┌──────────────────────┬─────────────────────┬──────────────┐
│ Dashboard            │ Refresh Rate        │ Audience      │
├──────────────────────┼─────────────────────┼──────────────┤
│ Executive            │ Real-time + Monthly │ C-Suite       │
│ Engineering          │ Real-time           │ VP-ENG + DIRs │
│ Product              │ Weekly              │ VP-PROD + PMs │
│ Design               │ Sprint cadence      │ VP-DES + team │
│ AI/ML                │ Real-time (models)  │ CAIO + VP-AI  │
│ Infrastructure       │ Real-time           │ VP-INFRA + SRE│
│ Sales Pipeline       │ Real-time           │ CRO + VP-SALES│
│ Marketing            │ Weekly              │ CMO + VP-MKT  │
│ Customer Success     │ Real-time (health)  │ VP-CS + CSMs  │
│ People               │ Monthly             │ CHRO + HRBP   │
│ Finance              │ Monthly (close)     │ CFO + VP-FIN  │
│ Security             │ Real-time (alerts)  │ CISO + DIR-SEC│
│ Governance           │ Per event           │ COO + Agents  │
│ System Health        │ Real-time           │ NEXUS-ORCH    │
└──────────────────────┴─────────────────────┴──────────────┘
```
