import React from 'react'
import loading from '../assets/loading.gif'

const Loader = () => {
  return (
   <div className='min-h-screen bg-stone-800'>
     <div className='text-center d-flex justify-center pt-25'>
        <img style={{width:"500px"}} src={loading} alt="" />
    </div>
   </div>
  )
}

export default Loader