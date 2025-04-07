import React, { useState } from 'react'
import { collection, Why } from '../utlis'

export default function Hero() {

  var x;

  function rating(star){
    var final = '';
    for(var i=0;i<star;i++){
      var stars = '⭐'
      final = final+stars
    }
    return final
  }

  const [reason, setReason] = useState(0)

  return (
    <div className='flex flex-col'>
      <section className='flex flex-col px-[53px] overflow-x-hidden justify-center min-h-screen bg-linear-to-r from-white from-50% to-[#9C6BA6] to-50%'>
          <h1 className='text-[300px] relative text-center text-[#35083D]'>En Coupe</h1>
          <p className='w-[540px] absolute top-120 text-[#9C6BA6]'>Bringing you the most exotic, and cultural clothing at your service. Revival of the way of life, through the eyes, of the youth, and attire of a desi. Updating fashion trends through resurfacing a forgotten gem of our nation.
            <button className='btn mt-[33px] px-[30px] py-[20px] shadow-xl hover:shadow-sm font-semibold text-white bg-[#9C6BA6]'>Shop now</button>
          </p>
          <div className='absolute flex flex-col items-center justify-center bottom-0 w-[85%]'>
            <img src="/Hero_img.png" alt="" className=' w-[471px] items-center' />
          </div>
          <div className='flex flex-col gap-5 w-[fit-content] absolute bottom-5 right-50'>
            <button className='flex gap-2 text-sm bg-[rgba(255,255,255,0.4)] p-[5px] relative'>
              <div>
                <img src="/Hero-kurta.png" alt="" className='max-w-[60px]'/>
              </div>
              <div className='flex flex-col items-start'>
                <p>Plain Kurta</p>
                <p>Rs. 100</p>
                <p>⭐⭐⭐⭐</p>
              </div>
              <div className='absolute bottom-2 right-2'><i className='fa-solid fa-circle-plus text-white text-3xl'></i></div>
            </button>
            <button className='flex gap-2 text-sm bg-[rgba(255,255,255,0.4)] p-[5px]'>
              <div>
                <img src="/Hero-lehanga.png" alt="" className='max-w-[60px]'/>
              </div>
              <div className='flex flex-col items-start'>
                <p>Red Fishtail Lehenga</p>
                <p>Rs. 9500</p>
                <p>⭐⭐⭐⭐</p>
              </div>
              <div className='absolute bottom-2 right-2'><i className='fa-solid fa-circle-plus text-white text-3xl'></i></div>
            </button>
          </div>
      </section>
      <section className='flex px-[53px] justify-between max-h-[80px] bg-[#1A011E]'>
        <div className=''><img src="/Manyawar.png" alt="" className='h-[80px]' /></div>
        <div className=''><img src="/Raymond.png" alt="" className='h-[80px]'/></div>
        <div className=''><img src="/Sabhyata.png" alt="" className='h-[80px]'/></div>
      </section>
      <section className='flex flex-col items-center px-[53px] overflow-y-hidden overflow-x-hidden min-h-screen bg-white relative'> 
        <div className='absolute z-[1] max-w-[400px] left-10 top-15'>
          <img src="/bg-grid.png" alt="" />
        </div>
        <div className='absolute z-[1] max-w-[400px] top-[-4.5rem]'>
          <img src="/bg-grid.png" alt="" />
        </div>
        <div className='absolute z-[1] max-w-[400px] right-10 top-15'>
          <img src="/bg-grid.png" alt="" />
        </div>
        <div className='absolute z-[1] max-w-[400px] bottom-[-116px] left-48'>
          <img src="/bg-grid.png" alt="" />
        </div>
        <div className='absolute z-[1] max-w-[400px] bottom-[-116px] right-48'>
          <img src="/bg-grid.png" alt="" />
        </div>
        <img src="/Vector.png" alt="" className='max-w-[30px] mt-[40px] z-2' />
        <h2 className='heading mt-3 text-[70px] h-[90px] z-2'>Product Highlights</h2>
        <p className='text-[#9C6BA6] z-2'>Here are some of the designs available to cater for you and your wants</p>
        <div className='z-2 overflow-y-hidden flex items-center gap-5 pt-15'>
          <div className='PH overflow-hidden relative h-[fit-content]'>
            <img src="PH-1.png" alt="" className='max-w-[220px]' />
            <img src="PH-1-Model.png" alt="" className='absolute model bottom-0 max-w-[190px]' />
          </div>
          <div className='PH  overflow-hidden relative h-[fit-content]'>
            <img src="PH-2.png" alt="" className='max-w-[270px]' />
            <img src="PH-2-Model.png" alt="" className='absolute model bottom-0 max-w-[260px]' />
          </div>
          <div className='PH relative'>
            <img src="PH-3.png" alt="" className='max-w-[320px]' />
            <img src="PH-3-Model.png" alt="" className='absolute model bottom-0 left-5' />
          </div>
          <div className='PH overflow-hidden relative h-[fit-content]'>
            <img src="PH-4.png" alt="" className='max-w-[270px]' />
            <img src="PH-4-Model.png" alt="" className='absolute model bottom-0' />
          </div>
          <div className='PH overflow-hidden relative h-[fit-content]'>
            <img src="PH-5.png" alt="" className='max-w-[220px]' />
            <img src="PH-5-Model.png" alt="" className='absolute model bottom-0' />
          </div>
        </div>
      </section>
      <section className='flex flex-col px-[53px] overflow-y-hidden overflow-x-hidden min-h-screen bg-white relative'>
      <div className='absolute z-[1] max-w-[400px] left-10 top-25'>
          <img src="/bg-grid.png" alt="" />
        </div>
        <div className='absolute z-[1] max-w-[400px] bottom-[-116px] right-10'>
          <img src="/bg-grid.png" alt="" />
        </div>
        <div className='z-2 grid grid-cols-2 justify-center items-center'>
          <div className='w-[fit-content]'>
            <div className='flex flex-col items-end'>
              <img src="/Vector-2.png" alt="" className=' max-w-[30px] mt-[40px] z-2' />
            </div>
              <h2 className='heading text-[70px] h-[90px] z-2'>New Collection</h2>
          </div>
          <div className='flex flex-col items-end justify-end h-[80%]'>
            <button className='w-[fit-content] py-[15px] px-5 rounded-[5rem] border-1 border-zinc-400 text-zinc-400 hover:text-black hover:cursor-pointer'>All collection <i className='fa-solid fa-arrow-right'/></button>
          </div>
        </div>
        <div className='z-2 mt-[43px] py-10 grid grid-cols-4'>
        {collection.map((option,optionIndex)=>{
          return(
            <button className='collection flex flex-col max-w-[300px] items-center justify-center'>
              <img src={option.img} alt="" />
              <div className='grid grid-cols-4 justify-between items-end w-full'>
                <div className='col-span-3 flex flex-col items-start w-full px-2 gap-2'>
                  <h4>{option.name}</h4>
                  <p>Rs. {option.cost}</p>
                  {x = rating(option.rating)}
                </div>
                <button className='fa-solid fa-circle-plus text-4xl hover:cursor-pointer'></button>
              </div>
            </button>
          )
        })}
        </div>
      </section>
      <section className='flex flex-col items-center px-[53px] overflow-y-hidden overflow-x-hidden min-h-screen bg-[#262626]'>
      <h2 className='heading mt-[53px] text-[70px] h-[90px] text-white z-2'>Why Choose Mayanagri ?</h2>
      <div className='flex justify-center gap-50 items-center my-[53px] px-[53px] text-white w-full'>
        <div className='Why flex flex-col items-start justify-center font-light'>
          {Why.map((option, optionIndex)=>{
            return(
              <div className='flex flex-col gap-1 border-b-1 border-white pb-5 mb-5 w-[650px]'>
                <div className='text-lg flex items-center justify-between'>
                  <h3>{option.Heading}</h3>
                  <button onClick={()=>{
                    if(reason===optionIndex){setReason(null)}
                    else{setReason(optionIndex)}
                  }}><img src={(reason===optionIndex)? '/Why-open.png' : '/Why-close.png'} alt="" className='max-w-[60px]'/></button>
                </div>
                {(reason===optionIndex) && (<p>
                 {option.desc}
                </p>)}
              </div>
            )
          })}
        </div>
        <div className='flex flex-col items-end pt-10 h-[500px]'><img src="/Why.png" alt="" className='max-w-[300px]'/></div>
      </div>
      </section>
    </div>
  )
}
