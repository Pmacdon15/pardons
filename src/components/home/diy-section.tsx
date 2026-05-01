import Link from 'next/link'

export function DIYSection() {
	return (
		<section className="container mx-auto px-6 py-24" id="diy">
			<div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-12 text-center text-white">
				<h2 className="mb-6 font-bold text-4xl">
					Do It Yourself for Under{' '}
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
	)
}
