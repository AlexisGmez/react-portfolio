import React from 'react'
import Hability from '../components/Hability'

const Habilities = () => {
  return (
    <div className='habilities' id='habilities'>
      <h2>Mis habilidades</h2>
      
      <Hability hability='MongoDb' porcent={80} />  
      <Hability hability='Express' porcent={70} />
      <Hability hability='React' porcent={80} />  
      <Hability hability='NodeJs' porcent={70} />  
        
    </div>
  )
}

export default Habilities
