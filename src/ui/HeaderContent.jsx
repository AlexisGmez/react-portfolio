import React from 'react'
import Me from '../assets/me.jpg';
const HeaderContent = () => {
  return (
    <section className='header__content'>
      <div className="img__container">
        <img src={Me} alt="" />
        <p className='p__fullStack'>Full Stack<br/>Developer</p>
      </div>
      <div className="header__aboutMe">
        <h1>Soy <br/><span>Alexis Medrano</span></h1>
        <h3>Desarrollador Full Stack Jr</h3>
        <div className="header__social">
            <a href="https://www.linkedin.com/in/alexis-gmez-4431b4218" target='_blank'><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/alexiisgmez/" target='_blank'><i className='bx bxl-instagram-alt'></i></a>
            <a href="https://www.facebook.com/alanalexis.medranogomez/" target='_blank'><i className='bx bxl-facebook'></i></a>
        </div>
      </div>
      <div className="colaboration">
        <h3>Te gustaria contactar conmigo para colaborar?</h3>
        <h4>alanmedrano999@gmail.com</h4>
      </div>  
    </section>
  )
}

export default HeaderContent
