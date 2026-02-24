import * as z from "zod";

export interface ActionResponse<T = any> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  fullName: z.string({ error: "This field is required" }).optional(),
  email: z.email({ error: "Please enter a valid email" }).optional(),
  phone: z.coerce
    .number({ error: "Please enter a valid phone number" })
    .optional(),
  subject: z.string().min(1, "Please select an item").optional(),
  message: z.string({ error: "This field is required" }).optional(),
  subscribe: z.boolean().default(false),
  socialLinks: z.unknown(),
});
