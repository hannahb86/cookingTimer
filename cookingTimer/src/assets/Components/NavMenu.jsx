import React from 'react';
import { AiOutlineMenu, AiFillHome, AiOutlineMail } from 'react-icons/ai';
import { GiCookingPot } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';
import { useState } from 'react';

const Ingredients = () => {
    
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    };

    const menuIcon = {color:'white'};
  
    return (
    <div>
        <div className='bg-cyan-500 w-full fixed top-0 right-0 z-[99] p-7 md:hidden'>
            <AiOutlineMenu size={20} style={menuIcon} onClick={handleNav} className='fixed top-0 right-0 z-[99] 
                mt-4 mr-4 cursor-pointer md:hidden' />
        </div>
      
      {
        nav ? ( // ternary operator for if statement
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                
                <a onClick={handleNav} href='#main' className='text-white w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-cyan-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiFillHome style={menuIcon} size={20} />
                <span className='pl-4'>Home</span>
                </a>

                <a onClick={handleNav} href='#about' className='text-white w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-cyan-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <GiCookingPot style={menuIcon} size={20} />
                <span className='pl-4'>My Recipes</span>
                </a>

                <a onClick={handleNav} href='#contact' className='text-white w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-cyan-500 shadow-gray-400 mt-20 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <IoMdSettings style={menuIcon} size={20} />
                <span className='pl-4'>Settings</span>
                </a>

            </div>
        )
        : ( // ternary operator for else 
            ''
        )}

    </div>
     
  )
}

export default Ingredients
