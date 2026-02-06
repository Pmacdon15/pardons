import { Suspense } from 'react'
import { ContactForm } from '@/components/forms/contact-form'

export default function ContactPage(props: PageProps<'/contact'>) {
	const subjectPromise = props.searchParams.then((params) =>
		Array.isArray(params.subject)
			? params.subject[0]
			: (params.subject ?? 'inquiry'),
	)

	return (
		<main className="grow bg-slate-50 py-20">
			<div className="container mx-auto grid max-w-5xl gap-16 px-6 md:grid-cols-2">
				<div className="flex flex-col justify-center">
					<h1 className="mb-6 font-bold text-5xl">Get In Touch</h1>
					<p className="mb-8 text-slate-600 text-xl leading-relaxed">
						Whether you're ready to start your pardon application or
						just have some questions, we're here to help.
					</p>
					<div className="space-y-6">
						<div className="rounded-xl border border-slate-200 bg-white p-6">
							<p className="font-bold text-slate-900">Email Us</p>
							<p className="cursor-pointer text-primary hover:underline">
								help@notifications.pardonsareus.ca
							</p>
						</div>
						<div className="rounded-xl border border-slate-200 bg-white p-6">
							<p className="font-bold text-slate-900">
								Business Hours
							</p>
							<p className="text-slate-600">
								Mon - Fri: 9:00 AM - 5:00 PM EST
							</p>
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-slate-100 bg-white p-10 shadow-xl">
					<Suspense fallback={<ContactForm />}>
						<ContactForm subjectPromise={subjectPromise} />
					</Suspense>
				</div>
			</div>
		</main>
	)
}
