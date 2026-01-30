import z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters."),

  email: z.email("Enter a valid email address."),

  subject: z.enum(["inquiry", "100-consultation", "300-full-assistance"], {
    message: "Please select a subject.",
  }),

  message: z
    .string()
    .min(5, "Message must be at least 5 characters.")
    .max(500, "Message must be at most 500 characters."),
});

export type FormValues = z.infer<typeof formSchema>;
