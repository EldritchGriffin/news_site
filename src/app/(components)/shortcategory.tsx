import React from 'react'
import Bubbletext from './bubble'

export default function shortcategory({ deportesData, entrevistasData, economiaData, culturaYCienciaData }: { deportesData: any; entrevistasData: any; economiaData: any; culturaYCienciaData: any; }) {

  return (
    <>
      <section className="max-w-screen-xl mx-auto mt-10 mb-20">
        <div className="flex gap-6 flex-col lg:flex-row justify-between">
          <Bubbletext _text="" _width="w-[140px]" />
          <button className="text-sm text-gray-500 hover:text-gray-800">
            View All
            </button>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-y-12 gap-2 mt-6'>
            {deportesData.data.slice(0, 2).map((post: any, i: number) => (
                <article key={i} className="relative">
                    <img
                        className="w-full h-[200px] object-cover"
                        src={process.env.NEXT_PUBLIC_STRAPI_URL + post.banner.url}
                        alt="Post Thumbnail"
                    />
                    <p className="bg-black p-1 text-white w-fit text-sm mt-2">
                        {post.category}
                    </p>
                    <section>
                        <p className="word-wrap text-sm">
                            {post.title}
                        </p>
                    </section>
                </article>
            ))}
        </div>
        </div>
      </section>
    </>
  );
}
