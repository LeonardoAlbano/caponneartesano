import Link from 'next/link'
import { Button } from './ui/button'
import {
  RiBodyScanFill,
  RiBookmark3Fill,
  RiServiceFill,
  RiWhatsappLine,
} from 'react-icons/ri'
import OdacirMondiniSVG from '@/assets/OdacirMondiniSVG'
import Badge from './Badge'

/* eslint-disable react/no-unescaped-entities */
export function Hero() {
  return (
    <section className="h-[auto] bg-bottom py-16 xl:py-24">
      <div className="container mx-auto ">
        <div className="flex justify-between gap-x-8 ">
          {/* Left Side Content */}
          <div className="mx-auto flex max-w-[800px] flex-col justify-center text-center xl:mx-0 xl:text-left ">
            <div className="mb-4 text-xl font-semibold uppercase tracking-[4px] text-primary">
              ODACIR MONDINI
            </div>

            <h1 className="h1">Desenvolvimento Empresarial</h1>
            <p className="subtitle mx-auto mt-6 max-w-[590px] xl:mx-0">
              Acreditamos que o desenvolvimento empresarial é uma jornada
              coletiva, onde o trabalho em equipe e o alinhamento de objetivos
              são essenciais para o crescimento e sucesso de uma organização
            </p>

            <em className="text-zinc-500">Por - Odacir Mondini</em>

            <div className="pb-20 pt-8">
              <div>
                <Link href="http://wa.com">
                  <Button className="text-md gap-x-3 border-2 border-green-600 bg-transparent text-green-600 hover:bg-green-600 hover:text-white ">
                    <RiWhatsappLine size={24} />
                    FALE CONOSCO
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Banner Imagem */}
          <div className="relative -mb-9 hidden xl:flex">
            <OdacirMondiniSVG />
          </div>
        </div>
      </div>

      <div className="bg-sky-900 py-4 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">
                Years Of Expperience
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <Badge
                  icon={<RiBookmark3Fill />}
                  endCountNum={12}
                  endCountText="+"
                  badgeText=""
                  containerStyles={''}
                />
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">Followers</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <Badge
                  icon={<RiBodyScanFill />}
                  endCountNum={768}
                  endCountText="k"
                  badgeText=""
                  containerStyles={''}
                />
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">Projects</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <Badge
                  icon={<RiServiceFill />}
                  endCountNum={153}
                  endCountText="+"
                  badgeText=""
                  containerStyles={''}
                />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
