import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-center space-x-3">
        <img src="./logo-web.png" alt="logo" className="w-8 h-8 object-contain rounded-full"/>
        <h1 className="text-xl font-semibold tracking-tight">Shirt Creator</h1>
      </div>
    </header>
  );
};

export default Header;
