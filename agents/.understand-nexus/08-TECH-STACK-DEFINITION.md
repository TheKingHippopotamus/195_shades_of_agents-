# NEXUS AI — Technology Stack Definition v1.0
## Approved Technologies, Evaluation Criteria, and Technology Radar

---

## 1. TECHNOLOGY GOVERNANCE

```
DECISION AUTHORITY:
  ADOPT (production-ready):     DIST-ENG (025) + CTO (002) approve
  TRIAL (limited production):   PRINC-ENG (026) + VP-ARCH (014) approve
  ASSESS (prototypes only):     STAFF engineer can evaluate independently
  HOLD (use existing, don't expand): VP-ARCH (014) communicates
  AVOID (do not use):           CTO (002) declares, ARB enforces

EVALUATION PROCESS:
  1. Agent proposes technology → RFC with evaluation criteria
  2. ARB-AGENT (181) routes to relevant reviewers
  3. Prototype/spike (2 weeks max) if needed
  4. Security review by DIR-SEC (108)
  5. Cost analysis by FPA-MGR (151)
  6. ARB decision → Technology Radar updated
  7. INNOVATION-AGENT (192) tracks in Technology Radar

UPDATE CADENCE: Technology Radar reviewed quarterly
```

---

## 2. CORE TECHNOLOGY STACK

### 2.1 Frontend

```
CATEGORY: UI FRAMEWORKS
┌────────────────┬──────────┬────────────────────────────────────┐
│ Technology     │ Status   │ Usage                              │
├────────────────┼──────────┼────────────────────────────────────┤
│ React 18+      │ ✅ ADOPT │ Primary SPA framework              │
│ Next.js 14+    │ ✅ ADOPT │ SSR/SSG React applications         │
│ Vue 3          │ ✅ ADOPT │ Secondary framework (client pref)  │
│ Nuxt 3         │ ✅ ADOPT │ SSR/SSG Vue applications           │
│ Astro          │ 🔵 TRIAL │ Content-heavy static sites         │
│ Svelte/SvelteKit│ 🟡 ASSESS│ Evaluate for specific use cases   │
│ Angular        │ ⏸ HOLD  │ Existing projects only             │
│ jQuery         │ 🔴 AVOID │ Legacy — migrate away              │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: LANGUAGE & TYPING
┌────────────────┬──────────┬────────────────────────────────────┐
│ TypeScript 5+  │ ✅ ADOPT │ MANDATORY for all frontend code    │
│ Strict mode    │ ✅ ADOPT │ No `any` without justification     │
│ JavaScript     │ ⏸ HOLD  │ Only for config files              │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: STATE MANAGEMENT
┌────────────────┬──────────┬────────────────────────────────────┐
│ React Context  │ ✅ ADOPT │ Simple state, theming, auth        │
│ Zustand        │ ✅ ADOPT │ Client state (React)               │
│ TanStack Query │ ✅ ADOPT │ Server state (React + Vue)         │
│ Pinia          │ ✅ ADOPT │ Client state (Vue)                 │
│ Redux Toolkit  │ ⏸ HOLD  │ Existing projects only             │
│ MobX           │ 🔴 AVOID │ Complexity overhead                │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: STYLING
┌────────────────┬──────────┬────────────────────────────────────┐
│ Tailwind CSS 3+│ ✅ ADOPT │ Primary styling approach            │
│ CSS Modules    │ ✅ ADOPT │ Component-scoped styles            │
│ shadcn/ui      │ ✅ ADOPT │ UI component library (React)       │
│ Radix UI       │ ✅ ADOPT │ Headless accessible components     │
│ Styled Comp.   │ ⏸ HOLD  │ Existing projects only             │
│ Emotion        │ ⏸ HOLD  │ Existing projects only             │
│ Bootstrap      │ 🔴 AVOID │ Use Tailwind instead               │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: BUILD & TOOLING
┌────────────────┬──────────┬────────────────────────────────────┐
│ Vite           │ ✅ ADOPT │ Primary build tool                 │
│ Turbopack      │ 🔵 TRIAL │ Next.js bundler                    │
│ ESLint         │ ✅ ADOPT │ Linting (Flat config)              │
│ Prettier       │ ✅ ADOPT │ Formatting                         │
│ Biome          │ 🔵 TRIAL │ Evaluate as ESLint+Prettier combo  │
│ Storybook      │ ✅ ADOPT │ Component development & docs       │
│ Webpack        │ ⏸ HOLD  │ Only legacy Next.js                │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: TESTING
┌────────────────┬──────────┬────────────────────────────────────┐
│ Vitest         │ ✅ ADOPT │ Unit + integration tests           │
│ Testing Library│ ✅ ADOPT │ Component testing                  │
│ Playwright     │ ✅ ADOPT │ E2E testing                        │
│ Storybook Test │ ✅ ADOPT │ Visual + interaction testing        │
│ Cypress        │ ⏸ HOLD  │ Existing projects only             │
│ Jest           │ ⏸ HOLD  │ Migrate to Vitest for new projects │
└────────────────┴──────────┴────────────────────────────────────┘
```

### 2.2 Backend

```
CATEGORY: LANGUAGES & RUNTIMES
┌────────────────┬──────────┬────────────────────────────────────┐
│ Node.js 20+    │ ✅ ADOPT │ Primary API runtime                │
│ TypeScript     │ ✅ ADOPT │ MANDATORY for all Node.js code     │
│ Python 3.12+   │ ✅ ADOPT │ AI/ML, data, scripting             │
│ Go 1.22+       │ ✅ ADOPT │ High-perf services, CLI tools      │
│ Rust           │ 🟡 ASSESS│ Performance-critical components    │
│ Java/Kotlin    │ 🔵 TRIAL │ Enterprise client requirements     │
│ PHP            │ 🔴 AVOID │ Not aligned with stack             │
│ Ruby           │ 🔴 AVOID │ Not aligned with stack             │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: API FRAMEWORKS
┌────────────────┬──────────┬────────────────────────────────────┐
│ NestJS         │ ✅ ADOPT │ Enterprise Node.js APIs            │
│ Fastify        │ ✅ ADOPT │ High-performance Node.js APIs      │
│ FastAPI        │ ✅ ADOPT │ Python APIs (async)                │
│ Gin            │ ✅ ADOPT │ Go APIs                            │
│ tRPC           │ 🔵 TRIAL │ Type-safe client-server            │
│ Express        │ ⏸ HOLD  │ Existing projects only             │
│ Django REST    │ ⏸ HOLD  │ Batteries-included (if needed)     │
│ Flask          │ 🔴 AVOID │ Use FastAPI instead                │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: API STANDARDS
┌────────────────┬──────────┬────────────────────────────────────┐
│ REST (OpenAPI) │ ✅ ADOPT │ Primary API style                  │
│ GraphQL        │ ✅ ADOPT │ Complex data requirements          │
│ gRPC           │ ✅ ADOPT │ Service-to-service communication   │
│ WebSocket      │ ✅ ADOPT │ Real-time features                 │
│ SSE            │ ✅ ADOPT │ Server-sent events, streaming      │
│ SOAP           │ 🔴 AVOID │ Legacy only if client requires     │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: VALIDATION & SERIALIZATION
┌────────────────┬──────────┬────────────────────────────────────┐
│ Zod            │ ✅ ADOPT │ TypeScript validation               │
│ Pydantic       │ ✅ ADOPT │ Python validation                  │
│ class-validator│ ✅ ADOPT │ NestJS validation                  │
│ Joi            │ ⏸ HOLD  │ Existing Node.js projects          │
└────────────────┴──────────┴────────────────────────────────────┘
```

### 2.3 Databases & Storage

```
CATEGORY: RELATIONAL
┌────────────────┬──────────┬────────────────────────────────────┐
│ PostgreSQL 16+ │ ✅ ADOPT │ PRIMARY database for all projects   │
│ Prisma         │ ✅ ADOPT │ ORM for TypeScript/Node.js          │
│ Drizzle ORM    │ 🔵 TRIAL │ Lighter alternative to Prisma       │
│ SQLAlchemy     │ ✅ ADOPT │ ORM for Python                     │
│ MySQL          │ ⏸ HOLD  │ Only if client requires             │
│ SQLite         │ ✅ ADOPT │ Local dev, embedded, mobile         │
│ MSSQL          │ ⏸ HOLD  │ Only if client requires             │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: NoSQL
┌────────────────┬──────────┬────────────────────────────────────┐
│ Redis 7+       │ ✅ ADOPT │ Caching, sessions, pub/sub, queues │
│ MongoDB        │ 🔵 TRIAL │ Only for truly document-oriented    │
│ DynamoDB       │ ✅ ADOPT │ Serverless workloads on AWS         │
│ Elasticsearch  │ ✅ ADOPT │ Full-text search, logs              │
│ Cassandra      │ 🟡 ASSESS│ Time-series, high write volume     │
│ CouchDB        │ 🔴 AVOID │ Use PostgreSQL or MongoDB           │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: VECTOR DATABASES (AI/ML)
┌────────────────┬──────────┬────────────────────────────────────┐
│ pgvector       │ ✅ ADOPT │ Vector search in PostgreSQL         │
│ Pinecone       │ ✅ ADOPT │ Managed vector DB                  │
│ Qdrant         │ 🔵 TRIAL │ Open-source vector DB              │
│ Weaviate       │ 🟡 ASSESS│ Evaluate for specific use cases    │
│ ChromaDB       │ ⏸ HOLD  │ Prototyping only                   │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: OBJECT STORAGE
┌────────────────┬──────────┬────────────────────────────────────┐
│ AWS S3         │ ✅ ADOPT │ Primary object storage              │
│ GCS            │ ✅ ADOPT │ GCP projects                       │
│ Azure Blob     │ ✅ ADOPT │ Azure projects                     │
│ MinIO          │ ✅ ADOPT │ S3-compatible local/self-hosted     │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: MESSAGE QUEUES
┌────────────────┬──────────┬────────────────────────────────────┐
│ Redis Streams  │ ✅ ADOPT │ Simple queues, events              │
│ RabbitMQ       │ ✅ ADOPT │ Complex routing, reliability       │
│ Apache Kafka   │ ✅ ADOPT │ High-throughput event streaming    │
│ AWS SQS/SNS    │ ✅ ADOPT │ Managed queues on AWS              │
│ BullMQ         │ ✅ ADOPT │ Node.js job queues (Redis-backed)  │
│ Celery         │ ✅ ADOPT │ Python task queues                 │
└────────────────┴──────────┴────────────────────────────────────┘
```

### 2.4 Mobile

```
CATEGORY: CROSS-PLATFORM
┌────────────────┬──────────┬────────────────────────────────────┐
│ React Native   │ ✅ ADOPT │ Primary cross-platform framework   │
│ Expo           │ ✅ ADOPT │ RN toolchain + managed services    │
│ Flutter        │ 🔵 TRIAL │ Evaluate for specific use cases    │
│ Ionic          │ 🔴 AVOID │ Use React Native                   │
│ Xamarin        │ 🔴 AVOID │ Deprecated                         │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: NATIVE
┌────────────────┬──────────┬────────────────────────────────────┐
│ Swift/SwiftUI  │ ✅ ADOPT │ iOS native                         │
│ Kotlin/Compose │ ✅ ADOPT │ Android native                     │
│ Objective-C    │ ⏸ HOLD  │ Legacy maintenance only            │
│ Java (Android) │ ⏸ HOLD  │ Legacy maintenance only            │
└────────────────┴──────────┴────────────────────────────────────┘
```

### 2.5 AI/ML

```
CATEGORY: LLM PROVIDERS
┌────────────────┬──────────┬────────────────────────────────────┐
│ OpenAI (GPT-4o)│ ✅ ADOPT │ General-purpose LLM                │
│ Anthropic Claude│ ✅ ADOPT│ Complex reasoning, safety-first    │
│ Google Gemini  │ 🔵 TRIAL │ Multimodal, long context           │
│ Meta Llama 3+  │ ✅ ADOPT │ Self-hosted, privacy-sensitive     │
│ Mistral        │ 🔵 TRIAL │ EU-hosted, cost-efficient          │
│ Cohere         │ 🟡 ASSESS│ RAG-optimized                     │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: AI FRAMEWORKS
┌────────────────┬──────────┬────────────────────────────────────┐
│ LangChain      │ ✅ ADOPT │ LLM orchestration (Python)         │
│ LangGraph      │ ✅ ADOPT │ Multi-agent orchestration           │
│ LlamaIndex     │ ✅ ADOPT │ RAG framework                      │
│ Vercel AI SDK  │ ✅ ADOPT │ AI UI streaming (TypeScript)       │
│ CrewAI         │ 🔵 TRIAL │ Multi-agent framework              │
│ AutoGen        │ 🟡 ASSESS│ Microsoft multi-agent              │
│ Semantic Kernel│ 🟡 ASSESS│ Microsoft AI orchestration         │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: ML FRAMEWORKS
┌────────────────┬──────────┬────────────────────────────────────┐
│ PyTorch        │ ✅ ADOPT │ Primary ML framework               │
│ scikit-learn   │ ✅ ADOPT │ Classical ML                       │
│ Hugging Face   │ ✅ ADOPT │ Model hub, transformers            │
│ ONNX           │ ✅ ADOPT │ Model interoperability             │
│ TensorFlow     │ ⏸ HOLD  │ Existing models only               │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: MLOps
┌────────────────┬──────────┬────────────────────────────────────┐
│ MLflow         │ ✅ ADOPT │ Experiment tracking, model registry│
│ Weights & Biases│ ✅ ADOPT│ Experiment tracking (cloud)        │
│ DVC            │ ✅ ADOPT │ Data versioning                    │
│ Airflow        │ ✅ ADOPT │ ML pipeline orchestration          │
│ Kubeflow       │ 🔵 TRIAL │ Kubernetes-native ML pipelines     │
│ BentoML        │ 🔵 TRIAL │ Model serving                      │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: EMBEDDINGS & VECTORS
┌────────────────┬──────────┬────────────────────────────────────┐
│ OpenAI Embed.  │ ✅ ADOPT │ text-embedding-3-large             │
│ Cohere Embed.  │ 🔵 TRIAL │ Multilingual embeddings            │
│ Sentence Trans.│ ✅ ADOPT │ Self-hosted embeddings             │
│ CLIP           │ ✅ ADOPT │ Image + text embeddings            │
└────────────────┴──────────┴────────────────────────────────────┘
```

### 2.6 Infrastructure & DevOps

```
CATEGORY: CLOUD PROVIDERS
┌────────────────┬──────────┬────────────────────────────────────┐
│ AWS            │ ✅ ADOPT │ Primary cloud (default)             │
│ GCP            │ ✅ ADOPT │ AI/ML workloads, BigQuery          │
│ Azure          │ ✅ ADOPT │ Enterprise client requirements     │
│ Vercel         │ ✅ ADOPT │ Frontend hosting, edge functions   │
│ Cloudflare     │ ✅ ADOPT │ CDN, Workers, R2                   │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: CONTAINERIZATION & ORCHESTRATION
┌────────────────┬──────────┬────────────────────────────────────┐
│ Docker         │ ✅ ADOPT │ Containerization standard          │
│ Kubernetes     │ ✅ ADOPT │ Container orchestration            │
│ Helm           │ ✅ ADOPT │ K8s package management             │
│ AWS ECS/Fargate│ ✅ ADOPT │ Managed containers (AWS)           │
│ AWS EKS        │ ✅ ADOPT │ Managed Kubernetes (AWS)           │
│ GKE            │ ✅ ADOPT │ Managed Kubernetes (GCP)           │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: INFRASTRUCTURE AS CODE
┌────────────────┬──────────┬────────────────────────────────────┐
│ Terraform      │ ✅ ADOPT │ PRIMARY IaC tool                   │
│ OpenTofu       │ 🔵 TRIAL │ Terraform fork (evaluate)          │
│ Pulumi         │ 🔵 TRIAL │ IaC with programming languages     │
│ AWS CDK        │ ✅ ADOPT │ AWS-specific IaC                   │
│ Ansible        │ ✅ ADOPT │ Configuration management           │
│ CloudFormation │ ⏸ HOLD  │ Use Terraform or CDK instead       │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: CI/CD
┌────────────────┬──────────┬────────────────────────────────────┐
│ GitHub Actions │ ✅ ADOPT │ Primary CI/CD                      │
│ GitLab CI      │ ✅ ADOPT │ Alternative (client preference)    │
│ ArgoCD         │ ✅ ADOPT │ GitOps deployment                  │
│ Jenkins        │ 🔴 AVOID │ Complexity, security concerns      │
│ CircleCI       │ ⏸ HOLD  │ Existing projects only             │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: OBSERVABILITY
┌────────────────┬──────────┬────────────────────────────────────┐
│ Datadog        │ ✅ ADOPT │ Full-stack observability            │
│ Grafana + Loki │ ✅ ADOPT │ Open-source alternative             │
│ Prometheus     │ ✅ ADOPT │ Metrics collection                 │
│ OpenTelemetry  │ ✅ ADOPT │ Instrumentation standard           │
│ Sentry         │ ✅ ADOPT │ Error tracking (frontend + backend)│
│ PagerDuty      │ ✅ ADOPT │ Incident alerting                  │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: SECRETS & SECURITY
┌────────────────┬──────────┬────────────────────────────────────┐
│ HashiCorp Vault│ ✅ ADOPT │ Secrets management                 │
│ AWS Secrets Mgr│ ✅ ADOPT │ AWS secrets                        │
│ SOPS           │ ✅ ADOPT │ Encrypted secrets in git           │
│ Snyk           │ ✅ ADOPT │ Dependency vulnerability scanning  │
│ SonarQube      │ ✅ ADOPT │ SAST (code quality + security)     │
│ OWASP ZAP      │ ✅ ADOPT │ DAST (dynamic security scanning)   │
│ Trivy          │ ✅ ADOPT │ Container vulnerability scanning   │
└────────────────┴──────────┴────────────────────────────────────┘
```

### 2.7 Data Engineering

```
CATEGORY: DATA PROCESSING
┌────────────────┬──────────┬────────────────────────────────────┐
│ Apache Spark   │ ✅ ADOPT │ Large-scale data processing        │
│ dbt            │ ✅ ADOPT │ SQL-based data transformations     │
│ Apache Airflow │ ✅ ADOPT │ Workflow orchestration             │
│ Dagster        │ 🔵 TRIAL │ Modern data orchestration          │
│ Prefect        │ 🟡 ASSESS│ Airflow alternative               │
│ Apache Beam    │ 🟡 ASSESS│ Unified batch+stream              │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: DATA WAREHOUSES
┌────────────────┬──────────┬────────────────────────────────────┐
│ Snowflake      │ ✅ ADOPT │ Primary cloud DW                   │
│ BigQuery       │ ✅ ADOPT │ GCP analytics                      │
│ Redshift       │ ✅ ADOPT │ AWS analytics                      │
│ ClickHouse     │ 🔵 TRIAL │ Real-time analytics                │
│ DuckDB         │ ✅ ADOPT │ Local analytics, embedded          │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: STREAMING
┌────────────────┬──────────┬────────────────────────────────────┐
│ Apache Kafka   │ ✅ ADOPT │ Event streaming                    │
│ AWS Kinesis    │ ✅ ADOPT │ AWS-managed streaming              │
│ Apache Flink   │ 🔵 TRIAL │ Stream processing                  │
│ Debezium       │ ✅ ADOPT │ Change Data Capture                │
└────────────────┴──────────┴────────────────────────────────────┘
```

### 2.8 Collaboration & Productivity

```
CATEGORY: DEVELOPMENT
┌────────────────┬──────────┬────────────────────────────────────┐
│ GitHub         │ ✅ ADOPT │ Source control, code review, CI/CD │
│ VS Code        │ ✅ ADOPT │ Primary IDE                        │
│ Cursor         │ 🔵 TRIAL │ AI-powered IDE                     │
│ GitHub Copilot │ ✅ ADOPT │ AI code assistant                  │
│ Claude (API)   │ ✅ ADOPT │ AI development assistant           │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: DESIGN
┌────────────────┬──────────┬────────────────────────────────────┐
│ Figma          │ ✅ ADOPT │ Primary design tool                │
│ FigJam         │ ✅ ADOPT │ Collaborative whiteboarding        │
│ Miro           │ ✅ ADOPT │ Workshop facilitation              │
│ Lottie         │ ✅ ADOPT │ Animation format                   │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: PROJECT MANAGEMENT
┌────────────────┬──────────┬────────────────────────────────────┐
│ Linear         │ ✅ ADOPT │ Primary issue tracker              │
│ Notion         │ ✅ ADOPT │ Documentation, wikis               │
│ Confluence     │ ⏸ HOLD  │ Enterprise client requirement      │
│ Jira           │ ⏸ HOLD  │ Enterprise client requirement      │
└────────────────┴──────────┴────────────────────────────────────┘

CATEGORY: COMMUNICATION
┌────────────────┬──────────┬────────────────────────────────────┐
│ Slack          │ ✅ ADOPT │ Internal + client communication    │
│ Zoom           │ ✅ ADOPT │ Video meetings                     │
│ Loom           │ ✅ ADOPT │ Async video updates                │
│ Google Workspace│ ✅ ADOPT│ Email, calendar, docs              │
└────────────────┴──────────┴────────────────────────────────────┘
```

---

## 3. TECHNOLOGY SELECTION DECISION TREE

```
NEW PROJECT TECHNOLOGY DECISION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Is the technology in our ADOPT list?
├─ YES → Use it. No further approval needed.
└─ NO → Is it in our TRIAL list?
   ├─ YES → Can use with PRINC-ENG approval + risk documentation.
   └─ NO → Is it in our ASSESS list?
      ├─ YES → Prototype only. No production use without RFC.
      └─ NO → Is it in HOLD or AVOID?
         ├─ HOLD → Only for existing projects. Don't add to new.
         ├─ AVOID → Do not use. Period. Find an alternative.
         └─ NOT LISTED → Submit RFC for evaluation.
            → 2-week assessment spike
            → ARB review
            → Placed on radar

CLIENT REQUIRES NON-STANDARD TECH:
  If client mandates a technology not in our stack:
  1. Can we use our stack and integrate? → Prefer this.
  2. Must use their tech? → VP-ARCH (014) approves exception.
  3. Document as project-specific exception (not a precedent).
  4. Ensure team has skills (or plan for training/hiring).
```

---

## 4. TECHNOLOGY RADAR VISUALIZATION

```
                        ADOPT
                    ┌───────────┐
                   ╱    React    ╲
                  ╱   TypeScript  ╲
                 ╱   PostgreSQL    ╲
                ╱    Terraform      ╲
               ╱     FastAPI         ╲
              ├───────────────────────┤
              │        TRIAL          │
              │   Astro  Biome        │
              │   Flutter  ClickHouse │
              │   Dagster  Qdrant     │
              ├───────────────────────┤
              │       ASSESS          │
              │   Svelte  Rust        │
              │   Weaviate  Prefect   │
              ├───────────────────────┤
              │        HOLD           │
              │  Angular  Express     │
              │  Redux  Webpack       │
              ├───────────────────────┤
              │       AVOID           │
              │  jQuery  Bootstrap    │
              │  PHP  Jenkins         │
              └───────────────────────┘

  Last updated: Q1 2026
  Next review: Q2 2026
  Owner: DIST-ENG (025) + VP-ARCH (014)
```
