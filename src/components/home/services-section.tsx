import Link from 'next/link'

export function ServicesSection() {
	return (
		<section
			className="border-slate-200 border-y bg-slate-50 py-24"
			id="our-services"
		>
			<div className="container mx-auto max-w-4xl px-6">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-4xl">
						Professional Assistance
					</h2>
					<p className="text-lg text-slate-500 leading-relaxed">
						If you need help navigating the process, we provide
						expert guidance for a simple flat fee.
					</p>
				</div>

				<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
					{/* Orientation Tier */}
					<div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
						<div className="bg-slate-800 p-8 text-center text-white">
							<span className="font-extrabold text-5xl">$100</span>
							<p className="mt-2 font-bold text-sm uppercase tracking-widest opacity-80">
								Professional Orientation
							</p>
						</div>
						<div className="flex grow flex-col justify-between space-y-6 p-10">
							<ul className="space-y-4">
								<li className="flex items-center gap-4 text-slate-700">
									<span className="font-bold text-primary italic">
										✓
									</span>
									<span>
										<strong>30-Minute Phone Call:</strong>{' '}
										Orientation to the process and personal
										guidance.
									</span>
								</li>
								<li className="flex items-center gap-4 text-slate-700">
									<span className="font-bold text-primary italic">
										✓
									</span>
									<span>
										<strong>Document Review:</strong> We
										review your application files for
										accuracy and completeness.
									</span>
								</li>
								<li className="flex items-center gap-4 text-slate-400">
									<span className="font-bold">✕</span>
									<span>No Email Support</span>
								</li>
							</ul>
							<Link
								className="mt-6 block rounded-lg bg-slate-900 p-4 text-center font-bold text-white transition-colors hover:bg-slate-800"
								href={'/contact?subject=100-consultation'}
							>
								Select Orientation
							</Link>
						</div>
					</div>

					{/* Full Assistance Tier */}
					<div className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-primary bg-white shadow-xl">
						<div className="absolute top-4 right-4 rounded bg-white px-2 py-1 font-bold text-[10px] text-primary uppercase tracking-tight">
							Best Value
						</div>
						<div className="bg-primary p-8 text-center text-white">
							<span className="font-extrabold text-5xl">$300</span>
							<p className="mt-2 font-bold text-sm uppercase tracking-widest opacity-80">
								Full Assistance Package
							</p>
						</div>
						<div className="flex grow flex-col justify-between space-y-6 p-10">
							<ul className="space-y-4">
								<li className="flex items-center gap-4 text-slate-700">
									<span className="font-bold text-primary italic">
										✓
									</span>
									<span>
										<strong>
											Multiple Consultations:
										</strong>{' '}
										Two 30 minutes consultations.
									</span>
								</li>
								<li className="flex items-center gap-4 text-slate-700">
									<span className="font-bold text-primary italic">
										✓
									</span>
									<span>
										<strong>
											Complete Document Management:
										</strong>{' '}
										We handle the review and organization of
										all files.
									</span>
								</li>
								<li className="flex items-center gap-4 text-slate-700">
									<span className="font-bold text-primary italic">
										✓
									</span>
									<span>
										<strong>6-Month Email Support:</strong>{' '}
										Dedicated assistance with 2-3 business
										day response times.
									</span>
								</li>
							</ul>
							<Link
								className="mt-6 block rounded-lg bg-primary p-4 text-center font-bold text-white shadow-md transition-colors hover:bg-primary-hover"
								href={'/contact?subject=300-full-assistance'}
							>
								Get Full Assistance
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
