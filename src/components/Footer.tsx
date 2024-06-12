'use client'
import LogoCaponne from '@/assets/logoCaponne'
import { LogoOmMaior } from '@/assets/LogoOmMaior'
import { RiMailLine, RiWhatsappLine, RiMapPin2Line } from 'react-icons/ri'

export function Footer() {
  const features = [
    {
      icon: RiWhatsappLine,
      description: '47 9911-42332',
    },

    {
      icon: RiMapPin2Line,
      description: 'R. Ribeirão Preto 849, Joinville - SC',
    },

    {
      icon: RiMailLine,
      description: 'mondini.odacir@gmail.com',
    },
  ]

  return (
    <footer className="border-t-2 border-purple-900 bg-sky-800 bg-transparent py-8 text-white">
      <div className="container mx-auto">
        <div className="flex  items-center justify-between p-3 pb-8 ">
          <div className="w-[350px] space-y-3">
            <LogoOmMaior />

            <p className="text-sm">
              Oferecemos treinamentos e consultoria em Lean Manufacturing, para
              ajudar sua equipe a implementar uma cultura de melhoria contínua e
              alcançar resultados excepcionais em sua produção.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {features.map((feature) => (
              <div
                key={feature.description}
                className="flex items-center gap-3 "
              >
                <feature.icon
                  className="h-[24px] w-[24px] text-sky-300 "
                  aria-hidden="true"
                />
                {feature.description}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-2 border-purple-900">
          <div className="mt-3 flex justify-between">
            <h1 className="font-mono">Made in Santa Catarina </h1>
            <div className="flex items-center gap-2">
              <h1>Forjado por:</h1>
              <LogoCaponne />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
