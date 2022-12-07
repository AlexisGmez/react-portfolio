import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const screenW = () => screen.width < 776 && setShowMenu(!showMenu);
  
  return (
    <nav className='navbar'>
      <ul className='nav__list' style={{left:`${showMenu ? '0' : '-100%'}`}}>
        <a href="#header" onClick={ ()=>screenW() } ><li className='nav__item'>Home</li></a>
        <a href="#aboutMe" onClick={ ()=>screenW() } ><li className='nav__item'>Acerca de mi</li></a>
        <a href="#habilities" onClick={ ()=>screenW() } ><li className='nav__item'>Mis habilidades</li></a>
        {/* <a href="#experience" onClick={ ()=>screenW() } ><li className='nav__item'>Experiencia</li></a> */}
        <a href="#portfolio" onClick={ ()=>screenW() }><li className='nav__item'>Mi portafolio</li></a>
        <a href="#contacts" onClick={ ()=>screenW() } ><li className='nav__item'>Contacto</li></a>
      </ul>
      <div className='menuIcon__container'><i className='bx bx-menu' onClick={()=>setShowMenu(!showMenu)}></i></div>
    </nav>
  )
}

export default Navbar
