import React from 'react'
import FullNavbarWrapper from './fullnavbarwrapper'
import NavbarWrapper from './navbarWrapper'

export default function CompleteNavbar() {
  return (
    <>
    <div className="hidden nav:block h-full">
        <FullNavbarWrapper />
      </div>
      <div className="block nav:hidden h-full">
        <NavbarWrapper />
      </div>
    </>
  )
}
