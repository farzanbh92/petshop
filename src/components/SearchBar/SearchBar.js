import React from 'react';
import { useState } from 'react';

const SearchBar = () => {

    const [inputValue , setInputvalue] = useState('search here');

    const InputChange = (e) => {
      setInputvalue(e.target.value);
    }

    return (
    <div className='bg-green-600 shadow-lg shadow-gray-300 pt-2 pb-4 px-2 rounded-lg h-fit md:mx-8 mb-4'>

        <section className='mb-2 text-left ml-4 font-bold text-gray-200'>What are you looking for?</section>   

        <div className='flex'>
          
          <input type='text' value={inputValue} onChange={InputChange} className='basis-2/3 h-8 rounded-lg text-lg px-2 mx-2 text-gray-600'/>

          <button className='basis-1/3 bg-yellow-200 text-gray-800 font-bold hover:bg-orange-500 hover:text-white rounded-lg h-8 px-4 mx-4'>Search</button>
        </div>

    </div>
    );
};

export default SearchBar;