import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <header className='md:h-[72px] w-full bg-gradient-to-b from-[#FF9500] to-[#FFAD00] pb-4'>
          <div className='flex'>
          
          <div className='hidden md:block md:basis-1/3'><Logo/></div>

          <nav className='mt-2 md:mt-10 font-semibold mx-auto md:basis-2/3'>
          <ul className='block md:inline-flex'>
            <li className='py-1 w-28 hover:text-white md:border-r border-orange-400'><NavLink to='/'>Home</NavLink></li> 
            <li className='py-1 w-28 hover:text-white md:border-r border-orange-400'><NavLink to='petmart'>Pet Mart</NavLink></li>
            <li className='py-1 w-28 hover:text-white md:border-r border-orange-400'><NavLink to='about'>About</NavLink></li>
            <li className='py-1 w-28 hover:text-white md:border-r border-orange-400'><NavLink to='petguide'>Pet Guide</NavLink></li>
            <li className='py-1 w-28 hover:text-white md:border-r border-orange-400'><NavLink to='contact'>Contact</NavLink></li>
          </ul>
          </nav>
          </div>
        </header>
    );
};

export default Header;