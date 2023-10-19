import React from 'react';
import Logo from "../assets/logo.svg"
const Header = () => {
  return (
  <header className="py-8">Header
  <div className="container mx-auto">
    <div className="flex justify-between items-center">

      <a href="about">
        <img src={Logo} alt=''/>
      </a>

      <button className="btn btn-sm">See my projects</button>
    </div>
  </div>
  </header>
  )
};

export default Header;
