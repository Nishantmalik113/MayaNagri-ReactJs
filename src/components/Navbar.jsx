import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <section className='absolute top-10 px-10 w-full grid grid-cols-7 items-center justify-center'>
        <Link to="/search" className='Link fa-solid fa-magnifying-glass'></Link>
        <Link to="/" className='Link'>Home</Link>
        <Link to="/shop" className='Link'>Shop</Link>
        <Link to="/" className='Link text-[3rem]'><h1>Ma<span className='text-white'>ya</span></h1></Link>
        <Link to="/accessories" className='Link text-white'>Accessories</Link>
        <Link to="/cart" className='Link fa-solid fa-shopping-basket text-white'></Link>
        <Link to="/login" className="Link fa-solid fa-user border-1 border-white w-[fit-content] py-[12px] px-[24px] rounded-2xl bg-white text-sm shadow-2xl hover:bg-transparent hover:shadow-sm hover:text-white"><p className='font-normal ml-2'>Login</p></Link>
    </section>
  )
}
