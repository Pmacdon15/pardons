import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Pardons Are Us | Canadian Record Suspension Assistance',
	description:
		'Getting a pardon in Canada is easier than you think. Contact us today for more information',
}

export default function ContactLayout({ children }: { children: ReactNode }) {
	return <>{children}</>
}
