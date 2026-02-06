import Link from 'next/link'

export default function Home() {
	return (
		<main className="grow">
			{/* Hero Section */}
			<section className="py-24 text-center">
				<div className="container mx-auto px-6">
					<h1 className="mb-6 font-extrabold text-5xl tracking-tight md:text-6xl">
						Clearing Your Path Forward
					</h1>
					<p className="mx-auto mb-10 max-w-2xl text-slate-500 text-xl leading-relaxed">
						In Canada, getting a pardon (record suspension) is
						accessible and straightforward. We're here to show you
						how, or help you every step of the way.
					</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Link
							className="rounded-lg bg-primary px-8 py-4 font-bold text-lg text-white transition-all hover:bg-primary-hover"
							href="/contact?subject=inquiry"
						>
							Get Professional Help
						</Link>
						<Link
							className="rounded-lg bg-slate-100 px-8 py-4 font-bold text-lg text-slate-700 transition-all hover:bg-slate-200"
							href="#diy"
						>
							Learn to DIY
						</Link>
					</div>
				</div>
			</section>

			{/* Info Section */}
			<section
				className="border-slate-200 border-y bg-slate-50 py-24"
				id="how-it-works"
			>
				<div className="container mx-auto px-6 text-center">
					<h2 className="mb-4 font-bold text-4xl">
						Why Get a Pardon?
					</h2>
					<p className="mx-auto mb-16 max-w-2xl text-slate-500 italic">
						"A record suspension opens doors that were previously
						closed."
					</p>

					<div className="grid gap-8 text-left md:grid-cols-3">
						<div className="rounded-xl border border-slate-200 bg-white p-8">
							<h3 className="mb-4 font-bold text-primary text-xl">
								Employment
							</h3>
							<p className="text-slate-600">
								Open more doors for career opportunities without
								the weight of a past record holding you back.
							</p>
						</div>
						<div className="rounded-xl border border-slate-200 bg-white p-8">
							<h3 className="mb-4 font-bold text-primary text-xl">
								Travel
							</h3>
							<p className="text-slate-600">
								Regain the ability to travel across borders with
								confidence and peace of mind.
							</p>
						</div>
						<div className="rounded-xl border border-slate-200 bg-white p-8">
							<h3 className="mb-4 font-bold text-primary text-xl">
								Peace of Mind
							</h3>
							<p className="text-slate-600">
								Close a chapter of your past and move forward
								toward a better, more secure future.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* DIY Section */}
			<section className="container mx-auto px-6 py-24" id="diy">
				<div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-12 text-center text-white">
					<h2 className="mb-6 font-bold text-4xl">
						Do It Yourself for Under $300
					</h2>
					<p className="mb-8 text-slate-400 text-xl">
						You don't need expensive legal services. Many Canadians
						successfully complete the process on their own.
					</p>

					<div className="mb-12 grid gap-6 rounded-2xl bg-slate-800 p-8 text-left sm:grid-cols-3">
						<div>
							<p className="mb-1 font-bold text-2xl text-primary">
								$50
							</p>
							<p className="font-semibold text-sm text-white uppercase tracking-widest opacity-60">
								PBC Fee
							</p>
						</div>
						<div>
							<p className="mb-1 font-bold text-2xl text-primary">
								$150-200
							</p>
							<p className="font-semibold text-sm text-white uppercase tracking-widest opacity-60">
								Documentation
							</p>
						</div>
						<div>
							<p className="mb-1 font-bold text-2xl text-primary">
								&lt; $300
							</p>
							<p className="font-semibold text-sm text-white uppercase tracking-widest opacity-60">
								Total Cost
							</p>
						</div>
					</div>

					<Link
						className="inline-block rounded-full bg-white px-10 py-5 font-bold text-lg text-slate-900 transition-colors hover:bg-slate-200"
						href="https://www.canada.ca/content/dam/pbc-clcc/Forms/record-suspension/44-015-PBC-RecordSuspensionApplicationGuide2024_EN_updated%20November%202025.pdf"
						rel="noopener noreferrer"
						target="_blank"
					>
						Download PDF Application Guide
					</Link>
				</div>
			</section>

			{/* Services Section */}
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
								<span className="font-extrabold text-5xl">
									$100
								</span>
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
											<strong>
												30-Minute Phone Call:
											</strong>{' '}
											Orientation to the process and
											personal guidance.
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
								<span className="font-extrabold text-5xl">
									$300
								</span>
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
											Extended phone support whenever you
											need it.
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
											We handle the review and
											organization of all files.
										</span>
									</li>
									<li className="flex items-center gap-4 text-slate-700">
										<span className="font-bold text-primary italic">
											✓
										</span>
										<span>
											<strong>
												6-Month Email Support:
											</strong>{' '}
											Dedicated assistance with 2-3
											business day response times.
										</span>
									</li>
								</ul>
								<Link
									className="mt-6 block rounded-lg bg-primary p-4 text-center font-bold text-white shadow-md transition-colors hover:bg-primary-hover"
									href={
										'/contact?subject=300-full-assistance'
									}
								>
									Get Full Assistance
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Eligibility Section */}
			<section
				className="container mx-auto mb-20 px-6 py-24"
				id="eligibility"
			>
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-4xl">
						Eligibility & Wait Times
					</h2>
					<p className="text-slate-500">
						Ensure you have waited the necessary time before
						starting your application.
					</p>
				</div>

				<div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
					<div className="rounded-2xl border border-slate-200 bg-white p-10 transition-colors hover:border-primary">
						<p className="mb-4 font-black text-4xl text-primary">
							5 Years
						</p>
						<h3 className="mb-2 font-bold text-xl">
							Summary Convictions
						</h3>
						<p className="text-slate-600 text-sm">
							Waiting period begins once all parts of your
							sentence are fully completed.
						</p>
					</div>
					<div className="relative rounded-2xl border border-primary bg-white p-10 shadow-lg">
						<span className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 font-bold text-[10px] text-white uppercase tracking-wider">
							Most Common
						</span>
						<p className="mb-4 font-black text-4xl text-primary">
							10 Years
						</p>
						<h3 className="mb-2 font-bold text-xl">
							Indictable Offenses
						</h3>
						<p className="text-slate-600 text-sm">
							Waiting period begins once all parts of your
							sentence are fully completed.
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}
