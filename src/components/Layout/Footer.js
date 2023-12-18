import React from 'react';
import img1 from '../../assets/images/organic-food.jpg';
import img2 from '../../assets/images/good-food.jpg';
import img3 from '../../assets/images/pet-grooming.jpg';
import img4 from '../../assets/images/friendly-pets.jpg';
import img5 from '../../assets/images/pet-lover2.jpg';
import img6 from '../../assets/images/healthy-dog.jpg';
import img7 from '../../assets/images/pet-lover.jpg';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='w-full'>
         <div className='grid grid-cols-1 md:grid-cols-3 bg-[#F8F3E9] py-8 justify-items-center md:px-48'>

          <Link to='organicfood'><img src={img1} alt='organic food'/></Link>
          <Link to='goodfood'><img src={img2} alt='good food' className='md:py-0 py-4'/></Link>
          <Link to='petgrooming'><img src={img3} alt='pet-grooming'/></Link>

         </div>
         <div className='bg-[#310000] grid md:grid-cols-4 gap-0 grid-cols-1 justify-items-center md:px-52 px-0 md:py-0 py-2'>

            <div style={{
        backgroundImage: `url(${img4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '240px',
        height: '186px'
        }}>
            <p className='mt-20 text-lime-500 font-bold'>Friendly Pets</p>
        <p className='text-white'>
Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonummy nib.
<b className='text-green-400 hover:text-orange-400'><Link to='#'>Read More...</Link></b></p>
      </div>

             <div style={{
                backgroundImage: `url(${img5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '240px',
                height: '186px'
             }}>
                <p className='mt-20 text-lime-500 font-bold'>How dangerous are they</p>
        <p className='text-white'>
Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonummy nib.
<b className='text-green-400 hover:text-orange-400'><Link to='#'>Read More...</Link></b></p>
             </div>

             <div style={{
                backgroundImage: `url(${img6})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '240px',
                height: '186px'
             }}>
                <p className='mt-20 text-lime-500 font-bold'>Keep them healthy</p>
        <p className='text-white'>
Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonummy nib.
<b className='text-green-400 hover:text-orange-400'><Link to='#'>Read More...</Link></b></p>
             </div>

             <div style={{
                backgroundImage: `url(${img7})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '240px',
                height: '186px'
             }}>
                <p className='mt-20 text-lime-500 font-bold'>Love...love...love...pets</p>
        <p className='text-white'>
Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonummy nib.
<b className='text-green-400 hover:text-orange-400'><Link to='#'>Read More...</Link></b></p>
             </div>

         </div>
         <div className='bg-[#FFB100] py-2'>
            &copy; All rights reserved
         </div>
        </footer>
    );
};

export default Footer;