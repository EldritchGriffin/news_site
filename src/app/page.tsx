import React from 'react'
import {getOpinionsPaged } from './(handlers)/requestHandlers'
import  Hero  from "./(components)/Hero"

export default async function page() {
  const opinions = await getOpinionsPaged(5, 1);
  console.log("these are the opinions.", opinions);
  return (
    <div className="bg-white text-gray-900 flex flex-col items-center w-full px-4 ">
      <Hero />
    </div>
  )
}
