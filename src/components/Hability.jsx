import React from 'react'

const Hability = ({hability, porcent}) => {
  return (

    <>
        <h4>{hability} {porcent}%</h4>
        <div className='hability' style={{width:`${porcent}%`}}>
        </div>
    </>
    
  )
}

export default Hability
