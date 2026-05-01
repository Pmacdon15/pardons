export function EligibilitySection() {
	return (
		<section
			className="container mx-auto mb-20 px-6 py-24"
			id="eligibility"
		>
			<div className="mb-16 text-center">
				<h2 className="mb-4 font-bold text-4xl">
					Eligibility & Wait Times
				</h2>
				<p className="text-slate-500">
					Ensure you have waited the necessary time before starting
					your application.
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
						Waiting period begins once all parts of your sentence
						are fully completed.
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
						Waiting period begins once all parts of your sentence
						are fully completed.
					</p>
				</div>
			</div>
		</section>
	)
}
