import React from 'react'
import Bubbletext from './bubble'
import CardPostChin from './cardPostChin';

export default function shortcategory({ categoryData }: { categoryData: any}) {

  return (
    <>
      <section className="container mx-auto mt-10 mb-20">
        <div className="flex gap-6 flex-col  justify-between">
          <Bubbletext _text="zabi" _width="w-[140px]" />
          <button className="text-sm text-gray-500 text-end hover:text-gray-800">
            View All
            </button>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-y-12 gap-2 mt-6'>
            {categoryData.data.slice(0, 2).map((post: any, i: number) => (
            <article key={i} className='relative'>
                <CardPostChin
                title={post.title}
                imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + post.banner.url}
                category={post.category}
                documentId={post.documentId}
                author={post.author}
                date={post.publishedAt}
                />
            </article>
            ))}
        </div>
        </div>
      </section>
    </>
  );
}
