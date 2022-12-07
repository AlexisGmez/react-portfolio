import React from 'react'

const Study = ({ img, title, period, acquired}) => {
  return (
    <div className='study'>
      <div className="imgStudy__container">
        <img src={img} alt="university" />
      </div>
      <h4>{ title }</h4>
      <p>{period}</p>
      <h5>{ acquired }</h5>
    </div>
  )
}

export default Study
