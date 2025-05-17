"use client";

import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CardPost from "./cardPost";

interface Post {
  title: string;
  banner: { url: string };
  category: string;
  author: string;
  publishedAt: string;
  documentId: string;
  views: number;
}

export default function SwiperPosts({ posts }: { posts: Post[] }) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null); // to access Swiper instance later

  useEffect(() => {
    // Fix: update Swiper navigation after refs are set
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy(); // reset it
      swiperRef.current.navigation.init();    // reinit
      swiperRef.current.navigation.update();  // update
    }
  }, []);
  console.log(posts);

  return (
    <div className="relative h-full">
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-full"
      >
        {posts?.map((post, index) => (
          <SwiperSlide key={index}>
            <CardPost
              title={post.title}
              imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + post?.banner?.url}
              category={post.category}
              author={post.author}
              date={post.publishedAt}
              documentId={post.documentId}

            />
          
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        <button
          ref={prevRef}
          className="bg-white/10 hover:bg-white/20 text-white p-2  transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          ref={nextRef}
          className="bg-white/10 hover:bg-white/20 text-white p-2  transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}