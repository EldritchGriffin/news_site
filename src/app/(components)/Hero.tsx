import React from 'react'
import CardPost from './cardPost'
import CardPostChin from './cardPostChin'
import { getAllFromCategory, getAllPosts } from '../(handlers)/requestHandlers'
import Tabs from './tabs'
import Sidebar from './sidebar'
import Trending from './trending'

export default async function Hero() {
  const posts = await getAllPosts()
  console.log(posts);


export default async function Hero() {
  const posts = await getAllPosts()
  const sportsData = await getAllFromCategory('sports')
  const worldData = await getAllFromCategory('world')
  const lifestyleData = await getAllFromCategory('lifestyle')
  const businessData = await getAllFromCategory('business')

  return (
    <>
      {/* <div className="w-full max-w-screen-xl px-4 py-6"> */}
      <div className='w-full max-w-screen-xl'>

        <section className="container mx-auto mb-10 ">
          <h2 className="text-xl font-bold mb-4">Main Stories</h2>
          <div className="flex flex-col lg:flex-row gap-2 gap-y-10">
            <article className="lg:w-[60%] relative h-[450px] text-white ">
              <CardPost
                title={posts.data[0].title}
                imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
                category={posts.data[0].category}
                author={posts.data[0].author}
                date={posts.data[0].publishedAt}
              ></CardPost>
            </article>
            {/* Secondary stories taking remaining 40% width */}
            <div className="lg:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-2 ">
              {[1, 2, 3, 4].map((_, i) => (
                <article key={i} className="  gap-y-2 relative h-[221px]">
                  <CardPost
                    title={posts.data[0].title}
                    imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
                    category={posts.data[0].category}
                    author={posts.data[0].author}
                    date={posts.data[0].publishedAt}
                  ></CardPost>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <h2 className="text-xl font-bold mb-4">Main Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
            {[...Array(4)].map((_, i) => (
              <article key={i} className="relative h-[301px]">
                <CardPostChin
                  title={posts.data[0].title}
                  imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
                  category={posts.data[0].category}
                  documentId={posts.data[0].documentId}
                  author={posts.data[0].author}
                  date={posts.data[0].publishedAt}
                ></CardPostChin>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Tabs
        sportsData={sportsData}
        worldData={worldData}
        lifestyleData={lifestyleData}
        businessData={businessData}
      />
      <Sidebar/>
      <Trending/>
      {/* </div> */}
    </>
  )
}
