import { RiBriefcaseLine, RiEyeLine, RiBarChart2Line } from 'react-icons/ri'
import { HiOutlineClipboardCheck, HiOutlinePuzzle } from 'react-icons/hi'
import { HiArrowTrendingUp } from 'react-icons/hi2'

export default function Features() {
  const features = [
    {
      name: 'LEAN MANAGEMENT',
      description:
        'O Lean Management é uma filosofia de gestão que busca maximizar o valor entregue ao cliente, eliminando desperdícios, reduzindo custos e melhorando continuamente os processos, com foco no desenvolvimento das pessoas e na criação de uma cultura de melhoria contínua.',
      icon: RiBriefcaseLine,
    },
    {
      name: 'GESTÃO VISUAL',
      description:
        'A Gestão Visual é uma técnica utilizada na metodologia Lean para tornar os processos mais visíveis e compreensíveis, permitindo uma melhor tomada de decisão e a identificação de oportunidades de melhoria.',
      icon: RiEyeLine,
    },
    {
      name: 'TRABALHO PADRONIZADO',
      description:
        'O Trabalho Padronizado é uma técnica do Lean Management que consiste em documentar os processos e estabelecer padrões para as atividades, visando a melhoria contínua, a redução de variações e o aumento da eficiência e qualidade das operações.',
      icon: RiBarChart2Line,
    },
    {
      name: 'PLANNED MAINTENANCE',
      description:
        'O Planned Maintenance é uma estratégia de manutenção preventiva adotada na metodologia Lean para garantir a confiabilidade dos equipamentos, reduzir custos com manutenção corretiva e aumentar a eficiência da produção.',
      icon: HiOutlineClipboardCheck,
    },
    {
      name: 'MÉTODO A3',
      description:
        'O Método A3 é uma ferramenta do Lean Management utilizada para solucionar problemas de forma estruturada e colaborativa, seguindo um processo de análise, planejamento, implementação e verificação, com o objetivo de alcançar melhorias sustentáveis nos processos.',
      icon: HiOutlinePuzzle,
    },
    {
      name: 'FLUXO CONTINUO',
      description:
        'O Fluxo Contínuo é uma estratégia da metodologia Lean que busca eliminar os desperdícios e manter a produção fluindo de forma constante e sem interrupções, permitindo a entrega de valor ao cliente de forma mais rápida e eficiente.',
      icon: HiArrowTrendingUp,
    },
  ]

  return (
    <div>
      <section className="pb-12 xl:py-24">
        <div className="container mx-auto">
          <h2 className="mx-auto mb-2 text-center text-4xl font-bold text-primary xl:mb-3 ">
            Transformando Desafios em Oportunidades
          </h2>

          <div className="flex flex-col">
            <div className="mx-auto max-w-7xl text-center">
              <p className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl ">
                Maximize a eficiência, Minimize os desperdícios
              </p>
              <p className="mt-6 text-lg leading-8">
                Oferecemos treinamentos e consultoria em Lean Manufacturing,
                para ajudar sua equipe a implementar uma cultura de melhoria
                contínua e alcançar resultados excepcionais em sua produção.
              </p>
            </div>
          </div>

          <div className="mx-auto mb-16 mt-16 max-w-2xl sm:mb-20 sm:mt-20 lg:mb-24 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative transition-all hover:scale-110"
                >
                  <dt className="justify-center text-base font-semibold leading-7 text-muted-foreground">
                    <div className="mb-4 flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-primary">
                      <feature.icon
                        className="h-[36px] w-[36px] text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </dt>
                  <dd className="space-y-4">
                    <p className="">{feature.name}</p>
                    <p className="">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
