import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { styleText } from '@/app/(utilities)/helperFunctions';
export default function NavItems(props : {title: string, content: string, banner: string, Category: string}) {

  return (
      <div className="cursor-pointer ">
              <div className="flex flex-col w-full pl-2 ">
                <img src={props.banner} alt="Banner" className="w-full h-32 object-cover pb-2 pt-2" />
                <span className="text-xs p-2 text-white bg-[#d42a23] w-fit">{props.Category}</span>
                <h2 className="text-lg text-black mt-4 p-t-4 font-bold">{styleText(props.title, 100)}</h2>
              </div>
    </div>
  )
}
