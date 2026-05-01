import Link from 'next/link'

export function Hero() {
	return (
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
	)
}
