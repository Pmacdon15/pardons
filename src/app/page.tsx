import { DIYSection } from '@/components/home/diy-section'
import { EligibilitySection } from '@/components/home/eligibility-section'
import { Hero } from '@/components/home/hero'
import { InfoSection } from '@/components/home/info-section'
import { ServicesSection } from '@/components/home/services-section'

export default function Home() {
	return (
		<main className="grow">
			<Hero />
			<InfoSection />
			<DIYSection />
			<ServicesSection />
			<EligibilitySection />
		</main>
	)
}
