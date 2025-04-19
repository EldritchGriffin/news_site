
import Footer from "./footer/page";
import React from 'react'
// import Navbar from './navbar/navbar'
import FullNavbar from './navbar/fullNavbar'
import CompleteNavbar from './navbar/CompleteNavbar'
import Markdown from 'react-markdown'
import { getAllPosts } from './(handlers)/requestHandlers'
import  Hero  from "./(components)/Hero"
import CardPost from './(components)/cardPost'
import { getAllFromCategory } from './(handlers)/requestHandlers'

export default async function page() {
  return (
    <main className="bg-white text-gray-900 flex flex-col items-center w-full px-4">
      <Hero />
    </main>
  )
}
