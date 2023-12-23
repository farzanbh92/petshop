import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import fish2 from '../../assets/images/koi2.jpg';
import cat3 from '../../assets/images/cat3.jpg';
import dog2 from '../../assets/images/dog2.jpg';
import bird3 from '../../assets/images/bird3.jpg';
import birdcage from '../../assets/images/bird-in-cage.jpg';
import dog3 from '../../assets/images/puppy3.jpg';
import discount from '../../assets/images/discount.jpg';

const PetMart = () => {
    return (
        <>
        
        <div className='md:mx-96 mx-4 md:mt-20 mt-8 md:mb-16 mb-8'>
            <SearchBar/>
        </div>

        <div className='my-12 md:mx-40 mx-8 md:text-lg text-base font-mono font-bold border-2 border-gray-400 shadow-md p-4 text-justify text-gray-500 rounded-2xl'>When it comes to pets, we’re obsessed. 
        <span className='text-orange-500'>There’s nothing we wouldn’t do for our pets</span>, because there’s nothing they wouldn’t do for us. Our associates are devoted to ensuring that pets’ lives are happy and healthy. 
         So naturally, we’re devoted to making sure that PetSmart is a happy and healthy place to work, too.</div>

        <div className='grid md:grid-cols-3 grid-cols-2 gap-8 md:mx-52 mx-12 md:mb-16 mb-4'>

           <div className='flex'>

             <div><img src={fish2} alt='fish' className='rounded-xl md:block hidden'/></div>
              <div className='ml-4'>
               <ul className='text-left'>
                  <section className='font-bold text-xl'>Food Area</section>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option x
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option x
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option x
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option x
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option x
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option x
                  </li>
                  <li className='mt-2 font-semibold text-orange-500 cursor-pointer  hover:text-green-500'>
                  View All
                  </li>

               </ul>
            </div>

           </div>

           <div className='flex'>

             <div><img src={cat3} alt='cat' className='rounded-xl md:block hidden'/></div>
              <div className='ml-4'>
               <ul className='text-left'>
                  <section className='font-bold text-xl'>Accesories</section>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option y
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option y
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option y
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option y
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option y
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option y
                  </li>
                  <li className='mt-2 font-semibold text-orange-500 cursor-pointer hover:text-green-500'>
                  View All
                  </li>
                  

               </ul>
            </div>

           </div>

           <div className='rounded-xl row-span-3 md:block hidden cursor-pointer'>
        <img src={discount} alt='discount' className='mx-auto py-4'/>
           </div>

           <div className='flex'>

             <div><img src={dog2} alt='dog' className='rounded-xl md:block hidden'/></div>
              <div className='ml-4'>
               <ul className='text-left'>
                  <section className='font-bold text-xl'>Training </section>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option z
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option z
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option z
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option z
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option z
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option z
                  </li>
                  <li className='mt-2 font-semibold text-orange-500 cursor-pointer  hover:text-green-500'>
                  View All
                  </li>
          

               </ul>
            </div>

           </div>

           <div className='flex'>

             <div><img src={bird3} alt='bird' className='rounded-xl md:block hidden'/></div>
              <div className='ml-4'>
               <ul className='text-left'>
                  <section className='font-bold text-xl'>Health </section>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option t
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option t
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option t
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option t
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option t
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option t
                  </li>
                  <li className='mt-2 font-semibold text-orange-500 cursor-pointer  hover:text-green-500'>
                  View All
                  </li>

               </ul>
            </div>

           </div>

           <div className='flex'>

             <div><img src={birdcage} alt='cage' className='rounded-xl md:block hidden'/></div>
              <div className='ml-4'>
               <ul className='text-left'>
                  <section className='font-bold text-xl'>Travel Essentials</section>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option o
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option o
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option o
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option o
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option o
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option o
                  </li>
                  <li className='mt-2 font-semibold text-orange-500 cursor-pointer  hover:text-green-500'>
                  View All
                  </li>
                 

               </ul>
            </div>

           </div>

           <div className='flex'>

             <div><img src={dog3} alt='dog' className='rounded-xl md:block hidden'/></div>
              <div className='ml-4'>
               <ul className='text-left'>
                  <section className='font-bold text-xl'>Grooming</section>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option p
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option p
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option p
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option p
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option p
                  </li>
                  <li className='mt-2 font-semibold text-gray-600 cursor-pointer hover:text-green-500'>
                  Option p
                  </li>
                  <li className='mt-2 font-semibold text-orange-500 cursor-pointer  hover:text-green-500'>
                  View All
                  </li>

               </ul>
            </div>

           </div>
          
        </div>
        <div className='font-extrabold text-4xl bg-yellow-300 w-fit mx-auto px-4 py-2 rounded-lg text-green-600 hover:text-orange-400 cursor-pointer md:hidden block my-8'>30% discount</div>
        </>
    );
};

export default PetMart;