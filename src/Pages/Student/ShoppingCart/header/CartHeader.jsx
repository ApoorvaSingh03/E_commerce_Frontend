import React from 'react';
import airplane from "../../../../components/images/airplane.png";

const Header = () => {
  return (
    <div className="relative bg-yellow-custom w-full h-[180px] sm:h-[100px] md:h-[300px] lg:h-[200px] flex flex-col items-center justify-center mx-auto opacity-100">
      <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl font-bold text-gray-900 font-montserrat text-center pt-5 md:pt-8"
          style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)' }}>
        Shopping Cart
      </h1>
      
      <nav className="text-gray-700 text-sm sm:text-1g md:text-lg lg:text-xl mt-5 text-center">
        <span className="cursor-pointer hover:underline">home</span> &gt;
        <span className="font-semibold"> Shopping Cart</span>
      </nav>


      <div className="absolute right-0 top-[40%] transform -translate-y-1/2">
        <img
          src={airplane}
          alt="Paper Airplane"
          className="w-[100px] sm:w-[150px] md:w-[50px] lg:w-[450px] h-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Header;