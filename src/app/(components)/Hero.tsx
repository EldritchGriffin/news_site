import React from 'react'
import CardPost from './cardPost'
import { getAllFromCategory, getAllPosts } from '../(handlers)/requestHandlers'
import Tabs from './tabs'
import Sidebar from './sidebar'
import Trending from './trending'
import Bubbletext from './bubble'
import SwiperPosts from './swiperpost'
import Shortcategory from './shortcategory'
import Infinitloop from './infinitloop'
import Opinion from './opinion'

export default async function Hero() {
  const posts = await getAllPosts()
  const politicaData = await getAllFromCategory('Política')
  const economiaData = await getAllFromCategory('Economía')
  const internacionalData = await getAllFromCategory('Internacional')
  const culturaYCienciaData = await getAllFromCategory('Cultura y Ciencia')
  const deportesData = await getAllFromCategory('Deportes')
  const entrevistasData = await getAllFromCategory('Entrevistas')

  const data = [
    {
      title: 'Jahad wld nass khaso li ychwih',
      author: 'Ayoub scayho',
      comments: 123,
      avatar: 'link to image',
    },
    {
      title: 'Jahad wld nass khaso li ychwih',
      author: 'Ayoub scayho',
      comments: 123,
      avatar: 'link to image',
    },
    {
      title: 'Jahad wld nass khaso li ychwih',
      author: 'Ayoub scayho',
      comments: 123,
      avatar: 'link to image',
    },
  ];

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
              {[1, 2, 3, 4].map((_, i) => (
                <article key={i} className="  gap-y-2 relative h-[221px]">
                  <CardPost
                    title={posts[0].title}
                     imageUrl =  {process.env.NEXT_PUBLIC_STRAPI_URL && posts?.[0]?.banner?.url
                    ? process.env.NEXT_PUBLIC_STRAPI_URL + posts[0].banner.url
                    : "/fallback-image.jpg"} // use a fallback image or handle gracefully
                  
                    // imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
                    category={posts[0].category}
                    author={posts[0].author}
                    date={posts[0].publishedAt}
                  ></CardPost>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Tabs
        politicaData={politicaData}
        economiaData={economiaData}
        internacionalData={internacionalData}
      />
      <Sidebar/>
      <Trending/>
      <div className='w-full max-w-screen-xl'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Shortcategory
       categoryData={deportesData}
        nbPost={2}
        categoryName='Deportes'
        />
      <Shortcategory
       categoryData={deportesData}
        nbPost={2}
        categoryName='Entrevistas'
        />
        </div>
      </div>
      <div className='w-full max-w-screen-xl'>
        <Bubbletext _text='Opinion' _width='w-[140px]' />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 mt-6 pb-10">
        {data.map((item, idx) => (
          <Opinion key={idx} {...item} />
        ))}
      </div>
      </div>
      <Sidebar/>
      <div className='w-full max-w-screen-xl'>
      <Shortcategory
       categoryData={deportesData}
        nbPost={4}
        categoryName='Deportes'
        />
      </div>
      {/* </div> */}
    </>
  )
}
