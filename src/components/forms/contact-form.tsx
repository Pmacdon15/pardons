"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { useSendMessage } from "@/mutations/send-message";
import { type FormValues, formSchema } from "@/zod/schemas";

const validSubjects = [
  "inquiry",
  "100-consultation",
  "300-full-assistance",
] as const;
type SubjectType = (typeof validSubjects)[number];

export function ContactForm({
  subjectPromise,
}: {
  subjectPromise?: Promise<string>;
}) {
  const [defaultSubject, setDefaultSubject] = useState<SubjectType>("inquiry");

  // Watch for subjectPromise changes and update defaultSubject
  useEffect(() => {
    if (!subjectPromise) return;
    let mounted = true;
    subjectPromise.then((subject) => {
      if (!mounted) return;
      if (validSubjects.includes(subject as SubjectType)) {
        setDefaultSubject(subject as SubjectType);
      } else {
        setDefaultSubject("inquiry");
      }
    });
    return () => {
      mounted = false;
    };
  }, [subjectPromise]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: defaultSubject,
      message: "",
    },
  });

  // Update form field if defaultSubject changes after mount
  useEffect(() => {
    form.setValue("subject", defaultSubject);
  }, [defaultSubject, form]);

  const { mutate, isPending } = useSendMessage({
    onSuccess: () => {
      toast.success("Email sent");
      form.reset();
    },
    onError: () => {
      toast.error("Failed to send email");
    },
  });

  function onSubmit(data: FormValues) {
    mutate(data);
  }

  const baseInputStyles =
    "w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 max-w-4xl"
    >
      <h2 className="text-2xl font-semibold">Reach Out</h2>
      <p className="text-muted-foreground">
        Send us a message so we can get you started
      </p>

      {/* Name */}
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field className="space-y-2" data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="block font-bold text-sm uppercase tracking-wider text-slate-500"
            >
              Full Name
            </FieldLabel>

            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              className={baseInputStyles}
              placeholder="John Doe"
              autoComplete="name"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Email */}
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field className="space-y-2" data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="block font-bold text-sm uppercase tracking-wider text-slate-500"
            >
              Email Address
            </FieldLabel>

            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              className={baseInputStyles}
              placeholder="you@example.com"
              autoComplete="email"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Subject */}
      <Controller
        control={form.control}
        name="subject"
        render={({ field, fieldState }) => {
          const id = "form-contact-subject";
          return (
            <FieldGroup className="space-y-2">
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={id}
                  className="block font-bold text-sm uppercase tracking-wider text-slate-500"
                >
                  Subject
                </FieldLabel>

                <NativeSelect
                  {...field}
                  value={field.value || "inquiry"}
                  id={id}
                  aria-invalid={fieldState.invalid}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  <option value="inquiry">General Inquiry</option>
                  <option value="100-consultation">$100 Consultation</option>
                  <option value="300-full-assistance">
                    $300 Full Assistance
                  </option>
                </NativeSelect>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            </FieldGroup>
          );
        }}
      />

      {/* Message */}
      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field className="space-y-2" data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="block font-bold text-sm uppercase tracking-wider text-slate-500"
            >
              Your Message
            </FieldLabel>

            <Textarea
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              rows={5}
              className={baseInputStyles}
              placeholder="Describe what you need done..."
            />

            <FieldDescription className="text-sm text-muted-foreground">
              Include as much detail as possible.
            </FieldDescription>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <div className="flex space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => form.reset()}
          className="flex-1"
        >
          Reset
        </Button>

        <Button type="submit" disabled={isPending} className="flex-1">
          {isPending ? "Sending…" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
