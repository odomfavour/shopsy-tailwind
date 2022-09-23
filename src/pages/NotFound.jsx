import React from 'react'
import errorImg from '../images/error.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='w-1/3'>
      <img src={errorImg} alt="" className='w-full'/>
      <div className="text-center">
        <Link to='/'>Home</Link>
      </div>
      </div>

    </section>
  )
}

export default NotFound