import React from 'react'
// import Navbar from './navbar/navbar'
import FullNavbar from './navbar/fullNavbar'
import CompleteNavbar from './navbar/CompleteNavbar'

export default function page() {
  return (
    <div className='h-full'>
      {/* <Navbar></Navbar> */}
      <CompleteNavbar/>
    </div>
  )
}
