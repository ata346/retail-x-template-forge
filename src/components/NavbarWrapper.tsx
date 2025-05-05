
import React from 'react';
import Navbar from './Navbar';
import LanguageSelector from './LanguageSelector';

const NavbarWrapper = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 z-10">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default NavbarWrapper;
