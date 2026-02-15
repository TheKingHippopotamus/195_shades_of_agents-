import { z } from "zod";

export const DepartmentSchema = z.object({
  number: z.string().regex(/^\d{2}$/),
  name: z.string(),
  slug: z.string(),
  folder: z.string(),
  agent_count: z.number().int(),
  agent_range: z.object({
    start: z.string(),
    end: z.string(),
  }),
  leadership: z.array(z.object({
    code: z.string(),
    role: z.string(),
    tier: z.number(),
  })),
  agents: z.array(z.string()),
  color: z.string(),
});

export type Department = z.infer<typeof DepartmentSchema>;
