import React from 'react';
import { FaGamepad, FaSun } from 'react-icons/fa';
import { IoMdMusicalNotes, IoMdTrophy } from 'react-icons/io';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-teal-800'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p className='my-3'>Hi, I'm Jerby short for Jeremy Brent, nice to meet you. Feel free to look around.</p>
                        <p className='my-3'>Hobbies/Likes:</p>
                        <p className='my-3'>
                            <FaGamepad color='grey' className="inline-block mr-2 animate-bounce" /> Playing Video Games
                        </p>
                        <p className='my-3'>
                            <IoMdMusicalNotes color='black' className="inline-block mr-2 animate-bounce" /> Likes to dance
                        </p>
                        <p className='my-3'>
                            <FaSun color='orange' className="inline-block mr-2 animate-bounce" /> Likes sunset
                        </p>
                        <p className='my-3'>
                            <IoMdTrophy color='gold' className="inline-block mr-2 animate-bounce" /> Loves Badminton
                        </p>
                    </div>
                    <div className="p-8 bg-teal-800 text-white rounded-lg shadow-lg h-full w-full">
                        <p className="text-sm font-medium mb-4 animate-pulse">
                            I am a passionate career shifter with a keen interest in diving into the world of full-stack development. Coming from a different background, I've embarked on an exciting journey to specialize in creating robust and dynamic web applications.
                        </p>
                        <p className="text-sm font-medium mb-4 animate-pulse">
                            Currently, I'm honing my skills by delving into various projects, including crafting responsive web applications and developing captivating React.js projects with Tailwind CSS. Each project serves as a stepping stone towards mastering the art of full-stack development, where I aim to blend creativity with functionality to build immersive digital experiences.
                        </p>
                        <p className="text-sm font-medium mb-4 animate-pulse">
                            With a thirst for continuous learning and a drive to push boundaries, I'm eagerly embracing the challenges and opportunities that come my way as I carve out my path in the ever-evolving realm of technology.
                        </p>
                        <p className="text-sm font-medium animate-pulse">
                            Let's build something amazing together! 🚀
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About