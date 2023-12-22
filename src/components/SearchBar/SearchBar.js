import React from 'react';
import { useState } from 'react';

const SearchBar = () => {

    const [inputValue , setInputvalue] = useState('search here');

    const InputChange = (e) => {
      setInputvalue(e.target.value);
    }

    return (
    <div className='bg-green-600 shadow-lg shadow-gray-300 pt-2 pb-4 px-4 h-fit rounded-lg md:mx-8 md:mb-4 mb-8'>

    <section className='text-gray-300 font-bold text-left ml-2 mb-2 text-base'>What are you looking for?</section>      
<div className='flex'>
        <div className='basis-2/3'>
          
          <input type='text' value={inputValue} onChange={InputChange} className=' h-8 rounded-lg text-lg px-2 mx-2 text-gray-600 w-full'/>
        </div>
        <div className='basis-1/3 px-2'>
          <button className='bg-yellow-200 text-gray-800 font-bold hover:bg-orange-500 hover:text-white rounded-lg h-8 md:px-8 px-2 mx-4 md:text-lg text-base'>Search</button>
          
        </div>
        </div>
    </div>
    );
};

export default SearchBar;