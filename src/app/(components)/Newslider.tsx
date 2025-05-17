// components/NewsSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Bubbletext from './bubble';
import CardPost from './cardPost';



export default function NewsSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bb">
    <div className='flex items-center justify-between mb-4'>
        <Bubbletext _text={'Últimas Noticias'} _width="w-[170px]" />
    </div>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {newsItems.map((item, index) => (
          <SwiperSlide key={index}>
            <CardPost
              title={item.title}
              imageUrl={item.image}
              category={item.category}
              author={item.author}
              date={item.date}
              documentId={`document-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
