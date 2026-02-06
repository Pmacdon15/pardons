import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-slate-200 border-b bg-white py-4">
			<nav className="container mx-auto flex items-center justify-between px-6">
				<Link className="flex items-center gap-3" href="/">
					<Image
						alt="Maple Leaf Logo"
						height={32}
						src="/maple_leaf_icon.png"
						width={32}
					/>
					<span className="font-bold text-primary text-xl">
						Pardons Are Us
					</span>
				</Link>
				<ul className="hidden items-center gap-8 font-medium md:flex">
					<li>
						<Link
							className="transition-colors hover:text-primary"
							href="/#how-it-works"
						>
							How It Works
						</Link>
					</li>
					<li>
						<Link
							className="transition-colors hover:text-primary"
							href="/#diy"
						>
							Do It Yourself
						</Link>
					</li>
					<li>
						<Link
							className="transition-colors hover:text-primary"
							href="/#our-services"
						>
							Our Services
						</Link>
					</li>
					<li>
						<Link
							className="transition-colors hover:text-primary"
							href="/#eligibility"
						>
							Eligibility
						</Link>
					</li>
					<li>
						<Link
							className="rounded-md bg-primary px-6 py-2 font-semibold text-white transition-colors hover:bg-primary-hover"
							href="/contact"
						>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
