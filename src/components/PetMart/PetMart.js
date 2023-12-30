import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageTextHoverComponent from './PetMartImage';
import pets from '../../assets/images/pets.jpg';
import Content from './Content';



const PetMart = () => {
    return (
        <>
      
        <div className='md:mx-96 mx-4 md:mt-12 mt-8 md:mb-12 mb-8'>
            <SearchBar/>
        </div>
        <div className='bg-gray-200 md:mx-32 mx-4 mb-8 text-left bg-opacity-60 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div className='grid md:grid-cols-4 grid-cols-1 md:px-20 px-4 mb-8'>

      <div className='md:col-span-3'>

        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-x-12 gap-y-8'>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        <ImageTextHoverComponent imageUrl={pets} text={'lorem ipsum'}/>

        </div>
      </div>

      <div className='md:ml-4'>
        <Content/>
      </div>
        </div>
       
        </>
    );
};

export default PetMart;