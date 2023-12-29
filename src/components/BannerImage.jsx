import React from 'react';
import Banner from '../assets/images/banner.jpg';

function BannerImage() {
  return (
    <div className="relative z-10 bg-fixed bg-contain overflow-auto">
      <div className="bg-helloorange min-h-60 "></div>
      <img src={Banner} alt="Banner" className="w-full h-full relative z-20" />
    </div>
  );
}

export default BannerImage;
