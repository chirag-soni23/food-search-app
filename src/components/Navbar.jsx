import React from 'react'

function Navbar() {
  return (
    <div className='main shadow-md lg:flex md:flex flex-wrap justify-between  items-center p-4 bg-slate-300'>
        <div className='left'>
            <h1 className='text-2xl font-bold text-center'>Food APP</h1>
        </div>
        <div className='right'>
            <ul className='flex space-x-4 justify-center'>
                <li className='cursor-pointer text-2xl'>Home</li>
                <li className='cursor-pointer text-2xl'>About</li>
                <li className='cursor-pointer text-2xl'>Contact</li>
                <li className='cursor-pointer text-2xl'>Services</li>
            </ul>
        </div>





    </div>
  )
}

export default Navbar