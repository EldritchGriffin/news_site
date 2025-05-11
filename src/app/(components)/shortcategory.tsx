import React from 'react'
import Bubbletext from './bubble'
import CardPostChin from './cardPostChin';
import Link from 'next/link';

export default function shortcategory({ categoryData, nbPost,categoryName }: { categoryData: any, nbPost?: number, categoryName?: string }) {

  return (
    <>
      <section className="container mx-auto mt-10 mb-20">
        <div className="flex gap-6 flex-col  justify-between">
          <Bubbletext _text={categoryName || 'Default Category'} _width="w-[140px]" />
          {/* <button className="text-sm text-gray-500 text-end hover:text-gray-800">
            View All
            </button> */}
            <Link className="text-sm text-gray-500 text-end hover:text-gray-800" href={`/categories/${categoryName}`}>
                Ver más
            </Link>
            {nbPost && nbPost == 2 ? <div className='grid grid-cols-1 md:grid-cols-2 md:gap-y-12 gap-2 mt-6'>
                {categoryData.slice(0, nbPost).map((post: any, i: number) => (
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
            </div> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-12 gap-2 mt-6'>
            {categoryData.slice(0,4).map((post: any, i: number) => (
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
            </div>}
        </div>
      </section>
    </>
  );
}
