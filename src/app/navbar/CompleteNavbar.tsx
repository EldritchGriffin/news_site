'use client'
import React from 'react'
import Navbar from './navbar'
import FullNavbar from './fullNavbar'

export default function CompleteNavbar() {
  return (
    <>
    <div className="hidden nav:block h-full">
        <FullNavbar />
      </div>
      <div className="block nav:hidden h-full">
        <Navbar />
      </div>
    </>
  )
}
