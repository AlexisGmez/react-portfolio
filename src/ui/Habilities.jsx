import React from 'react'
import Hability from '../components/Hability'

const Habilities = () => {
  return (
    <div className='habilities' id='habilities'>
      <h2>Mis habilidades</h2>
      
      <Hability hability='Java Script' porcent={80} />  
      <Hability hability='React js' porcent={70} />
      <Hability hability='Bootstrap' porcent={80} />  
      <Hability hability='Sass' porcent={70} />  
      <Hability hability='Redux' porcent={60} />  
        
    </div>
  )
}

export default Habilities
