'use server'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { render } from '@react-email/render'
import type z from 'zod'
import { EmailTemplate } from '@/components/email-templates/contact-email'
import { formSchema } from '../zod/schemas'

const sesClient = new SESClient({
	region: process.env.AWS_REGION || 'us-east-1',
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
	},
})

export async function sendEmail(values: z.infer<typeof formSchema>) {
	const validatedFields = formSchema.safeParse({
		name: values.name,
		email: values.email,
		subject: values.subject,
		message: values.message,
	})

	if (!validatedFields.success) {
		throw new Error(`Error sending email: invalid form`)
	}

	const { name, email, subject, message } = validatedFields.data

	const html = await render(
		EmailTemplate({
			name,
			email,
			subject,
			message,
		}),
	)

	const command = new SendEmailCommand({
		Destination: {
			ToAddresses: ['pardons@notifications.pardonsareus.ca'],
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: html,
				},
			},
			Subject: {
				Charset: 'UTF-8',
				Data: 'Contact Form Filled Out',
			},
		},
		Source: 'Contact Form <pardons@notifications.pardonsareus.ca>',
		ReplyToAddresses: [email],
	})

	try {
		const data = await sesClient.send(command)
		console.log('SES Result: ', data)
		return data
	} catch (error) {
		console.error('SES Error: ', error)
		throw new Error(`Error sending email: ${error instanceof Error ? error.message : JSON.stringify(error)}`)
	}
}
