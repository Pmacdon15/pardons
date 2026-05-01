import { Briefcase, Plane, ShieldCheck } from 'lucide-react'

export function InfoSection() {
	return (
		<section
			className="border-slate-200 border-y bg-slate-50 py-24"
			id="how-it-works"
		>
			<div className="container mx-auto px-6">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-4xl">
						Why Get a Pardon?
					</h2>
					<p className="mx-auto max-w-2xl text-slate-500 italic">
						"A record suspension opens doors that were previously
						closed."
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md md:col-span-2 lg:row-span-2">
						<div className="relative z-10">
							<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
								<Briefcase className="h-6 w-6" />
							</div>
							<h3 className="mb-4 font-bold text-3xl tracking-tight">
								Career Advancement
							</h3>
							<p className="max-w-md text-lg text-slate-600 leading-relaxed">
								Most employers in Canada conduct background
								checks. A record suspension ensures your record
								is kept separate, allowing you to apply for any
								position with confidence and compete on a level
								playing field.
							</p>
						</div>
						<div className="mt-12 flex items-center gap-2">
							<span className="h-1 w-8 rounded-full bg-primary" />
							<p className="font-semibold text-primary text-sm uppercase tracking-wider">
								Professional Growth
							</p>
						</div>
						{/* Subtle background accent */}
						<div className="absolute -right-8 -bottom-8 opacity-[0.03] grayscale transition-transform duration-500 group-hover:scale-110">
							<Briefcase className="h-64 w-64" />
						</div>
					</div>

					<div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
						<div className="relative z-10">
							<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<Plane className="h-5 w-5" />
							</div>
							<h3 className="mb-2 font-bold text-xl">
								Global Mobility
							</h3>
							<p className="text-slate-600">
								Travel to the United States and other
								international destinations without the fear of
								being denied entry or detained.
							</p>
						</div>
						<div className="absolute -right-4 -bottom-4 opacity-[0.03] grayscale transition-transform duration-500 group-hover:scale-110">
							<Plane className="h-32 w-32" />
						</div>
					</div>

					<div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
						<div className="relative z-10">
							<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<ShieldCheck className="h-5 w-5" />
							</div>
							<h3 className="mb-2 font-bold text-xl">
								True Closure
							</h3>
							<p className="text-slate-600">
								Finally close the book on your past. A record
								suspension provides the legal and emotional
								closure you need to move forward.
							</p>
						</div>
						<div className="absolute -right-4 -bottom-4 opacity-[0.03] grayscale transition-transform duration-500 group-hover:scale-110">
							<ShieldCheck className="h-32 w-32" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
