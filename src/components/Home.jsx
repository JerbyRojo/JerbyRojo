import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* {Container} */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-teal-800 text-2xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Jeremy Brent Rojo</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Web Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a career shifter that wants to specialize in fullstack. Currently, learning and building resposive dynamic and static web applications.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-800 rounded-lg transition-transform duration-300 hover:scale-110'>View Projects 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home