import React from 'react'
import Markdown from 'react-markdown'
import { getAllPosts } from './(handlers)/requestHandlers'
import Image from 'next/image'
import  Hero  from "./(components)/Hero"
import CardPost from './(components)/cardPost'

export default async function page() {
  // const posts = await getAllPosts()
  // console.log(posts)
  return (
    <main className="bg-white text-gray-900 flex flex-col items-center min-h-screen w-full">
      <Hero />
    </main>
  )
}
