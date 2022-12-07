import React from 'react'
import HeaderContent from './HeaderContent'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header' id='header'>
      <Navbar />
      <HeaderContent />
    </div>
  )
}

export default Header
