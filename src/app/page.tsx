import Footer from "./footer/page";
import React from 'react'
import Markdown from 'react-markdown'
import { getAllPosts } from './(handlers)/requestHandlers'
import  Hero  from "./(components)/Hero"
import CardPost from './(components)/cardPost'
import { getAllFromCategory } from './(handlers)/requestHandlers'

export default async function page() {
  const sports = await getAllFromCategory("politics")
  console.log(sports)
  return (
    <main className="bg-white text-gray-900 flex flex-col items-center w-full">
      <Hero />
    </main>
  )
}
