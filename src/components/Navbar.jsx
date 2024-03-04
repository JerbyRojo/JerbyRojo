import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaHome, FaInfoCircle, FaProjectDiagram, FaTools, FaEnvelope , FaLink} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Design" style ={{ width: '150px' }} />
        </div>

        {/* Menu */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* {Mobile Menu} */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '} >
            <li className='py-6 mb-3 text-5xl flex items-center bg-blue-900 hover:bg-blue-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                <FaHome size={30} className='mr-2 animate-pulse' /> Home
            </li>
            <li className='py-6 mb-3 text-5xl flex items-center bg-green-900 hover:bg-green-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                <FaInfoCircle size={30} className='mr-2 animate-pulse' /> About
            </li>
            <li className='py-6 mb-3 text-5xl flex items-center bg-yellow-900 hover:bg-yellow-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                <FaProjectDiagram size={30} className='mr-2 animate-pulse' /> Projects
            </li>
            <li className='py-6 mb-3 text-5xl flex items-center bg-red-900 hover:bg-red-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                <FaTools size={30} className='mr-2 animate-pulse' /> Skills
            </li>
            <li className='py-6 mb-3 text-5xl flex items-center bg-purple-900 hover:bg-purple-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                <FaEnvelope size={30} className='mr-2 animate-pulse' /> Contact
            </li>
        </ul>


        {/* {Social Icons} */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#3b5998] bg-opacity-65' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Facebook <FaFacebook size={35} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#c13584] bg-opacity-65' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Instagram <FaInstagram size={35} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#0077b5] bg-opacity-65' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Linkedin <FaLinkedin size={35} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#171515] bg-opacity-65' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Github <FaGithub size={35} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#ea4335] bg-opacity-65' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Gmail <HiOutlineMail size={35} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#5fa6ec] bg-opacity-65' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Resume <BsFillPersonLinesFill size={35} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar