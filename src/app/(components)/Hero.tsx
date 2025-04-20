import React from 'react'
import CardPost from './cardPost'
import { getAllFromCategory, getAllPosts } from '../(handlers)/requestHandlers'
import Tabs from './tabs'
import Sidebar from './sidebar'
import Trending from './trending'
import Bubbletext from './bubble'
import SwiperPosts from './swiperpost'
import Shortcategory from './shortcategory'

export default async function Hero() {
  const posts = await getAllPosts()
  const politicaData = await getAllFromCategory('Política')
  const economiaData = await getAllFromCategory('Economía')
  const internacionalData = await getAllFromCategory('Internacional')
  const culturaYCienciaData = await getAllFromCategory('Cultura y Ciencia')
  const deportesData = await getAllFromCategory('Deportes')
  const entrevistasData = await getAllFromCategory('Entrevistas')

  return (
    <>
      {/* <div className="w-full max-w-screen-xl px-4 py-6"> */}
      <div className='w-full max-w-screen-xl'>

        <section className="container mx-auto mb-10 mt-10 ">
          <Bubbletext _text='Main Stories' _width='w-[140px]' />
          <div className="flex flex-col lg:flex-row gap-2 gap-y-10 mt-6">
          <article className="lg:w-[60%] relative h-[450px] text-white">
          <SwiperPosts posts={posts.data} />
          </article>
            {/* Secondary stories taking remaining 40% width */}
            <div className="lg:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-2 ">
              {[1, 2, 3, 4].map((_, i) => (
                <article key={i} className="  gap-y-2 relative h-[221px]">
                  <CardPost
                    title={posts.data[0].title}
                     imageUrl =  {process.env.NEXT_PUBLIC_STRAPI_URL && posts?.data?.[0]?.banner?.url
                    ? process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url
                    : "/fallback-image.jpg"} // use a fallback image or handle gracefully
                  
                    // imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
                    category={posts.data[0].category}
                    author={posts.data[0].author}
                    date={posts.data[0].publishedAt}
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
        culturaYCienciaData={culturaYCienciaData}
      />
      <Sidebar/>
      <Trending/>
      <div className='w-full max-w-screen-xl'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Shortcategory categoryData={deportesData} />
      <Shortcategory categoryData={deportesData} />
        </div>
      </div>
      <Sidebar/>
      <Tabs
        politicaData={politicaData}
        economiaData={economiaData}
        internacionalData={internacionalData}
        culturaYCienciaData={culturaYCienciaData}
      />
      {/* </div> */}
    </>
  )
}
