import React from 'react';
import { MdOutlinePets } from "react-icons/md";
import './Logo.css';

const Logo = () => {

    const logoStyle = {
        fontSize: '40px' ,
        position: 'fixed',
        top: '15px',
        left: '120px',
        animation: 'rotateLogo 3s infinite', 
      };

    return (
        <div style={logoStyle}>
          <MdOutlinePets/>  
        </div>
    );
};

export default Logo;