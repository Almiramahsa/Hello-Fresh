import React from 'react';
import { Icon } from '@iconify/react';

const MealBox = () => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center h-screen mt-80 sm:mt-20 md:mt-20">
      <div className="w-3/4 lg:w-1/2 p-6 bg-hellolight rounded-md shadow-md">
        <div className='m-6 sm:m-10'>
          <p className='text-hellogreen font-bold text-xl sm:text-2xl text-center'>
            The Decision Detox
          </p>
          <p className='text-hellogray font-bold text-xl sm:text-2xl text-center'>
            starts tonight with your personalised meal plan.
          </p>
        </div>

        <div className='mx-10'>
          <div className="mb-4">
            <label className="block text-sm font-medium text-helloblack pb-2">How many people are you cooking for?</label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-100 text-hellogray py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white ">
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="more">More</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icon icon="mingcute:down-line" color="#90bf1d" width="18" height="18" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-helloblack pb-2">What's your cooking style?</label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-100 text-hellogray py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white ">
                <option value="low-calorie">Low Calorie</option>
                <option value="high-protein">High Protein</option>
                <option value="high-fat">High Fat</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icon icon="mingcute:down-line" color="#90bf1d" width="18" height="18" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-helloblack pb-2">Choose your favourite cuisine:</label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-100 text-hellogray py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white ">
                <option value="indonesian">Indonesian</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icon icon="mingcute:down-line" color="#90bf1d" width="18" height="18" />
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button className="bg-hellogreen text-hellowhite py-2 px-4 rounded-md">
              Generate Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealBox;
