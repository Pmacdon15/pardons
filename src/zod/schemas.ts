import z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters."),

  email: z.email("Enter a valid email address."),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters.")
    .max(100, "Subject must be at most 100 characters."),

  message: z
    .string()
    .min(5, "Message must be at least 5 characters.")
    .max(500, "Message must be at most 500 characters."),
});

export type FormValues = z.infer<typeof formSchema>;
