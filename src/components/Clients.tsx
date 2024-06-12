'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Vantec } from '@/assets/logoClient/Vantec'
import { NutrataLogo } from '@/assets/logoClient/NutrataLogo'
import CeusaLogo from '@/assets/logoClient/CeusaLogo'
import AcivaleLogo from '@/assets/logoClient/AcivaleLogo'
import AzimuteLogo from '@/assets/logoClient/AzimutLogo'
import BellotaLogo from '@/assets/logoClient/BellotaLogo'
import ArvallLogo from '@/assets/logoClient/ArvalLogo'
import DassLogo from '@/assets/logoClient/DassLogo'
import FgEmpreendimentosLogo from '@/assets/logoClient/FgEmpreendimentosLogo'
import CniLogo from '@/assets/logoClient/CniLogo'
import BassLogo from '@/assets/logoClient/BassLogo'
import MinaplastLogo from '@/assets/logoClient/MinaplastLogo'
import ImamLogo from '@/assets/logoClient/ImamLogo'
import MolduraArteLogo from '@/assets/logoClient/MolduraArteLogo'
import PrintBagLogo from '@/assets/logoClient/PrintBagLogo'
import LunaLogo from '@/assets/logoClient/LunaLogo'
import PropexLogo from '@/assets/logoClient/PropexLogo'
import RottaLogo from '@/assets/logoClient/RottaLogo'
import RafitecLogo from '@/assets/logoClient/RafitecLogo'
import SindusconLogo from '@/assets/logoClient/SindusconLogo'
import TecnotokLogo from '@/assets/logoClient/TecnotokLogo'

const logoClientsData = [
  {
    avatar: <Vantec />,
  },
  {
    avatar: <NutrataLogo />,
  },
  {
    avatar: <CeusaLogo />,
  },
  {
    avatar: <AcivaleLogo />,
  },
  {
    avatar: <AzimuteLogo />,
  },
  {
    avatar: <BellotaLogo />,
  },
  {
    avatar: <ArvallLogo />,
  },

  {
    avatar: <CniLogo />,
  },
  {
    avatar: <DassLogo />,
  },
  {
    avatar: <FgEmpreendimentosLogo />,
  },

  {
    avatar: <BassLogo />,
  },
  {
    avatar: <MinaplastLogo />,
  },

  {
    avatar: <ImamLogo />,
  },
  {
    avatar: <MolduraArteLogo />,
  },
  {
    avatar: <PrintBagLogo />,
  },

  {
    avatar: <LunaLogo />,
  },
  {
    avatar: <PropexLogo />,
  },

  {
    avatar: <RottaLogo />,
  },
  {
    avatar: <RafitecLogo />,
  },
  {
    avatar: <SindusconLogo />,
  },
  {
    avatar: <TecnotokLogo />,
  },
]

export function Clients() {
  return (
    <section className="mb-12 bg-white py-10 xl:mb-32">
      <div className="container mx-auto ">
        <h2 className="mx-auto mb-16 text-center font-bold text-primary sm:text-4xl md:text-5xl">
          Clientes que confiam no meu trabalho
        </h2>

        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="h-[150px]"
        >
          {logoClientsData.map((logoClient, index) => {
            return (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="flex items-center justify-center drop-shadow-lg ">
                  {logoClient.avatar}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
