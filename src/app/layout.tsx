import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Providers } from '@/components/providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Pardons Are Us | Canadian Record Suspension Assistance',
	description:
		'Getting a pardon in Canada is easier than you think. Do it yourself for under $300 or get professional help from Pardons Are Us.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Providers>
			<html className="scroll-smooth" lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} font-sans text-slate-800 antialiased`}
				>
					<div className="flex min-h-screen flex-col">
						<Header />
						{children}
						<Analytics />
						<Footer />
						<Toaster />
					</div>
				</body>
			</html>
		</Providers>
	)
}
