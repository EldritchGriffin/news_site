import React from 'react'
import Markdown from 'react-markdown'
import { getAllPosts } from './(handlers)/requestHandlers'
import Image from 'next/image'
import  Hero  from "./(components)/Hero"
import CardPost from './(components)/cardPost'
import { getAllFromCategory } from './(handlers)/requestHandlers'

export default async function page() {
  const sports = await getAllFromCategory("politics")
  console.log(sports)
  return (
    <main className="bg-white text-gray-900 flex flex-col items-center min-h-screen w-full">
      <Hero />
    </main>
  )
}
