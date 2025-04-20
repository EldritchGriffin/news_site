import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { styleText } from '@/app/(utilities)/helperFunctions';
export default function NavItems(props : {title: string, content: string, banner: string, Category: string}) {

  return (
      <div className="cursor-pointer p-2 ">
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="w-[450px] "
            >
            <SwiperSlide>
              <div className="w-[450px]">
                <img src={props.banner} alt="Banner" className="w-full h-32 object-cover " />
                <h2 className="text-lg font-bold">{styleText(props.title)}</h2>
                <p className="text-sm text-gray-600">{styleText(props.content)}</p>
                <span className="text-xs text-gray-500">{props.Category}</span>
              </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
