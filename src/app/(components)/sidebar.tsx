import React from 'react'
import Bubbletext from './bubble'
import {formatDate}  from '@/app/(utilities)/helperFunctions'

export default function sidebar({ categoryData, nbPost,categoryName }: { categoryData: any, nbPost?: number, categoryName?: string }) {
  console.log('=======11',categoryData)
  

  return (
    <>
    <div className='w-full max-w-screen-xl flex flex-col items-center'>
        <section className="container mx-auto mb-10 ">
        <Bubbletext _text={categoryName|| 'Default Category'} _width='w-[140px]' />
        <div className='flex flex-col lg:flex-row justify-between gap-2 gap-y-10 mt-6 '> 
        {
            categoryData.slice(0, 1).map((post: any, i: number) => (
              <a key={i} href={`/article/${post.documentId}`} className="bg-white shadow h-[480px] w-full block">
                <article className="h-full">
                  <img
                    src={process.env.NEXT_PUBLIC_STRAPI_URL + post.banner.url}
                    alt="Article Image"
                    className="w-full h-[60%] object-cover mb-2"
                  />
                  <div className='p-4'>

                    <p className="text-sm text-red-600 mb-1">{categoryName}</p>
                    <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                    <span className="text-xs text-gray-500">{post.author} / {formatDate(post.publishedAt)}</span>
                  </div>
                </article>
              </a>
            ))}
            <aside className='space-y-4 w-full xl:w-[70%]'>
            {categoryData.slice(1, 5).map((post: any, i: number) => (
              <div key={i} className='bg-white p-3 shadow w-full flex gap-2'>
                <a href={`/article/${post.documentId}`} className="flex gap-2">
                <img
                  src={process.env.NEXT_PUBLIC_STRAPI_URL + post.banner.url}
                  alt="Article Image"
                  className="w-36 h-19 object-cover mb-2"
                />
                <div className='flex flex-col justify-center'>

                <p className="text-sm">{post.title}</p>
                <span className="text-xs text-gray-500">{post.author} / {formatDate(post.publishedAt)}</span>
                </div>
                </a>

              </div>
            ))}
            </aside>
          <div className="bg-gray-300 h-[480px] w-[400px] flex items-center justify-center">
            <span className="text-sm text-gray-700">Ad Placeholder</span>
          </div>
        </div>
      </section>
      <div className="bg-gray-300 h-28 w-full md:w-[700px] flex items-center justify-center px-12 ">
            <span className="text-sm text-gray-700">Ad Placeholder</span>
        </div>
    </div>
    </>
  )
}
