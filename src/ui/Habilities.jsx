import React from 'react'
import Hability from '../components/Hability'
import './styles/Habilities.scss'

const habilities = [
  {
    name:'Java Script',
    image:'/habilities/javaScript.png'
  },
  {
    name:'React Js',
    image:'/habilities/react.png'
  },
  {
    name:'Bootstrap',
    image:'/habilities/bootstrap.jpg'
  },
  {
    name:'Sass',
    image:'/habilities/sass.png'
  },
  {
    name:'Redux',
    image:'/habilities/redux.jpg'
  },
  {
    name:'Tailwind',
    image:'/habilities/tailwind.png'
  },
  {
    name:'React Native',
    image:'/habilities/react-native.png'
  }

]
const Habilities = () => {

  return (
    <div className='habilities' id='habilities'>
      
      <h2>Mis habilidades</h2>
      <div className='habilitiesContent'>
        {
          habilities.map(hability=><Hability key={hability.name} hability={hability} />)
        }
      </div>
        
    </div>
  )
}

export default Habilities
