import React from 'react'
import Tecnologico from '../assets/tecnologico.png';
import Academlo from '../assets/academlo.png';
import Study from '../components/Study';
const Studies = () => {
  return (
    <div className='studies'>
      <h2>Estudios</h2>

      <div className="studies__container">
        <Study 
          img={Tecnologico} 
          title='Tecnologico de Uruapan'
          period='2015-2020'
          acquired= 'Ingenieria en Sistemas'  
        />
        <Study 
          img={Academlo} 
          title='Academlo'
          period='2022-2023'
          acquired= 'Full Stack Developer'  
        />
      </div>
    </div>
  )
}

export default Studies
