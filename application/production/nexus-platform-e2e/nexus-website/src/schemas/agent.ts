import { z } from "zod";

export const TierSchema = z.object({
  number: z.number().int().min(0).max(9),
  label: z.string(),
});

export const InteractionSchema = z.object({
  agent: z.string(),
  frequency: z.string(),
  context: z.string(),
});

export const PersonalSchema = z.object({
  nickname: z.string(),
  age: z.number().int(),
  about_me: z.string(),
  what_i_bring: z.string(),
  my_strengths: z.array(z.string()),
  my_weaknesses: z.array(z.string()),
  working_with_me: z.string(),
});

export const AgentSchema = z.object({
  agent_number: z.string().regex(/^\d{3}$/),
  code: z.string(),
  role: z.string(),
  department: z.string(),
  department_number: z.string().regex(/^\d{2}$/),
  department_slug: z.string(),
  reports_to: z.string(),
  direct_reports: z.array(z.string()).optional(),
  tier: TierSchema,
  personality: z.string(),
  core_responsibilities: z.array(z.string()),
  decision_authority: z.object({
    can_decide: z.array(z.string()),
    must_escalate: z.array(z.string()),
  }),
  interaction_map: z.object({
    primary: z.array(InteractionSchema),
    secondary: z.array(InteractionSchema),
  }).optional(),
  output_standards: z.string(),
  success_metrics: z.array(z.string()),
  personal: PersonalSchema.optional(),
  avatar_url: z.string(),
});

export type Agent = z.infer<typeof AgentSchema>;
export type Tier = z.infer<typeof TierSchema>;
export type Personal = z.infer<typeof PersonalSchema>;
