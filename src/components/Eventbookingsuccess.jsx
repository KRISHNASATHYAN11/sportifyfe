import React from 'react'
import { Link } from 'react-router-dom'


const Eventbookingsuccess = () => {
  return (
    <>
    <h2 style={{ color: "green" }} className="font-bold text-center mt-3">
        Event Booking Success
      </h2>
      <h3 className='text-center mt-2'>Your Booking is successfull.<Link className='text-center' to={'/profile'}>Go to Profile</Link></h3>
      
      <div className="flex text-center justify-center">
        <img
          className="text-center"
          src="https://miro.medium.com/1*Tt1d7z553M0-vKfo0N9Krw.gif"
          alt=""
        />
      </div>

    </>
  )
}

export default Eventbookingsuccess