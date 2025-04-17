import React from 'react'
import Markdown from 'react-markdown'
import { getAllPosts } from './(handlers)/requestHandlers'
import Image from 'next/image'
import CardPost from './(components)/cardPost'

export default async function page() {
  const posts = await getAllPosts()
  console.log(posts)
  return (
    <main>
      <div className='h-screen w-screen border-amber-600 border-8'>
        <div className='m-10 h-96 w-xl'>
          <CardPost
            title={posts.data[0].title}
            imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
            category={posts.data[0].Category}
            author={posts.data[0].author}
            date={posts.data[0].publishedAt}
          ></CardPost>
        </div>
        <div className='m-10 h-72 w-96'>
          <CardPost
            title={posts.data[0].title}
            imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + posts.data[0].banner.url}
            category={posts.data[0].Category}
            author={posts.data[0].author}
            date={posts.data[0].publishedAt}
          ></CardPost>
        </div>
      </div>
    </main>
  )
}
