import { Handshake, Projector, Trophy } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

const servicesData = [
  {
    icon: <Handshake size={48} strokeWidth={1} />,
    title: 'MISSÃO',
    description:
      'Minha missão é fornecer soluções de produção enxuta que aumentem a eficiência e a qualidade dos processos de fabricação dos nossos clientes.',
  },

  {
    icon: <Projector size={48} strokeWidth={1} />,
    title: 'VISÃO',
    description:
      'Nossa visão é ser reconhecidos como especialistas em lean manufacturing, fornecendo soluções personalizadas e eficazes que aumentem a eficiência e a produtividade dos nossos clientes.',
  },

  {
    icon: <Trophy size={48} strokeWidth={1} />,
    title: 'VALORES',
    description:
      'Valorizamos a transparência, a honestidade e a integridade em todos os nossos relacionamentos com clientes e parceiros de negócios.',
  },
]

export function Services() {
  return (
    <section className="mb-12 bg-sky-900  xl:mb-36">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-6 pt-8 text-center text-5xl text-white xl:mb-24">
          Our Services
        </h2>

        <div className="grid justify-center gap-y-12 pb-20 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="relative flex h-[450px] w-full max-w-[425px] cursor-pointer flex-col items-center justify-center pb-10 transition-all hover:scale-110"
              >
                <CardHeader className="text-primary">
                  <div className="absolute -bottom-6 right-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary text-white">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 text-3xl text-primary">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
