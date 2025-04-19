import React from 'react'
import Navbar from './navbar'
import FullNavbar from './fullNavbar'

export default function CompleteNavbar() {
  return (
    <>
    <div className="hidden md:block h-full">
        <FullNavbar />
      </div>
      <div className="block md:hidden h-full">
        <Navbar />
      </div>
    </>
  )
}
