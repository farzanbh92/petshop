import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-20'> 

         <div className='col-span-2 md:ml-44 ml-4 mr-4 mb-8'>

            <div className='text-left'>
            <h1 className='text-2xl font-bold mb-8'>Contact us</h1>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> 

            <div className='text-left'>
            <h1 className='text-xl font-bold mb-4 mt-12 border-b-2 mr-40 border-gray-500'>Customer Sales and Serevice</h1>
            <ul>
                <a href='mailto:petshop@gmail.com'><li className='text-green-600 font-bold'>E-mail: petshop@gmail.com</li></a>
                <li>Call or e-mail us for help with any aspect of your purchase</li>
                <li>Call toll-free 1: 877 000 0000</li>
                <li>Call toll-free 2: 866 000 0000</li>
                <li>Call toll-free 3: 888 000 0000</li>
            </ul>
            </div>

            <div className='text-left'>
            <h1 className='text-xl font-bold mb-4 mt-12 border-b-2 mr-40 border-gray-500'>Store Hours</h1>
            <p>monday to Friday 9:00 am - 7:00 pm EST (GMT -05000)</p>
            <p>Closed Saturday and Sunday</p>
            </div>

            <div className='text-left'>
            <h1 className='text-xl font-bold mb-4 mt-12 border-b-2 mr-40 border-gray-500'>Mailing Address</h1>
            <ul>
                <li>Petshop</li> 
                <li>250 Lorem Ipsum Street</li>
                <li>4th Floor</li>
                <li>Tehran</li>
                <li>Iran</li>
            </ul>
            </div>
         </div>



         <div className='w-fit mx-auto'>
            <h1 className='italic text-2xl mt-4 font-sans border-b-2 border-gray-600'>FOLLOW US ON :</h1>
            <div className='grid gap-8 w-fit mx-auto md:grid-cols-1 grid-cols-3 md:mt-12 mt-4'>
            <div className= 'text-red-600 text-6xl text-center cursor-pointer'>
            <FaInstagram/>
            </div>
            <div className= 'text-blue-600 text-6xl text-center cursor-pointer'>
            <FaTwitter/>
            </div>
            
            <div className= 'text-blue-700 text-6xl text-center cursor-pointer'>
            <FaFacebookSquare/>
            </div>
            </div>

            <h1 className='italic text-2xl md:mt-16 mt-4 font-sans border-b-2 border-gray-600'>CALL ON :</h1>
            <div className='grid gap-8 w-fit mx-auto grid-cols-1 md:mt-8 mt-4'>
            <div className= 'text-green-600 text-6xl text-center cursor-pointer'>
            <IoLogoWhatsapp/>
            </div> 
            </div>
         </div>
         
        </div>
        </>
    );
};

export default Contact;