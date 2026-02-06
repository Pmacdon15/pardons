'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { NativeSelect } from '@/components/ui/native-select'
import { Textarea } from '@/components/ui/textarea'
import { useSendMessage } from '@/mutations/send-message'
import { type FormValues, formSchema } from '@/zod/schemas'

export function ContactFormFallback() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: 'inquiry',
			message: '',
		},
	})

	const { mutate, isPending } = useSendMessage({
		onSuccess: () => {
			toast.success('Email sent')
			form.reset()
		},
		onError: () => {
			toast.error('Failed to send email')
		},
	})

	function onSubmit(data: FormValues) {
		mutate(data)
	}

	const baseInputStyles =
		'w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all'

	return (
		<form
			className="max-w-4xl space-y-6"
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<h2 className="font-semibold text-2xl">Get a Quote</h2>
			<p className="text-muted-foreground">
				Send us a message so we can schedule an on-site inspection.
			</p>

			{/* Name */}
			<Controller
				control={form.control}
				name="name"
				render={({ field, fieldState }) => (
					<Field
						className="space-y-2"
						data-invalid={fieldState.invalid}
					>
						<FieldLabel
							className="block font-bold text-slate-500 text-sm uppercase tracking-wider"
							htmlFor={field.name}
						>
							Full Name
						</FieldLabel>

						<Input
							{...field}
							aria-invalid={fieldState.invalid}
							autoComplete="name"
							className={baseInputStyles}
							id={field.name}
							placeholder="John Doe"
						/>

						{fieldState.invalid && (
							<FieldError errors={[fieldState.error]} />
						)}
					</Field>
				)}
			/>

			{/* Email */}
			<Controller
				control={form.control}
				name="email"
				render={({ field, fieldState }) => (
					<Field
						className="space-y-2"
						data-invalid={fieldState.invalid}
					>
						<FieldLabel
							className="block font-bold text-slate-500 text-sm uppercase tracking-wider"
							htmlFor={field.name}
						>
							Email Address
						</FieldLabel>

						<Input
							{...field}
							aria-invalid={fieldState.invalid}
							autoComplete="email"
							className={baseInputStyles}
							id={field.name}
							placeholder="you@example.com"
						/>

						{fieldState.invalid && (
							<FieldError errors={[fieldState.error]} />
						)}
					</Field>
				)}
			/>

			{/* Subject */}
			<Controller
				control={form.control}
				name="subject"
				render={({ field, fieldState }) => {
					const id = 'form-contact-subject'
					return (
						<FieldGroup className="space-y-2">
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel
									className="block font-bold text-slate-500 text-sm uppercase tracking-wider"
									htmlFor={id}
								>
									Subject
								</FieldLabel>

								<NativeSelect
									{...field}
									aria-invalid={fieldState.invalid}
									className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
									id={id}
									value={field.value || 'inquiry'}
								>
									<option value="inquiry">
										General Inquiry
									</option>
									<option value="100-consultation">
										$100 Consultation
									</option>
									<option value="300-full-assistance">
										$300 Full Assistance
									</option>
								</NativeSelect>

								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						</FieldGroup>
					)
				}}
			/>

			{/* Message */}
			<Controller
				control={form.control}
				name="message"
				render={({ field, fieldState }) => (
					<Field
						className="space-y-2"
						data-invalid={fieldState.invalid}
					>
						<FieldLabel
							className="block font-bold text-slate-500 text-sm uppercase tracking-wider"
							htmlFor={field.name}
						>
							Your Message
						</FieldLabel>

						<Textarea
							{...field}
							aria-invalid={fieldState.invalid}
							className={baseInputStyles}
							id={field.name}
							placeholder="Describe what you need done..."
							rows={5}
						/>

						<FieldDescription className="text-muted-foreground text-sm">
							Include as much detail as possible.
						</FieldDescription>

						{fieldState.invalid && (
							<FieldError errors={[fieldState.error]} />
						)}
					</Field>
				)}
			/>

			<div className="flex space-x-4">
				<Button
					className="flex-1"
					onClick={() => form.reset()}
					type="button"
					variant="outline"
				>
					Reset
				</Button>

				<Button className="flex-1" disabled={isPending} type="submit">
					{isPending ? 'Sending…' : 'Submit'}
				</Button>
			</div>
		</form>
	)
}
