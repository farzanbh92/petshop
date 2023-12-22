import React from 'react';
import background2 from '../../assets/images/background2.jpg';

const About = () => {

const backstyle = {backgroundImage : `url(${background2})`}

    return (
    <>
    <div className='font-bold text-2xl text-left md:mx-56 mx-12 mt-20'>About Us</div>
    <div className='bg-contain bg-no-repeat bg-center md:h-auto mt-2 md:px-40 px-4 grid md:grid-cols-3 grid-cols-1' style={backstyle}>

        <div className='md:col-span-2'>
       <h1 className='text-xl text-left font-bold text-orange-500 mt-8 mb-4'>Start to work</h1>
       <div className='text-justify px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
       sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
       

       <h1 className='text-xl text-left font-bold text-orange-500 mt-8 mb-4'>Our specialists</h1>
       <div className='text-justify px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
       sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

       <h1 className='text-xl text-left font-bold text-orange-500 mt-8 mb-4'>Our policy</h1>
       <div className='text-justify px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
       sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

       <h1 className='text-xl text-left font-bold text-orange-500 mt-8 mb-4'>Our services</h1>
       <div className='text-justify px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
       sunt in culpa qui officia deserunt mollit anim id est laborum.</div>


       </div>
       <div className='md:px-8 px-2'>
        <h1 className='border-b-4 border-blue-600 font-bold md:text-2xl text-base mb-12 md:py-4 py-2'>
        Featured Topics
        </h1>

        <div className='bg-red-400 bg-opacity-30 cursor-pointer mb-8 rounded-xl text-sm p-4'> 
<section className='font-bold'>What they need</section>
Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. read more
        </div>

        <div className='bg-green-400 bg-opacity-30 cursor-pointer mb-8 rounded-xl text-sm p-4'> 
<section className='font-bold'>Pet urines</section>
Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. read more
        </div>

        <div className='bg-yellow-400 bg-opacity-30 cursor-pointer mb-8 rounded-xl text-sm p-4'> 
<section className='font-bold'>Pet habits</section>
Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. read more
        </div>

        <div className='bg-blue-400 bg-opacity-30 cursor-pointer mb-8 rounded-xl text-sm p-4'> 
<section className='font-bold'>Travel with pet</section>
Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. read more
        </div>

       </div>
    </div>
    
    </>
    );
};

export default About;