import React from 'react'
import CardPost from './cardPost'
import { getAllPosts } from '../(handlers)/requestHandlers'
export default async function Hero() {
  const posts = await getAllPosts()
  return (
    <>
      <div className="w-full max-w-screen-xl">

        <section className="container mx-auto px-4 py-6">
          <h2 className="text-xl font-bold mb-4">Main Stories</h2>
          <div className="flex flex-col lg:flex-row gap-2">
            <article className="lg:w-[60%] relative h-96 bg-black text-white flex flex-col justify-end">
              <CardPost
                title={posts.data[0].title}
                imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
                category={posts.data[0].Category}
                author={posts.data[0].author}
                date={posts.data[0].publishedAt}
              ></CardPost>
            </article>
            {/* Secondary stories taking remaining 40% width */}
            <div className="lg:w-2/5 grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((_, i) => (
                <article key={i} className="bg-black">
                  <CardPost
                    title={posts.data[0].title}
                    imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
                    category={posts.data[0].Category}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <article key={i} className="aspect-square bg-black shadow flex flex-col justify-end">
                <CardPost
                  title={posts.data[0].title}
                  imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
                  category={posts.data[0].Category}
                  author={posts.data[0].author}
                  date={posts.data[0].publishedAt}
                ></CardPost>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
