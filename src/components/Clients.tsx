'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Vantec } from '@/assets/logoClient/Vantec'

const logoClientsData = [
  {
    avatar: <Vantec />,
  },
  {
    avatar: <Vantec />,
  },
  {
    avatar: <Vantec />,
  },
  {
    avatar: <Vantec />,
  },
]

export function Clients() {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-16 text-center font-bold text-primary sm:text-4xl md:text-5xl">
          Clientes que confiam no meu trabalho
        </h2>

        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="h-[150px]"
        >
          {logoClientsData.map((logoClient, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center ">
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
