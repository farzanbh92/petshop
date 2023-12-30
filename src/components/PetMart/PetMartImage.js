import React, { useState } from 'react';

const PetMartImage = ({imageUrl , text}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative transition ease-in-out delay-150 hover:scale-110 duration-300 opacity-70 hover:opacity-100 cursor-pointer mx-8 md:mx-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageUrl}
        alt="Your Alt Text"
        className="w-full h-auto"
      />
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 ">
          <p className="text-red text-2xl font-bold bg-yellow-300 rounded-lg px-2">{text}</p>
        </div>
      )}
    </div>
  );
};

export default PetMartImage;
