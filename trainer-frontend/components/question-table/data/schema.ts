import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.number(),
  question: z.string(),
  answer: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  tag: z.string(),
  author: z.string(),
})

export type Task = z.infer<typeof taskSchema>
