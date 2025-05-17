import React from 'react'
import CardPost from './cardPost'
import { getAllFromCategory, getAllPosts, getOpinionsPaged } from '../(handlers)/requestHandlers'
import Tabs from './tabs'
import Sidebar from './sidebar'
import Trending from './trending'
import Bubbletext from './bubble'
import SwiperPosts from './swiperpost'
import Shortcategory from './shortcategory'
import Infinitloop from './infinitloop'
import Opinion from './opinion'
import Link from 'next/link'
import {formatDate}  from '@/app/(utilities)/helperFunctions'

export default async function Hero() {
  const posts = await getAllPosts()
  const politicaData = await getAllFromCategory('Política')
  const economiaData = await getAllFromCategory('Economía')
  const internacionalData = await getAllFromCategory('Internacional')
  const culturaYCienciaData = await getAllFromCategory('Cultura y Ciencia')
  const deportesData = await getAllFromCategory('Deportes')
  const entrevistasData = await getAllFromCategory('Entrevistas')
  const opinionData = await getOpinionsPaged(3, 1)

  return (
    <>
      {/* <div className="w-full max-w-screen-xl px-4 py-6"> */}
      <div className='w-full max-w-screen-xl '>
        <div className='flex  w-full mt-10'>
          <div className='flex items-center justify-center bg-red-600 w-[200px]'>

          <p className=' text-white'>Breaking News</p>
          </div>
              <Infinitloop/>
        </div>

        <section className="container mx-auto mb-10 mt-10 ">
          <Bubbletext _text='Main Stories' _width='w-[140px]' />
          <div className="flex flex-col lg:flex-row gap-2 gap-y-10 mt-6">
          <article className="lg:w-[60%] relative h-[450px] text-white">
          <SwiperPosts posts={posts as any} />
          </article>
            {/* Secondary stories taking remaining 40% width */}
            <div className="lg:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-2 ">
              {posts.map((_, i) => (
                i > 0 && i < 5 && (
                  // Only render the first 4 posts after the main story
                  <article key={i} className="relative h-[221px]">
                    <CardPost
                      title={posts[i].title}
                      imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts[i].banner.url}
                      category={posts[i].category}
                      author={posts[i].author}
                      date= {formatDate(posts[i].publishedAt)}
                      documentId={posts[i].documentId}
                    ></CardPost>
                  </article>
                )
              ))}
            </div>
          </div>
        </section>
      </div>
      <Tabs
        politicaData={politicaData}
      />
      <Sidebar
        categoryData={economiaData}
        nbPost={2}
        categoryName='Economía'
      />
      <Trending/>
      <div className='w-full max-w-screen-xl'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Shortcategory
       categoryData={deportesData}
        nbPost={2}
        categoryName='Deportes'
        />
      <Shortcategory
       categoryData={entrevistasData}
        nbPost={2}
        categoryName='Entrevistas'
        />
        </div>
      </div>
      <div className='w-full max-w-screen-xl'>
      <div className='flex items-center justify-between'>
          <Bubbletext _text={'Carta al director'} _width="w-[170px] " />
            <Link className="text-sm text-gray-500 text-end hover:text-gray-800 " href={`/opinions`}>
                Ver más
            </Link>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 mt-6 pb-10">
        {opinionData?.map((item, idx) => (
          <Opinion key={idx} {...item} />
        ))}
      </div>
      </div>
      <Sidebar 
        categoryData={internacionalData}
        nbPost={2}
        categoryName='Internacional'
      />
      <div className='w-full max-w-screen-xl'>
      <Shortcategory
       categoryData={culturaYCienciaData}
        nbPost={4}
        categoryName='Cultura y Ciencia'
        />
      </div>
      {/* </div> */}
    </>
  )
}
