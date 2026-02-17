# NEXUS AI — Project Lifecycle Agent Mapping v1.0
## 13-Stage Lifecycle × 188 Agents

---

## STAGE 1: LEAD QUALIFICATION
**Objective**: Determine if the opportunity is worth pursuing
**Duration**: 1-3 days
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| CRO (007) | Revenue fit assessment |
| VP-SALES (116) | Pipeline qualification |
| BDR (121) | Initial outreach, BANT qualification |
| AE/ENT-AE (118/117) | Opportunity assessment |
| REVOPS (125) | CRM entry, lead scoring |

**Gate**: Opportunity passes ICP + BANT → Proceed to Discovery

---

## STAGE 2: DISCOVERY
**Objective**: Deep understanding of client needs, constraints, and success criteria
**Duration**: 1-3 weeks
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| **DISC-AGENT (187)** | Discovery process orchestration |
| AE/ENT-AE (117/118) | Client relationship, business context |
| SALES-ENG (122) | Technical discovery |
| SOL-ARCH (123) | Solution architecture exploration |
| CPO (003) | Strategic fit assessment |
| VP-PROD (064) | Product capability mapping |

**Outputs**: Discovery Report (DISC-AGENT)
**Gate**: Discovery complete + strategic fit confirmed → Proceed to Estimation

---

## STAGE 3: ESTIMATION & PROPOSAL
**Objective**: Accurate estimation, team planning, and proposal creation
**Duration**: 1-2 weeks
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| **EST-AGENT (188)** | Effort, timeline, and team estimation |
| FPA-MGR (151) | Financial modeling, pricing |
| CFO (005) | Pricing approval, margin review |
| SOL-ARCH (123) | Solution architecture for proposal |
| VP-ARCH (014) | Architecture feasibility |
| CTO (002) | Technical feasibility sign-off |
| COO (004) | Resource availability |
| CLO (010) | Contract terms |
| VP-LEGAL (157) | Contract drafting |

**Outputs**: Estimation Document, Proposal, Draft Contract
**Gate**: Proposal approved by CEO/CRO → Send to client

---

## STAGE 4: CONTRACT & KICKOFF
**Objective**: Finalize contract, mobilize team, kick off project
**Duration**: 1-2 weeks
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| CONTRACTS (156) | Contract negotiation |
| CONTRACTS (158) | Contract management |
| COO (004) | Resource allocation |
| SVP-ENG (012) | Team assignment |
| SR-TPM (175) / TPM (176) | Project plan creation |
| PM (066/067) | Requirements refinement |
| SCRUM (177) | Agile setup |
| ONBOARD-AGENT (194) | New team member onboarding |

**Outputs**: Signed contract, project charter, team roster, initial backlog
**Gate**: Contract signed + team assembled → Start Architecture

---

## STAGE 5: ARCHITECTURE & DESIGN
**Objective**: Define technical architecture and UX/UI design
**Duration**: 2-4 weeks
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| VP-ARCH (014) | Architecture review |
| **ARB-AGENT (181)** | Architecture Review Board process |
| PRINC-ENG (026) / STAFF engineers | Architecture design |
| DIR-FE/BE/MOB/DATA (015-018) | Domain architecture |
| VP-DES (074) / DIR-DES (075) | Design direction |
| SR-UXD (079) | Information architecture, flows |
| SR-UID (078) | Visual design, design system |
| UXR (085) | User research |
| SR-PM (068) | Requirements clarity |
| CISO (009) / DIR-SEC (108) | Security architecture review |
| **SEC-REVIEW (182)** | Security review gate |

**Outputs**: Architecture Decision Records (ADRs), Design System, Wireframes, Technical Specs
**Gate**: ARB approval + Design review approval → Start Development

---

## STAGE 6: DEVELOPMENT (SPRINTS)
**Objective**: Build the product in iterative sprints
**Duration**: 6-24 weeks (varies by project)
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| **All Engineering ICs** (028-043, 056-061) | Feature development |
| SEM-FE/BE (019/020), EM-MOB/DATA (023/024) | Team management |
| STAFF-FE/BE (026/027) | Technical leadership |
| PM (068) | Sprint participation, requirements |
| SCRUM (177) | Ceremonies, impediment removal |
| TPM (176) | Cross-team coordination |
| MGR-QA (101) | Test strategy, quality gates |
| **QA-GATE (184)** | PR and staging quality gates |
| SR-QA-AUTO/SDET (099/100) | Test automation, exploratory testing |
| MGR-UI/UX (074/075) | Design-dev collaboration |
| DIR-AIE (091) / SR-AIE (097) | AI feature development |
| DIR-SRE (054) / SR-SRE (062) | Observability setup |
| DIR-CLOUD (053) / SR-DEVOPS (060) | Infrastructure, CI/CD |

**Outputs**: Working software increments, test suites, documentation
**Gate**: Sprint reviews, quality gates per sprint → Continue or proceed to QA

---

## STAGE 7: QA & TESTING
**Objective**: Comprehensive quality validation
**Duration**: 2-4 weeks (overlaps with late development)
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| DIR-QA (100) | Test strategy oversight |
| MGR-QA (101) | Test execution management |
| SR-QA-AUTO (099) | Automation test execution |
| SR-QA-AUTO-MAN (100) | Exploratory + API testing |
| QA-ENG (104) | Test execution |
| PERF-TEST (106) | Load/stress testing |
| A11Y-TEST (107) | Accessibility testing |
| **QA-GATE (184)** | Quality gate enforcement |
| **SEC-REVIEW (182)** | Security scan verification |
| PENTEST (112) | Penetration testing |

**Outputs**: Test reports, performance benchmarks, accessibility audit, security scan results
**Gate**: QA-GATE pass + SEC-REVIEW pass → Proceed to Staging

---

## STAGE 8: STAGING & UAT
**Objective**: Client validation in staging environment
**Duration**: 1-2 weeks
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| TPM (176) | UAT coordination |
| PM (068) | UAT facilitation with client |
| SR-CSM (137) / CSM (138) | Client relationship during UAT |
| QA-ENG (104) | UAT support, bug triage |
| DIR-SRE (054) | Staging environment readiness |
| SUPPORT-T2 (141) | Client issue support |

**Outputs**: UAT sign-off, client feedback, bug fixes
**Gate**: Client UAT approval → Proceed to Pre-Production

---

## STAGE 9: PRE-PRODUCTION READINESS
**Objective**: Final checks before go-live
**Duration**: 3-5 days
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| **REL-APPROVE (185)** | Release approval orchestration |
| **QA-GATE (184)** | Final quality gate |
| **SEC-REVIEW (182)** | Final security review |
| **CHANGE-MGR (186)** | Change advisory board |
| DIR-SRE (054) | Production readiness review |
| SR-SRE (062) | Monitoring + alerting verification |
| DIR-CLOUD (053) | Infrastructure readiness |
| SR-TPM (175) | Launch coordination |
| PRIVACY (160) | Privacy compliance verification |
| CONTRACTS (156) | Legal compliance check |

**Outputs**: Release approval document, rollback plan, monitoring dashboard
**Gate**: REL-APPROVE go → Proceed to Deployment

---

## STAGE 10: DEPLOYMENT & LAUNCH
**Objective**: Production deployment and go-live
**Duration**: 1-3 days
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| **CHANGE-MGR (186)** | Change execution oversight |
| SR-DEVOPS (060) / MGR-DEVOPS (056) | Deployment execution |
| DIR-SRE (054) / SR-SRE (062) | Production monitoring |
| DIR-SEC (108) | Security monitoring (launch) |
| TPM (176) | Launch coordination |
| PM (068) | Feature flag management |
| CSM (138) | Client communication |
| PR-MGR (133) | External communications (if applicable) |
| CMO (006) | Marketing launch (if applicable) |

**Outputs**: Deployed system, launch communications, monitoring active
**Gate**: Deployment stable 24h → Proceed to Hypercare

---

## STAGE 11: HYPERCARE
**Objective**: Intensive post-launch support period
**Duration**: 1-2 weeks
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| DIR-SRE (054) / SR-SRE (062) | Intensive monitoring |
| SUPPORT-T2 (141) / SUPPORT-T1 (142) | Rapid issue response |
| SEM-FE/BE (019/020) | Engineering support (bug fixes) |
| CSM (138) / SR-CSM (137) | Client health monitoring |
| TAM (139) | Technical relationship |
| DIR-QA (100) | Post-launch quality monitoring |
| **RETRO-AGENT (193)** | Post-launch retrospective |

**Outputs**: Incident reports, hotfixes, stability confirmation
**Gate**: Hypercare metrics met (SLA, bug rate, client satisfaction) → Proceed to Handoff

---

## STAGE 12: HANDOFF & TRANSITION
**Objective**: Transition from delivery to ongoing operations
**Duration**: 1-2 weeks
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| **HANDOFF-AGENT (190)** | Handoff orchestration |
| SR-CSM (137) | CS team readiness |
| TAM (139) | Technical knowledge transfer |
| ONBOARD-SPEC (140) | Client onboarding |
| DIR-SRE (054) | Operations handoff |
| SUPPORT-T2 (141) | Support team preparation |
| **RETRO-AGENT (193)** | Project retrospective |
| TPM (176) | Project closure |

**Outputs**: Handoff package, training materials, operational runbooks, project retro
**Gate**: Handoff complete + CS ready → Proceed to Maintenance

---

## STAGE 13: ONGOING MAINTENANCE & GROWTH
**Objective**: Keep system healthy, grow account
**Duration**: Ongoing
**Primary Agents**:
| Agent | Role in Stage |
|-------|--------------|
| **MAINT-AGENT (191)** | Maintenance coordination |
| SR-CSM (137) / CSM (138) | Client relationship, health monitoring |
| TAM (139) | Technical advisory |
| ACCT-MGR (124) | Account growth, renewal |
| SUPPORT-T1/T2 (140/139) | Ongoing support |
| DIR-SRE (054) | System reliability monitoring |
| DIR-SEC (108) | Security patch management |

**Outputs**: Health reports, maintenance updates, expansion proposals
**Gate**: Renewal/expansion → DISC-AGENT for new project cycle

---

## ALWAYS-ACTIVE AGENTS
These agents operate continuously across all stages:
| Agent | Role |
|-------|------|
| **NEXUS-ORCHESTRATOR (195)** | System-wide coordination |
| CEO (001) | Strategic oversight |
| COO (004) | Operational oversight |
| CFO (005) | Financial monitoring |
| CISO (009) | Security monitoring |
| **RETRO-AGENT (193)** | Continuous learning |
| **INNOVATION-AGENT (192)** | Innovation pipeline |

---

## LIFECYCLE VISUALIZATION

```
[1] Lead Qual → [2] Discovery → [3] Estimation → [4] Contract/Kickoff
                                                          ↓
[13] Maintenance ← [12] Handoff ← [11] Hypercare ← [10] Deployment
                                                          ↑
                    [8] UAT ← [7] QA/Testing ← [6] Development ← [5] Architecture
                       ↓
                 [9] Pre-Prod → [10] Deploy
```

**Governance gates**: ARB (Stage 5), QA-GATE (Stages 6-9), SEC-REVIEW (Stages 5,7,9), REL-APPROVE (Stage 9), CHANGE-MGR (Stage 10)
