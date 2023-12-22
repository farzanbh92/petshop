import React from 'react';
import guidead from '../../assets/images/petguide.jpg';

const PetGuide = () => {

const adImage = {backgroundImage : `url(${guidead})`};

    return (
       <>
       <div className='grid md:grid-cols-3 grid-cols-2 gap-8 md:px-52 px-4 md:mt-20 mt-12 md:mb-12'>

        <div className='col-span-2 md:mb-16 mb-8 order-1'>
            <h1 className='font-bold text-2xl text-left mb-4'>Pet Guide</h1>
            <p className='text-left text-gray-700 p-2 text-lg'>Here are some useful pet quide tips for your pets. Easy and convenient for you to learn more on how to understand them.
                 Basic intructions to useful information not just for your pet but also for other animals.</p>
        </div>
        <div className='border-2 border-gray-200 rounded-lg shadow-md md:row-span-4 md:order-2 md:block hidden order-last'>
            
        <h1 className='text-xl font-bold mt-8 text-gray-700'>Pet Guide Overview</h1>  

           <ul className='mt-12 cursor-pointer text-gray-500 px-12'>

            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Pet Trainging Guides</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Behavior Training</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Pet Recipes</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Pet Foods</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Cosplay Pets</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Shopping Guides</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Pregnancy and Nursing Pets</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Medications</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Excercise</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Diet</li>
            <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Grooming</li>
            
            </ul> 
            <div className='mx-12 mt-20 h-full w-60 bg-contain bg-no-repeat cursor-pointer opacity-70 hover:opacity-100 absolute' style={adImage}>
                <section className='pt-32 font-bold text-2xl block hover:hidden h-full w-full text-black'>SAVE COUPON</section>
            </div>
        </div>
        <div className='border-2 border-orange-400 order-3'>
        <h1 className='font-bold text-xl bg-orange-400 text-white py-1'>Pet Training Guides</h1>
        <p className='text-justify p-2 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='border-2 border-orange-400 order-4'>
        <h1 className='font-bold text-xl bg-orange-400 text-white py-1'>Make them Behave</h1>
        <p className='text-justify p-2 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='border-2 border-orange-400 order-5'>
        <h1 className='font-bold text-xl bg-orange-400 text-white py-1'>Food They Need</h1>
        <p className='text-justify p-2 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='border-2 border-orange-400 order-6'>
        <h1 className='font-bold text-xl bg-orange-400 text-white py-1'>What not to do</h1>
        <p className='text-justify p-2 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='border-2 border-orange-400 order-7'>
        <h1 className='font-bold text-xl bg-orange-400 text-white py-1'>Recipes for Pets</h1>
        <p className='text-justify p-2 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='border-2 border-orange-400 order-8'>
        <h1 className='font-bold text-xl bg-orange-400 text-white py-1'>Pet's care</h1>
        <p className='text-justify p-2 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        
       </div>

       <div className='border-2 border-gray-200 rounded-lg shadow-md block md:hidden mx-16 my-8 pb-8'>
       <h1 className='text-xl font-bold mt-8 text-gray-700'>Pet Guide Overview</h1>  

<ul className='mt-4 cursor-pointer text-gray-800 px-12'>

 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Pet Trainging Guides</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Behavior Training</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Pet Recipes</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Pet Foods</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Cosplay Pets</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Shopping Guides</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Pregnancy and Nursing Pets</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Medications</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Excercise</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Diet</li>
 <li className='bg-yellow-200 hover:bg-green-300 rounded-lg text-center mt-4'>Grooming</li>
 
 </ul> 
       </div>

       </>
    );
};

export default PetGuide;