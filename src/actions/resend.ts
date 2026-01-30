'use server'
import { Resend } from 'resend'
import type z from 'zod'
import { EmailTemplate } from '@/components/email-templates/contact-email'
import { formSchema } from '../zod/schemas'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(values: z.infer<typeof formSchema>) {
	const validatedFields = formSchema.safeParse({
		name: values.name,
		email: values.email,
		subject:values.subject,
		message: values.message,
	})

	if (!validatedFields.success) {
		throw new Error(`Error sending email: invalid form`)
	}

	const { data, error } = await resend.emails.send({
		from: 'Contact Form <contact@resend.dev>',
		to: ['pmacdonald15@gmail.com'],
		subject: 'Contact Form Filled Out',
		react: EmailTemplate({
			name: validatedFields.data.name,
			email: validatedFields.data.email,
			subject: validatedFields.data.subject,
			message: validatedFields.data.message,
		}),
	})

	console.log('Result: ', data)

	if (error) {
		console.error('Error ', error)
		throw new Error(`Error sending email: ${JSON.stringify(error)}`)
	}
	return data
}
