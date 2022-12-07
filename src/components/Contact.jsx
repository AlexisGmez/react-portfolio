import React from 'react'

const Contact = ({ icon, type, content}) => {
  return (

    <div className="contact">
        <div className='icon__container'>{ icon }</div>
        <h4> { type } </h4>
        <p> { content } </p>
    </div>
  )
}

export default Contact
