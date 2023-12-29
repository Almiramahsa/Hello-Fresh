import React from 'react';
import Logo from '../assets/images/hello-fresh-logo.png';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="ml-2 flex items-center justify-start">
          <img src={Logo} alt="Logo Kaleka.id" className="h-16 w-auto" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 mt-4 md:mt-0">
          <div className="flex items-center border-l-4 border-hellolight px-4 mb-2 md:mb-0">
            <div className="mx-2">
              <Icon icon="ion:search" width="24" height="24" color="#90bf1d" />
            </div>
            <div className="text-start">
              <p className="text-hellogreen font-bold text-lg">Discover</p>
              <p className="text-hellogray font-light">Find the easiest decision making with us</p>
            </div>
          </div>

          <div className="flex items-center border-l-4 border-hellolight px-4 mb-2 md:mb-0">
            <div className="mx-2">
              <Icon icon="octicon:play-16" color="#90bf1d" width="24" height="24" />
            </div>
            <div className="text-start">
              <p className="text-hellogreen font-bold text-lg">Watch</p>
              <p className="text-hellogray font-light">Find the easiest decision making with us</p>
            </div>
          </div>

          <div className="flex items-center border-l-4 border-hellolight px-4">
            <div className="mx-2">
              <Icon icon="ph:heart-bold" color="#90bf1d" width="24" height="24" />
            </div>
            <div className="text-start">
              <p className="text-hellogreen font-bold text-lg">Detox</p>
              <p className="text-hellogray font-light">Find the easiest decision making with us</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
