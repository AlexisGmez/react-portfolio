import React from 'react'
import AboutMe from './AboutMe'
import Contacts from './Contacts'
import Habilities from './Habilities'
import Portfolio from './Portfolio'
import Studies from './Studies'

const Main = () => {
  return (
    <div className='main'>
      <AboutMe />
      <Studies />
      <Habilities />
      <Portfolio />
      <Contacts /> 
    </div>
  )
}

export default Main
