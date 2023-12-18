import React from 'react';
import backgroundImg from '../../assets/images/dog.jpg';
import puppy from '../../assets/images/puppy.jpg';
import cat from '../../assets/images/cat.jpg';
import fish from '../../assets/images/koi.jpg';
import bird from '../../assets/images/bird.jpg';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {

const backgroundStyle = {backgroundImage : `url(${backgroundImg})`};

    return (
        <>

         <div className='bg-contain bg-no-repeat bg-center md:h-screen h-56 mt-2 hidden md:block' style={backgroundStyle}>
         </div>

         <div className='grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-4 md:px-60 px-4 pb-8'>

         

          <div className='flex'>
            <div className='basis-1/3'><img src={puppy}/></div>
            <div className='basis-2/3 px-2 pt-8'>
            <div className='font-semibold text-left text-xl'>What they need</div>
            <p className='text-gray-600'>Mirum est notare quam littera gothica, 
            quam nunc putamus parum clara m, ant epo suerit li tterar. <a href='#' className='text-green-500'>View all</a></p>
            </div> 
          </div>

          <div className='flex'>
            <div className='basis-1/3'><img src={cat}/></div>
            <div className='basis-2/3 px-2 pt-8'>
            <div className='font-semibold text-left text-xl'>Something good</div>
            <p className='text-gray-600'>Mirum est notare quam littera gothica, 
            quam nunc putamus parum clara m, ant epo suerit li tterar. <a href='#' className='text-green-500'>View all</a></p>
            </div> 
          </div>

          

          <div className='flex'>
            <div className='basis-1/3'><img src={fish}/></div>
            <div className='basis-2/3 px-2 pt-8'>
            <div className='font-semibold text-left text-xl'>Kinds of fish</div>
            <p className='text-gray-600'>Mirum est notare quam littera gothica, 
            quam nunc putamus parum clara m, ant epo suerit li tterar. <a href='#' className='text-green-500'>View all</a></p>
            </div> 
          </div>

          <div className='flex'>
            <div className='basis-1/3'><img src={bird}/></div>
            <div className='basis-2/3 px-2 pt-8'>
            <div className='font-semibold text-left text-xl'>Fun birds</div>
            <p className='text-gray-600'>Mirum est notare quam littera gothica, 
            quam nunc putamus parum clara m, ant epo suerit li tterar. <a href='#' className='text-green-500'>View all</a></p>
            </div> 
          </div>

         </div>


        <div className='grid md:grid-cols-2 grid-cols-1 md:px-32 px-4 mx-4 items-center mt-4 mb-12'>

        <SearchBar/>

         <div className='bg-yellow-300 shadow-lg shadow-gray-300 px-4 py-2 rounded-lg'>
          <section className='font-bold text-lg mb-2'>Discounted Items</section>
          <ul className='grid grid-cols-3 gap-2'>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Pet Accessories</li>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Bath Essentials</li>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Pet Foods</li>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Pet Vitamins</li>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Pet Needs</li>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Pet Toys and Treats</li>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Pet Supplies</li>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Pet Emergency Kit</li>
            <li className='bg-yellow-400 py-4 rounded-lg cursor-pointer hover:bg-gray-300'>Pet Insurance</li>
          </ul>
        </div>
      </div>
        </>
    );
};

export default Home;