import React from 'react'
import { Link } from 'react-router-dom'
import appStore from '../images/app-store.png'
import playStore from '../images/play-store.png'

const Footer = () => {
  return (
    <footer>
        <div className="w-11/12 mx-auto">
            <div className="flex flex-col md:flex-row py-10 gap-5">
                <div className='md:w-2/3 w-full'>
                    <h4 className="text3xl mb-5 font-bold">About Shopsy</h4>
                    <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ea, quam nisi tempore aliquam similique nam tenetur dolore illo quis sit animi voluptas consectetur saepe, est blanditiis mollitia unde ad.</p>
                </div>
                <div className="lg:w-1/3 md:w-1/3 w-1/2">
                <h4 className="text3xl mb-5 font-bold">Download App</h4>
                    <div className='mb-3'>
                        <img src={appStore} alt="" />
                    </div>
                    <div>
                        <img src={playStore} alt="" />
                    </div>
                </div>
                <div className='lg:w-1/3 md:w-1/3 w-1/2'>
                    <h4 className="text3xl mb-5 font-bold">Quick Links</h4>
                    <ul>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Shop</Link></li>
                        <li><Link to="#">Accounts</Link></li>
                        <li><Link to="#">Login/Signup</Link></li>
                    </ul>
                </div>
                <div className='md:w-1/3 w-full'>
                    <h4 className="text3xl mb-5 font-bold">Support</h4>
                    <p className='text-base'>Lorem ipsum dolor sit amet</p>
                    <p className='text-base'>ogochukwuodom@gmmail.com</p>
                    <p className='text-base'>08067488682</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer