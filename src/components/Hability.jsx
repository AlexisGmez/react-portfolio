import React from 'react'
import './styles/Hability.scss';

const Hability = ({hability}) => {
  return (

    <article className='habilityContainer' >
        <div className='imageContainer' style={{backgroundImage:`url(${hability.image})`}}>
          
        </div>
        <h4>{hability.name}</h4>
    </article>
    
  )
}

export default Hability
