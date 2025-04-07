import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className='grid grid-cols-2 px-[106px] my-[53px] items-center '>
      <div className='flex flex-col items-center justify-center gap-1 border-r-1 border-black'>
      <h2 className='heading  text-[70px] h-[90px] '>Mayanagri</h2>
        <div className='flex items-center justify-between w-[500px]'>
          <img src="/insta.png" alt="" className='max-w-[50px]'/>
          <img src="/twitter.png" alt="" className='max-w-[50px]'/>
          <img src="/linkedin.png" alt="" className='max-w-[50px]'/>
          <img src="/facebook.png" alt="" className='max-w-[50px]'/>
        </div>
      </div>
      <div className='flex justify-around items-center'>
        <div className='flex flex-col gap-1'>
          <p className='font-bold mb-5'>Services</p>
          <p className='text-zinc-600 '>Customised Tee</p>
          <p className='text-zinc-600 '>Cultural events</p>
          <p className='text-zinc-600 '>Folk art promotion</p>
        </div>
        <div>
        <p className='font-bold mb-5 gap-1'>Contact Us</p>
        <p className='text-zinc-600'>abcd@gmail.com</p>
        <p className='text-zinc-600'>+91 7985967890</p>
        <p className='text-zinc-600'>Haridwar, India</p>
        </div>
      </div>
    </section>
  )
}
