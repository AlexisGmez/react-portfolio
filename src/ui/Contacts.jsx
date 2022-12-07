import React from 'react'
import Contact from '../components/Contact'

const Contacts = () => {
  return (
    <div className='contacts'>
      <h2>Contact</h2>

       <div className="contacts__container" id='contacts'>
        <Contact icon={<i className='bx bxs-phone'></i>} type='Phone number' content='+52 452-176-10-97' />     
        <Contact icon={<i className='bx bxs-envelope' ></i>} type='E-mail' content='alanmedrano999@gmail.com' />     
       </div>
    </div>
  )
}

export default Contacts
