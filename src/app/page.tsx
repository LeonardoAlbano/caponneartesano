import Features from '@/components/Features'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Clients } from '@/components/Clients'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Clients />
    </main>
  )
}
