import Features from '@/components/Features'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Clients } from '@/components/Clients'
import MapsLocation from '@/components/MapsContact'
import Faq from '@/components/Faq'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Clients />
      <Faq />
      <MapsLocation />
      <WhatsAppButton />
    </main>
  )
}
