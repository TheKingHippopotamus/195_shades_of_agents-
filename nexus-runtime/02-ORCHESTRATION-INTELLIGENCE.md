# 02 — ORCHESTRATION INTELLIGENCE
## Learned Routing Policy for NEXUS-ORCHESTRATOR (Agent 195)

**Author:** CAIO (Agent 011) — Chief AI Officer, NEXUS AI
**Status:** Design Document v1.0
**Date:** 2026-02-19
**Classification:** Internal Architecture — NEXUS Runtime Core

---

## Executive Summary

This document designs the Orchestration Intelligence system that transforms NEXUS-ORCHESTRATOR (Agent 195) from a static routing table into a learned, adaptive policy engine. Drawing on four state-of-the-art research contributions — Puppeteer (evolving orchestration via RL), CASTER (context-aware task routing), DrMAS (stable multi-agent RL training), and Symphony (decentralized beacon selection) — we define a production-grade architecture that dynamically dispatches tasks to the right agents, selects the right model tier, learns from project outcomes, and degrades gracefully when the learned policy is uncertain.

The system targets three measurable outcomes:
1. **40-60% reduction in inference cost** via intelligent model tiering (CASTER-style routing)
2. **15-25% improvement in task completion quality** via learned agent selection (Puppeteer-style RL)
3. **Elimination of gradient instability** in multi-agent training via agent-wise normalization (DrMAS)

---

## Table of Contents

1. [Current State Analysis](#1-current-state-analysis)
2. [Target State](#2-target-state)
3. [Orchestration Policy Design](#3-orchestration-policy-design)
4. [CASTER Integration — Dynamic Model Routing](#4-caster-integration)
5. [DrMAS Training Strategy](#5-drmas-training-strategy)
6. [Symphony Beacon Selection](#6-symphony-beacon-selection)
7. [Task Decomposition Engine](#7-task-decomposition-engine)
8. [Learning Loop](#8-learning-loop)
9. [Fallback Strategy](#9-fallback-strategy)
10. [Algorithm Pseudocode](#10-algorithm-pseudocode)

---

## 1. Current State Analysis

### 1.1 Static Routing Architecture

NEXUS currently routes requests through a hardcoded routing table defined in `CLAUDE.md`:

```
Request Domain    -> C-Suite Leader  -> Department
─────────────────────────────────────────────────
Frontend/Backend  -> CTO            -> Engineering (Dept 02) + Platform (Dept 03)
AI/ML             -> CAIO           -> Data Science & AI/ML (Dept 06)
Marketing         -> CMO            -> Marketing (Dept 10)
Security          -> CISO           -> Security (Dept 08)
Cross-department  -> CSA            -> All departments
```

### 1.2 Problems with Static Routing

| Problem | Impact | Root Cause |
|---------|--------|------------|
| **No task difficulty assessment** | Opus-tier models invoked for trivial tasks | No complexity classifier |
| **Fixed agent selection** | Same agents activated regardless of context | No learned preferences |
| **No feedback loop** | Routing quality never improves | No outcome tracking |
| **Binary dispatching** | Either one leader or all leaders, nothing in between | No nuanced team formation |
| **No cost optimization** | Every agent invocation uses the same model tier | No model cascading |
| **Topology rigidity** | Chain/tree structures only, no cycles or refinement loops | No dynamic topology |

### 1.3 Cost Profile Under Static Routing

Under the current approach, every agent invocation defaults to the most capable model available. For a typical project lifecycle (13 stages, ~30 agent invocations):

```
Current cost per project (estimated):
  C-Suite decisions (11 agents, Opus):     11 x $0.06 = $0.66
  Director/Manager decisions (Sonnet):     12 x $0.015 = $0.18
  IC execution (Sonnet):                   20 x $0.015 = $0.30
  Governance gates (Opus):                  6 x $0.06 = $0.36
  ─────────────────────────────────────────────────────────────
  Total per project:                                    ~$1.50

With CASTER-style routing (projected):
  C-Suite decisions (Opus):                 4 x $0.06 = $0.24
  Complex IC work (Sonnet):               12 x $0.015 = $0.18
  Routine IC work (Haiku):                20 x $0.003 = $0.06
  Governance gates (Opus):                  3 x $0.06 = $0.18
  ─────────────────────────────────────────────────────────────
  Total per project (projected):                       ~$0.66
  Reduction:                                            ~56%
```

---

## 2. Target State

### 2.1 Puppeteer-Style Learned Orchestration

The target architecture replaces the static routing table with a **centralized learned policy** that functions as a "puppeteer" directing 195 "puppets" (agents). The orchestrator:

1. **Observes** the current task state (request text, project phase, active context, prior agent outputs)
2. **Selects** which agent(s) to activate next, using a learned policy trained via RL
3. **Assigns** the optimal model tier (Opus/Sonnet/Haiku) per invocation via a difficulty router
4. **Terminates** the reasoning chain when the policy determines sufficient work has been done
5. **Learns** from project outcomes to improve future routing decisions

### 2.2 Architecture Overview

```
                    +-------------------+
                    |   User Request    |
                    +--------+----------+
                             |
                    +--------v----------+
                    |  Task Decomposer  |  (Section 7)
                    |  Breaks request   |
                    |  into subtasks    |
                    +--------+----------+
                             |
                    +--------v----------+
                    | Orchestration     |
                    | Policy pi_theta   |  (Section 3)
                    |                   |
                    | State: S_t        |
                    | Action: a_t in A  |
                    | (agent selection) |
                    +--------+----------+
                             |
              +--------------+--------------+
              |              |              |
     +--------v---+  +------v------+  +----v--------+
     | Model Tier |  | Department  |  | Symphony    |
     | Router     |  | Beacon      |  | Intra-Dept  |
     | (CASTER)   |  | Selection   |  | Routing     |
     | Section 4  |  | Section 6   |  | Section 6   |
     +--------+---+  +------+------+  +----+--------+
              |              |              |
              +--------------+--------------+
                             |
                    +--------v----------+
                    |  Agent Execution  |
                    |  (195 agents)     |
                    +--------+----------+
                             |
                    +--------v----------+
                    |  Outcome Reward   |
                    |  + Cost Signal    |
                    +--------+----------+
                             |
                    +--------v----------+
                    |  Learning Loop    |  (Section 8)
                    |  DrMAS Training   |  (Section 5)
                    +-------------------+
```

### 2.3 Design Principles

1. **Markov Property** — The policy conditions only on the current state S_t, not the full history. This enables tractable RL optimization and efficient inference.
2. **Compositionality** — The orchestration policy, model router, and beacon selector are separate, composable modules that can be trained and deployed independently.
3. **Graceful Degradation** — When the learned policy is uncertain (entropy above threshold), the system falls back to the static routing table. The user never sees a failure from the learned system.
4. **Cost-Awareness** — Every routing decision carries an explicit cost signal. The reward function jointly optimizes quality and efficiency.
5. **Agent-Wise Stability** — Training uses per-agent advantage normalization (DrMAS) to prevent gradient instability across the 195 heterogeneous agents.

---

## 3. Orchestration Policy Design

### 3.1 State Representation

The global system state S_t at orchestration step t is a composite vector:

```
S_t = [s_task, s_context, s_phase, s_agents, s_cost]
```

**s_task** (Task Embedding, dim=1536):
- Semantic embedding of the original user request via `text-embedding-3-small`
- Captures domain (engineering, design, legal, etc.), complexity, and intent

**s_context** (Context Summary, dim=512):
- Rolling summary embedding of all prior agent outputs in the current trajectory
- Updated after each agent execution step
- Captures accumulated reasoning, intermediate results, and remaining gaps

**s_phase** (Project Phase, dim=13):
- One-hot encoding of the current lifecycle stage (Discovery through Retrospective)
- Determines which agent pools are eligible for activation

**s_agents** (Agent State, dim=195 x 4 = 780):
- For each of the 195 agents: [availability (0/1), current_load (0-1), recency_of_activation (0-1), capability_match_score (0-1)]
- Continuously updated as agents are activated and complete work

**s_cost** (Budget State, dim=3):
- [tokens_consumed / budget, steps_taken / max_steps, cost_accrued / cost_budget]
- Enables the policy to factor in remaining budget when selecting agents

**Total state dimension:** 1536 + 512 + 13 + 780 + 3 = **2844**

### 3.2 Action Space

The action space A consists of selecting one agent from the 195-agent pool plus a TERMINATE action:

```
A = {agent_1, agent_2, ..., agent_195, TERMINATE}
|A| = 196
```

At each step t, the policy outputs a distribution over actions:

```
pi_theta(a_t | S_t) = softmax(f_theta(S_t))    where f_theta: R^2844 -> R^196
```

**Action Masking:** Not all 196 actions are valid at every step. We apply a binary mask M_t based on:
- Project phase (only lifecycle-eligible agents can be selected)
- Agent availability (overloaded or unavailable agents are masked)
- Tier constraints (governance gates only during Review/Release phases)
- Cost budget (if budget nearly exhausted, mask expensive agents)

```
pi_theta(a_t | S_t) = softmax(f_theta(S_t) + log(M_t))
```

where M_t is a binary vector (1=valid, 0=masked) and log(0) = -inf effectively zeroes out invalid actions.

### 3.3 Reward Function

The reward function jointly optimizes task quality and computational efficiency, following Puppeteer's design:

```
R(tau) = r_quality - lambda * C_total
```

where:
- **r_quality in [0, 1]**: Task completion quality, assessed via automated evaluation (code correctness, test pass rate, deliverable completeness) or LLM-as-judge scoring
- **lambda in [0, 1]**: Cost-quality tradeoff coefficient (default: 0.1)
- **C_total**: Normalized total cost of the trajectory

**Step-wise cost function:**

```
C_t = F(a_t) * (1 + t / T_max)
```

where:
- F(a_t) = normalized token cost of invoking agent a_t with its assigned model tier
- t / T_max = step penalty that increases linearly, encouraging early termination
- T_max = maximum allowed steps (default: 20 for standard projects, 50 for complex)

**Recursive reward propagation:**

```
R_t = { r_quality - C_T,           if t = T (terminal)
      { gamma * R_{t+1} - C_t,     if t < T
```

where gamma = 0.99 is the discount factor.

### 3.4 Policy Network Architecture

```
Input: S_t (dim 2844)
  |
  +--[TaskEncoder]---> h_task (dim 256)    # MLP: 1536 -> 512 -> 256
  |
  +--[ContextEncoder]-> h_ctx (dim 128)    # MLP: 512 -> 256 -> 128
  |
  +--[PhaseEncoder]--> h_phase (dim 32)    # Embedding: 13 -> 32
  |
  +--[AgentEncoder]--> h_agents (dim 128)  # MLP: 780 -> 256 -> 128
  |
  +--[CostEncoder]---> h_cost (dim 16)     # MLP: 3 -> 16
  |
  v
  [Concatenate] -> h_joint (dim 560)
  |
  [FusionMLP] -> h_fused (dim 256)         # 560 -> 256, ReLU, Dropout(0.2)
  |
  [PolicyHead] -> logits (dim 196)         # 256 -> 196
  |
  [ActionMask + Softmax] -> pi(a_t | S_t)
```

**Parameter count:** ~1.2M parameters — lightweight enough to run inference in <5ms, enabling real-time orchestration decisions.

---

## 4. CASTER Integration

### 4.1 Dynamic Model Routing

CASTER provides a **Dual-Signal Router** that determines which model tier to assign to each agent invocation. This runs independently of (but in coordination with) the orchestration policy.

**Tier Assignment for NEXUS:**

| Model Tier | Claude Model | Use Case | Agent Tiers | Cost per 1M Tokens |
|-----------|-------------|----------|-------------|---------------------|
| Tier A (Strong) | Opus 4.6 | Complex reasoning, strategic decisions, architectural reviews | Tier 0-1 (C-Suite, VPs) + Governance Gates | $15.00 input / $75.00 output |
| Tier B (Balanced) | Sonnet 4.6 | Standard engineering, design, analysis tasks | Tier 2-4 (Directors, Managers, Staff+) | $3.00 input / $15.00 output |
| Tier C (Fast) | Haiku 4.5 | Routine operations, data gathering, simple transformations | Tier 5-7 (Senior, Mid, Junior ICs) | $0.80 input / $4.00 output |

### 4.2 CASTER Router Architecture

The NEXUS CASTER router is a lightweight Dual-Branch Feature Fusion Network:

**Text Branch (Semantic):**
```
x_sem = Embedding(task_text)         # dim 1536 (text-embedding-3-small)
h_sem = ReLU(W_t * x_sem + b_t)     # dim 128, with Dropout(0.2)
```

**Meta Branch (Structural):**
```
v_meta = [dept_one_hot(20), tier_one_hot(10), phase_one_hot(13),
          context_length_norm, risk_indicator, cross_dept_flag]
         # dim = 20 + 10 + 13 + 1 + 1 + 1 = 46
h_meta = ReLU(W_m * v_meta + b_m)   # dim 16
```

**Fusion:**
```
h_joint = [h_sem; h_meta]           # dim 144
h_fused = ReLU(W_f * h_joint + b_f) # dim 64
p_strong = sigmoid(w_out * h_fused)  # scalar in [0, 1]
```

**Decision logic:**
```
if p_strong > 0.7:     -> Tier A (Opus)
elif p_strong > 0.3:   -> Tier B (Sonnet)
else:                   -> Tier C (Haiku)
```

### 4.3 Training the CASTER Router

**Phase 1 — Cold Start (Heuristic Pre-training):**
- Construct seed dataset from NEXUS agent metadata: Tier 0-1 agents labeled "strong" (0.9), Tier 2-4 labeled "medium" (0.5), Tier 5-7 labeled "weak" (0.1)
- Augment with paraphrased task descriptions and noise perturbation (U(-0.05, 0.05))
- Train for 200 epochs with BCE loss, lr=1e-3
- ~500 synthetic samples with zero real-world data needed

**Phase 2 — On-Policy Iterative Refinement:**
- Deploy router with initial weights
- Collect trajectory data: for each agent invocation, log (task_context, model_used, execution_outcome)
- Apply Negative Feedback Learning:
  - If task succeeded with Haiku: reinforce label = 0.0 (strong model not needed)
  - If task succeeded with Opus: reinforce label = 1.0 (strong model was needed)
  - If task **failed** with Haiku/Sonnet: correct label to 1.0 (should have used stronger model)
- Fine-tune with lr=1e-4, StepLR scheduler (gamma=0.5 every 50 epochs)

### 4.4 Expected Cost Reduction

Based on CASTER results across domains (23-72% reduction depending on domain):

```
NEXUS Projected Savings:
  Strategic decisions (10% of invocations):  Stay Opus    -> $0 savings
  Standard work (40% of invocations):        Opus->Sonnet -> 80% savings on those calls
  Routine work (50% of invocations):         Opus->Haiku  -> 95% savings on those calls

  Blended reduction: 0.10*0 + 0.40*0.80 + 0.50*0.95 = 79.5% cost reduction
  Conservative estimate (accounting for errors): 40-60% reduction
```

---

## 5. DrMAS Training Strategy

### 5.1 The Gradient Instability Problem

When training NEXUS's 195 agents with a single global GRPO baseline, agents with different reward distributions experience **gradient-norm inflation**. This is not a theoretical curiosity — it is the primary failure mode observed in multi-agent RL training.

**Mathematical Formulation (from DrMAS):**

For agent k, the second moment of the gradient under global normalization is:

```
E[||g_k^global||^2] = E[|z_{i,t}^(k)|^2] * (sigma_k^2 + (mu_k - mu)^2) / sigma^2 + epsilon_k
```

where:
- mu_k, sigma_k = agent k's own reward mean and variance
- mu, sigma = global reward mean and variance
- z_{i,t}^(k) = score function (log-probability gradient) for agent k
- epsilon_k = score-reward covariance correction (typically small)

**The inflation factor** `(sigma_k^2 + (mu_k - mu)^2) / sigma^2` grows unbounded when:
- Agent k operates in a reward region far from the global mean (large |mu_k - mu|)
- Agent k has high reward variance relative to the global variance (large sigma_k / sigma)

In NEXUS, this is guaranteed to happen because:
- C-Suite agents (Tier 0) make high-stakes decisions with bimodal reward distributions (succeed/fail)
- Junior ICs (Tier 7) make many small contributions with narrow, clustered reward distributions
- Governance gates (Tier 8) have binary accept/reject rewards that spike when activated

### 5.2 Agent-Wise Normalization (The DrMAS Remedy)

Replace the global baseline (mu, sigma) with per-agent statistics (mu_k, sigma_k):

```
A_k^agent(tau^i) = (R^i - mu_k) / sigma_k
```

where:
```
mu_k = (1/|Y_k|) * sum_{(i,t) in Y_k} R^i
sigma_k^2 = (1/|Y_k|) * sum_{(i,t) in Y_k} (R^i - mu_k)^2
```

This ensures the second moment reduces to:

```
E[||g_k^agent||^2] = E[|z_{i,t}^(k)|^2] + epsilon_k
```

The inflation factor becomes exactly 1.0 for all agents, regardless of their reward distributions.

### 5.3 NEXUS-Specific Training Configuration

**Agent Groups for Normalization:**

Given 195 agents with varying activation frequencies, we define 6 normalization groups (agents within each group share similar reward distributions):

| Group | Agents | Tier Range | Activation Pattern | Reward Profile |
|-------|--------|-----------|-------------------|----------------|
| G1: Strategic | CEO, CTO, CPO, COO, CFO, CMO, CRO, CHRO, CISO, CLO, CAIO | 0 | Low frequency, high impact | Bimodal (major success/failure) |
| G2: Leadership | VPs + Directors (13+20 agents) | 1-2 | Medium frequency | Moderate variance |
| G3: Management | Managers (10 agents) | 3 | Medium frequency | Low variance, consistent |
| G4: Senior IC | Staff+, Senior ICs (45 agents) | 4-5 | High frequency, core execution | Medium variance |
| G5: Mid/Junior IC | Mid-level + Junior ICs (80 agents) | 6-7 | Highest frequency | Narrow distribution |
| G6: Gates/Special | Governance (6) + Special (9) | 8-9 | Event-triggered, sparse | Binary or bursty |

**Training Hyperparameters:**

```yaml
training:
  algorithm: GRPO with DrMAS agent-wise normalization
  rollout_group_size: 8                  # Trajectories per task
  max_trajectory_length: 20              # Max orchestration steps
  discount_gamma: 0.99
  cost_lambda: 0.1                       # Cost-quality tradeoff
  learning_rate: 3e-4                    # Orchestration policy
  lr_schedule: cosine_decay
  warmup_steps: 1000
  total_training_steps: 50000
  batch_size: 32                         # Tasks per batch
  gradient_clip: 1.0

  agent_normalization:
    mode: per_group                      # Normalize within agent groups G1-G6
    min_samples_per_group: 5             # Minimum samples before normalizing
    fallback: global                     # Use global baseline if group too small

  model_assignment:                      # DrMAS heterogeneous model assignment
    policy_model: "llama-3.1-8b"         # Orchestrator policy backbone
    agent_tier_0_1: "claude-opus-4-6"    # C-Suite + VP decisions
    agent_tier_2_4: "claude-sonnet-4-6"  # Directors through Staff+
    agent_tier_5_7: "claude-haiku-4-5"   # Senior through Junior ICs
    agent_tier_8_9: "claude-sonnet-4-6"  # Governance + Special (need precision)
```

### 5.4 Stability Guarantees

Based on DrMAS empirical results:
- **Gradient spike elimination:** Agent-wise normalization reduces gradient-norm spikes by >90% compared to global GRPO
- **Performance improvement:** +5-15% avg@16 across benchmarks
- **Heterogeneous model support:** Smaller models for lower-tier agents achieves 31.6% latency reduction and 41.8% cost reduction with no quality loss

---

## 6. Symphony Beacon Selection

### 6.1 Decentralized Intra-Department Routing

While the orchestration policy handles **inter-department** routing (which department to activate), Symphony's beacon selection protocol handles **intra-department** routing (which specific agent within a department to activate).

### 6.2 Beacon Agents

Each department designates one agent as its **Beacon** — the entry point that receives incoming tasks and dispatches them internally based on capability matching.

| Department | Beacon Agent | Code | Rationale |
|-----------|-------------|------|-----------|
| 01 Executive-Leadership | CEO | CEO | Routes strategic requests |
| 02 Engineering | SVP of Engineering | SVP-ENG | Oversees all 40 engineering agents |
| 03 Platform-Infrastructure | VP of Infrastructure | VP-INFRA | Controls infra allocation |
| 04 Product-Management | VP of Product | VP-PROD | Routes product work |
| 05 Design | VP of Design | VP-DES | Routes design tasks |
| 06 Data-Science-AI-ML | VP of AI | VP-AI | Routes AI/ML work |
| 07 Quality-Assurance | Director of QA | DIR-QA | Routes testing tasks |
| 08 Security | CISO | CISO | Routes security work |
| 09 Sales-Revenue | VP of Sales | VP-SALES | Routes revenue tasks |
| 10 Marketing | VP of Marketing | VP-MKT | Routes marketing work |
| 11 Customer-Success-Support | VP of Customer Success | VP-CS | Routes support tasks |
| 12 People-HR | VP of People | VP-PEOPLE | Routes HR tasks |
| 13 Finance-Accounting | VP of Finance | VP-FIN | Routes finance work |
| 14 Legal-Compliance | VP of Legal | VP-LEGAL | Routes legal tasks |
| 15 IT-Operations | Director of IT | DIR-IT | Routes IT operations |
| 16 Developer-Relations | Director of DevRel | DIR-DEVREL | Routes DevRel work |
| 17 Program-Management | General Program Manager | GPM | Routes program tasks |
| 18 Governance | ARB-AGENT | ARB-AGENT | Routes governance gates |
| 19 Special-Agents | NEXUS-ORCHESTRATOR | NEXUS-ORCH | Routes special tasks |
| 20 Documentation | Documentation Lead | DOC-LEAD | Routes documentation |

### 6.3 Capability Matching Protocol

When the orchestration policy routes a task to a department, the beacon agent initiates a capability match:

```
1. Beacon receives subtask t_{i,k} from orchestrator
2. Beacon broadcasts capability query to all department agents E = {E_1, ..., E_N}
3. Each agent E_j computes:
     score_j = similarity(capability_vector(E_j), requirements(t_{i,k}))
4. Beacon selects executor:
     E_j* = argmax_j(score_j)
5. Selected agent receives task + context from prior subtasks
6. Agent executes and returns output to beacon
```

**Capability vectors** are derived from each agent's system prompt:
- Core responsibilities (TF-IDF weighted keywords)
- Tool availability (binary feature vector)
- Historical success rate on similar tasks (updated per project)
- Current load factor (0-1, lower is more available)

**Similarity function:**
```
score_j = alpha * cosine(embed(E_j.responsibilities), embed(t_{i,k}))
        + beta * tool_overlap(E_j.tools, t_{i,k}.required_tools)
        + gamma * E_j.historical_success_rate
        - delta * E_j.current_load
```

where alpha=0.4, beta=0.2, gamma=0.3, delta=0.1.

### 6.4 Multi-CoT Voting

For critical tasks (governance gates, architectural decisions, security reviews), Symphony's multi-CoT voting provides robustness:

1. The beacon dispatches the task to 3 agents independently
2. Each agent produces an output with a confidence score
3. Final result determined by weighted majority vote:

```
a* = argmax_a sum_{i=1}^{3} w_i * I(a_i = a)
```

where w_i = average capability match score along agent i's subtask chain.

This is reserved for high-stakes decisions where the cost of 3x invocations is justified by the reduction in error rate (Symphony showed +5-6% accuracy improvement from voting).

---

## 7. Task Decomposition Engine

### 7.1 Request Classification

The first stage of orchestration classifies the incoming request:

```python
class RequestClassification:
    domain: str           # "engineering", "design", "ai_ml", "legal", etc.
    complexity: float     # 0.0 (trivial) to 1.0 (extremely complex)
    departments: list     # Which departments are involved
    lifecycle_stage: str  # Current project phase
    estimated_steps: int  # Predicted number of orchestration steps
    is_cross_dept: bool   # Requires multi-department coordination
```

### 7.2 Decomposition Strategy

**Simple requests (complexity < 0.3, single department):**
- Route directly to department beacon
- No decomposition needed
- Example: "Fix the typo in the login page" -> Beacon(Engineering) -> FE-ENG

**Medium requests (0.3 <= complexity < 0.7, 1-2 departments):**
- Decompose into 2-5 sequential or parallel subtasks
- Route subtasks through orchestration policy
- Example: "Add dark mode to the dashboard" -> [Design subtask, Frontend subtask, QA subtask]

**Complex requests (complexity >= 0.7, 3+ departments):**
- Full orchestration with learned policy
- Multi-stage decomposition with dependency graph
- Iterative refinement loops enabled
- Example: "Launch the new API product" -> [Product PRD, Architecture, Engineering, QA, Security review, Legal review, Documentation, Marketing, Sales enablement, Deployment]

### 7.3 Dependency Graph Construction

For complex requests, the decomposer builds a DAG of subtasks:

```
Subtask DAG for "Launch new API product":

  [Product PRD] ----+
                    |
  [Architecture] ---+---> [Engineering] ---> [QA Testing] ---+
                    |                                         |
                    +---> [Security Review] -----------------+---> [Staging]
                    |                                         |
                    +---> [Legal Review] --------------------+
                                                              |
  [Documentation] <-------------------------------------------+
  [Marketing Prep] <------------------------------------------+
  [Sales Enablement] <----------------------------------------+
                                                              |
                                                     [Release Gate]
                                                              |
                                                     [Deployment]
```

The orchestration policy traverses this DAG, activating agents in topological order while respecting dependencies and parallelizing independent subtasks.

---

## 8. Learning Loop

### 8.1 Data Collection Pipeline

Every orchestration episode generates training data:

```yaml
TrajectoryRecord:
  task_id: "uuid"
  request_text: "Build a REST API for user authentication"
  request_embedding: [float x 1536]
  trajectory:
    - step: 0
      state: S_0
      action: "CTO"          # Agent selected
      model_tier: "opus"      # Model assigned by CASTER
      output_quality: 0.85    # LLM-as-judge score
      tokens_consumed: 2400
      latency_ms: 1200
    - step: 1
      state: S_1
      action: "SR-BE-PY"
      model_tier: "sonnet"
      output_quality: 0.92
      tokens_consumed: 3100
      latency_ms: 800
    # ... more steps ...
    - step: N
      action: "TERMINATE"
  final_reward: 0.88          # Task quality score
  total_cost: 0.043           # Total inference cost ($)
  total_tokens: 18500
  total_latency_ms: 8400
```

### 8.2 Reward Computation

At episode end, compute the terminal reward:

```
r_quality = weighted_average(
    task_completion_rate,     # 0-1, did the task get done?
    output_quality_score,     # 0-1, LLM-as-judge assessment
    test_pass_rate,           # 0-1, if code was produced
    stakeholder_satisfaction  # 0-1, user feedback when available
)

C_total = sum(C_t) / C_budget  # Normalized cost

R(tau) = r_quality - lambda * C_total
```

### 8.3 Training Schedule

**Phase 1 — Warm Start (Steps 0-5000):**
- Initialize policy from heuristic routing table (supervised pre-training)
- For each static routing rule, generate synthetic trajectories as expert demonstrations
- Behavioral cloning loss to bootstrap the policy
- This ensures the learned policy starts at least as good as the static baseline

**Phase 2 — Online RL (Steps 5000-50000):**
- Deploy policy in shadow mode (log decisions but use static routing for actual execution)
- Collect trajectory data from real project executions
- Apply DrMAS agent-wise GRPO optimization
- Gradually shift from shadow to active mode as policy improves

**Phase 3 — Continuous Learning (Steps 50000+):**
- Full active deployment with learned policy
- Continuous data collection from every project
- Periodic retraining (weekly) with accumulated trajectory data
- A/B testing: 80% learned policy, 20% static routing (for comparison and fallback data)

### 8.4 Performance/Cost Optimization Tracking

```
Track per-epoch:
  - Average reward (quality component)
  - Average cost per trajectory
  - Performance/Cost ratio (higher = better)
  - Gradient norm per agent group (monitor for spikes)
  - Policy entropy (too low = exploitation collapse, too high = random)

Target trajectory:
  Epoch 0:    reward=0.60, cost=$0.040, ratio=15.0
  Epoch 100:  reward=0.72, cost=$0.028, ratio=25.7
  Epoch 500:  reward=0.80, cost=$0.022, ratio=36.4
  Epoch 1000: reward=0.85, cost=$0.018, ratio=47.2
```

---

## 9. Fallback Strategy

### 9.1 When the Learned Policy Fails

The learned policy will sometimes be uncertain or produce suboptimal routing. We define explicit fallback triggers:

**Trigger 1 — High Entropy:**
```
if entropy(pi_theta(* | S_t)) > H_threshold:
    fallback_to_static_routing()
```
When the policy is unable to discriminate between agents (entropy close to uniform), it has no useful signal. Fall back to the static routing table.

**Trigger 2 — Repeated Failures:**
```
if consecutive_task_failures >= 3:
    disable_learned_policy()
    alert_operations_team()
    fallback_to_static_routing()
```

**Trigger 3 — Cost Runaway:**
```
if cost_accrued > 2 * cost_budget:
    force_terminate_trajectory()
    fallback_to_static_routing()
```

**Trigger 4 — Latency Breach:**
```
if step_latency > SLA_threshold:
    bypass_policy_inference()
    use_cached_routing_decision()
```

### 9.2 Fallback Hierarchy

```
Level 0: Learned orchestration policy (normal operation)
         |
         v (if uncertain or failing)
Level 1: CASTER model router only (correct model tier, but static agent selection)
         |
         v (if CASTER unavailable)
Level 2: Static routing table from CLAUDE.md (current production system)
         |
         v (if even static routing is problematic)
Level 3: Direct escalation to CEO agent for manual triage
```

### 9.3 Circuit Breaker Pattern

Following NEXUS-ORCHESTRATOR's existing mental model (Mental Model 6: The Circuit Breaker), implement per-department circuit breakers:

```python
class DepartmentCircuitBreaker:
    state: "CLOSED" | "OPEN" | "HALF_OPEN"
    failure_count: int
    failure_threshold: int = 3
    recovery_timeout: timedelta = timedelta(minutes=5)

    def record_outcome(self, success: bool):
        if success:
            self.failure_count = 0
            self.state = "CLOSED"
        else:
            self.failure_count += 1
            if self.failure_count >= self.failure_threshold:
                self.state = "OPEN"
                # Stop routing to this department
                # Escalate to department beacon for investigation
                # Resume after recovery_timeout in HALF_OPEN state
```

---

## 10. Algorithm Pseudocode

### 10.1 Orchestration Policy Inference (Runtime)

```
ALGORITHM: NEXUS Orchestration — Inference
─────────────────────────────────────────

Input: user_request, project_context, cost_budget
Output: final_deliverable, execution_trace

1.  classification = classify_request(user_request)
2.  subtask_dag = decompose(user_request, classification)
3.  S_0 = initialize_state(user_request, project_context)
4.  trajectory = []
5.  t = 0

6.  FOR each subtask in topological_order(subtask_dag):
7.      WHILE not is_subtask_complete(subtask):
8.
9.          // --- Orchestration Policy Decision ---
10.         IF entropy(pi_theta(* | S_t)) > H_THRESHOLD:
11.             a_t = static_routing_table(subtask)     // Fallback
12.         ELSE:
13.             a_t = sample(pi_theta(* | S_t, mask=M_t))  // Learned policy
14.         END IF
15.
16.         IF a_t == TERMINATE:
17.             BREAK
18.         END IF
19.
20.         // --- CASTER Model Tier Selection ---
21.         x_sem = embed(subtask.description + context_summary)
22.         v_meta = extract_meta_features(a_t, subtask)
23.         p_strong = caster_router(x_sem, v_meta)
24.         model_tier = select_tier(p_strong)  // Opus / Sonnet / Haiku
25.
26.         // --- Symphony Intra-Department Routing ---
27.         department = get_department(a_t)
28.         beacon = get_beacon(department)
29.         IF subtask.is_critical AND classification.complexity > 0.7:
30.             executors = beacon.select_top_k(subtask, k=3)
31.             outputs = parallel_execute(executors, subtask, model_tier)
32.             output = weighted_majority_vote(outputs)
33.         ELSE:
34.             executor = beacon.select_best(subtask)
35.             output = execute(executor, subtask, model_tier)
36.         END IF
37.
38.         // --- State Update ---
39.         trajectory.append((S_t, a_t, model_tier, output))
40.         S_{t+1} = update_state(S_t, a_t, output)
41.         t = t + 1
42.
43.         // --- Cost Guard ---
44.         IF accumulated_cost(trajectory) > 2 * cost_budget:
45.             BREAK  // Force termination
46.         END IF
47.
48.     END WHILE
49. END FOR
50.
51. final_deliverable = aggregate_outputs(trajectory)
52. log_trajectory(trajectory, final_deliverable)
53. RETURN final_deliverable, trajectory
```

### 10.2 DrMAS Training Loop

```
ALGORITHM: NEXUS Orchestration — Training (DrMAS + GRPO)
────────────────────────────────────────────────────────

Input: task_distribution D, policy pi_theta, CASTER router phi
Output: updated pi_theta, updated phi

1.  FOR epoch = 1 TO MAX_EPOCHS:
2.
3.      // --- Rollout Collection ---
4.      batch_trajectories = []
5.      FOR i = 1 TO BATCH_SIZE:
6.          task = sample(D)
7.          FOR j = 1 TO GROUP_SIZE:  // N=8 rollouts per task
8.              tau_j = run_orchestration(task, pi_theta, phi)
9.              R_j = compute_reward(tau_j)
10.             batch_trajectories.append((task, tau_j, R_j))
11.         END FOR
12.     END FOR
13.
14.     // --- Agent-Wise Advantage Computation (DrMAS Core) ---
15.     FOR EACH agent group G_k in {G1, G2, G3, G4, G5, G6}:
16.
17.         // Collect rewards for steps where agents in G_k were active
18.         Y_k = {(i,t) : agent_at_step(tau_i, t) in G_k}
19.
20.         IF |Y_k| < MIN_SAMPLES:
21.             // Not enough samples — use global baseline
22.             mu_k = global_mean(batch_rewards)
23.             sigma_k = global_std(batch_rewards)
24.         ELSE:
25.             // Agent-wise normalization
26.             mu_k = mean({R_i : (i,t) in Y_k})
27.             sigma_k = std({R_i : (i,t) in Y_k})
28.         END IF
29.
30.         FOR EACH (i,t) in Y_k:
31.             A_k(tau_i) = (R_i - mu_k) / max(sigma_k, epsilon)
32.         END FOR
33.
34.     END FOR
35.
36.     // --- Policy Gradient Update ---
37.     loss = 0
38.     FOR EACH trajectory tau_i in batch_trajectories:
39.         FOR EACH step t in tau_i:
40.             k = agent_group(agent_at_step(tau_i, t))
41.             ratio = pi_theta(a_t | S_t) / pi_theta_old(a_t | S_t)
42.             clipped_ratio = clip(ratio, 1-epsilon, 1+epsilon)
43.             loss -= min(ratio * A_k(tau_i), clipped_ratio * A_k(tau_i))
44.         END FOR
45.     END FOR
46.
47.     // --- Gradient Step with Monitoring ---
48.     grad = compute_gradient(loss, theta)
49.     grad_norm = ||grad||
50.     IF grad_norm > GRAD_CLIP:
51.         grad = grad * (GRAD_CLIP / grad_norm)
52.     END IF
53.     theta = theta - lr * grad
54.
55.     // --- CASTER Router Update ---
56.     FOR EACH (task, tau, R) in batch_trajectories:
57.         FOR EACH step t in tau:
58.             model_used = tau[t].model_tier
59.             success = (R > SUCCESS_THRESHOLD)
60.             IF NOT success AND model_used == "haiku":
61.                 // Negative feedback: should have used stronger model
62.                 update_caster(phi, task[t], label=1.0)
63.             ELIF success AND model_used == "haiku":
64.                 // Positive feedback: weak model was sufficient
65.                 update_caster(phi, task[t], label=0.0)
66.             END IF
67.         END FOR
68.     END FOR
69.
70.     // --- Monitoring ---
71.     log_metrics(epoch, {
72.         "avg_reward": mean(batch_rewards),
73.         "avg_cost": mean(batch_costs),
74.         "perf_cost_ratio": mean(batch_rewards) / mean(batch_costs),
75.         "policy_entropy": mean_entropy(pi_theta),
76.         "grad_norms_per_group": {G_k: grad_norm_k for G_k in groups},
77.         "caster_accuracy": caster_eval_accuracy(phi),
78.     })
79.
80. END FOR
```

### 10.3 Symphony Beacon Selection

```
ALGORITHM: Intra-Department Beacon Selection
─────────────────────────────────────────────

Input: subtask t, department D, agents E = {E_1, ..., E_N}
Output: selected_executor E_j*, confidence_score

1.  beacon = D.beacon_agent
2.  requirement_vector = embed(t.description)
3.  required_tools = extract_tool_requirements(t)
4.
5.  scores = []
6.  FOR EACH agent E_j in D.agents:
7.      IF E_j.available == False:
8.          CONTINUE
9.      END IF
10.
11.     s_semantic = cosine_similarity(
12.         embed(E_j.core_responsibilities),
13.         requirement_vector
14.     )
15.     s_tools = |E_j.tools INTERSECT required_tools| / |required_tools|
16.     s_history = E_j.success_rate_on_similar_tasks
17.     s_load = 1.0 - E_j.current_load
18.
19.     score_j = 0.4 * s_semantic
20.              + 0.2 * s_tools
21.              + 0.3 * s_history
22.              + 0.1 * s_load
23.
24.     scores.append((E_j, score_j))
25. END FOR
26.
27. E_j* = argmax(scores, key=lambda x: x[1])
28. confidence = max(scores)[1]
29.
30. RETURN E_j*, confidence
```

---

## Appendix A: Mathematical Formulations Summary

### A.1 Orchestration Policy Objective

```
J(theta) = E_{tau ~ pi_theta} [ sum_{t=0}^{T} gamma^t * (r_quality - lambda * C_t) ]
```

### A.2 REINFORCE Policy Gradient

```
grad_theta J(theta) = (1/N) * sum_{i=1}^{N} sum_{t=0}^{T_i} A_k(tau_i) * grad_theta log pi_theta(a_t^i | S_t^i)
```

### A.3 DrMAS Agent-Wise Advantage

```
A_k(tau^i) = (R^i - mu_k) / sigma_k

where:
  mu_k = (1/|Y_k|) * sum_{(i,t) in Y_k} R^i
  sigma_k = sqrt( (1/|Y_k|) * sum_{(i,t) in Y_k} (R^i - mu_k)^2 )
  Y_k = { (i,t) : k_t^i belongs to agent group k }
```

### A.4 CASTER Difficulty Score

```
p_strong = sigmoid(w_out * ReLU(W_f * [h_sem; h_meta] + b_f))

where:
  h_sem = ReLU(W_t * embed(task_text) + b_t)     // Semantic branch
  h_meta = ReLU(W_m * v_meta + b_m)               // Structural branch
```

### A.5 Symphony Weighted Vote

```
a* = argmax_a sum_{i=1}^{M} w_i * I(a_i = a)

where w_i = (1/K_i) * sum_{k=1}^{K_i} score(E_{j*}^{i,k}, t_{i,k})
```

### A.6 Composite Cost Function

```
C_t = F(a_t) * (1 + t / T_max)

Total: C_total = sum_{t=0}^{T} C_t
Normalized: C_norm = C_total / C_budget
```

### A.7 Gradient Stability Bound (DrMAS Theorem)

Under agent-wise normalization, for any agent k:

```
E[||g_k^agent||^2] = E[|z_{i,t}^(k)|^2] + epsilon_k    <= C_k + epsilon_k
```

This is bounded independently of the global reward distribution, eliminating the inflation factor that causes instability under global normalization.

---

## Appendix B: NEXUS Agent Tier to Model Mapping

| Agent Tier | Count | Model Assignment | Rationale |
|-----------|-------|-----------------|-----------|
| Tier 0 (C-Suite) | 11 | Claude Opus 4.6 | Strategic decisions require maximum reasoning |
| Tier 1 (VPs) | 13 | Claude Opus 4.6 | Department-level strategy needs deep reasoning |
| Tier 2 (Directors) | 20 | Claude Sonnet 4.6 | Execution leadership, balanced capability/cost |
| Tier 3 (Managers) | 10 | Claude Sonnet 4.6 | Team coordination, standard complexity |
| Tier 4 (Staff+ ICs) | 15 | Claude Sonnet 4.6 | Technical leadership, needs good reasoning |
| Tier 5 (Senior ICs) | 45 | Claude Haiku 4.5 / Sonnet 4.6 | CASTER-routed: Haiku for routine, Sonnet for complex |
| Tier 6 (Mid ICs) | 40 | Claude Haiku 4.5 | Standard execution, high volume |
| Tier 7 (Junior ICs) | 25 | Claude Haiku 4.5 | Basic tasks, maximum cost efficiency |
| Tier 8 (Governance) | 6 | Claude Opus 4.6 | Gate decisions are high-stakes, binary |
| Tier 9 (Special) | 9 | Claude Sonnet 4.6 | Varies by function, CASTER overrides when needed |

---

## Appendix C: Emergent Topology Patterns (from Puppeteer)

The learned orchestration policy is expected to produce the following emergent patterns, observed in Puppeteer experiments:

1. **Chain-of-Thought**: Sequential agent activation for simple, linear tasks
2. **Self-Reflective Loops**: Agent A -> Agent B (critic) -> Agent A (revision) — cycles that improve output quality
3. **Convergent Patterns**: Multiple agents feed into a single synthesizer
4. **Divergent Patterns**: One planning agent dispatches to multiple parallel executors
5. **Hub-and-Spoke**: A small set of "hub" agents (beacon agents) concentrate most communication
6. **Compact Cyclic Structures**: As the policy evolves, topologies become more compact (fewer agents) with more cycles (iterative refinement) — the hallmark of mature orchestration

**Key Finding from Puppeteer:** The evolved policy consistently produces more compact, cyclic structures than the initialized policy. Graph density increases and cycle frequency rises as the policy improves. This means the orchestrator learns to do more with fewer agents by leveraging iterative refinement rather than parallel exploration.

---

## Appendix D: References

1. **Puppeteer** — Dang et al. (2025). "Multi-Agent Collaboration via Evolving Orchestration." NeurIPS 2025.
   - Path: `/Users/kinghippo/Documents/NEXUS_AI/orchestrate_agents_papers/tar-extracted/2505.19591/clean.txt`

2. **CASTER** — (2026). "Context-Aware Strategy for Task Efficient Routing." ICML 2026.
   - Path: `/Users/kinghippo/Documents/NEXUS_AI/orchestrate_agents_papers/tar-extracted/2601.19793/clean.txt`

3. **DrMAS** — Feng et al. (2026). "Stable Reinforcement Learning for Multi-Agent LLM Systems."
   - Path: `/Users/kinghippo/Documents/NEXUS_AI/orchestrate_agents_papers/tar-extracted/2602.08847/clean.txt`

4. **Symphony** — Wang et al. (2025). "A Decentralized Multi-Agent Framework for Scalable Collective Intelligence." NeurIPS 2025.
   - Path: `/Users/kinghippo/Documents/NEXUS_AI/orchestrate_agents_papers/tar-extracted/2508.20019/clean.txt`

5. **NEXUS-ORCHESTRATOR** — Agent 195 system prompt.
   - Path: `/Users/kinghippo/Documents/NEXUS_AI/agents/19-Special-Agents/195-NEXUS-ORCHESTRATOR.md`
