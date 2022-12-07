import React from 'react'
import HeaderContent from './HeaderContent'
import Navbar from './Navbar'

const Header = ( { setDarkMode,darkMode } ) => {
  return (
    <div className='header' id='header'>
      <Navbar  
        setDarkMode={ setDarkMode }
        darkMode={darkMode} 
      />
      <HeaderContent />
    </div>
  )
}

export default Header
