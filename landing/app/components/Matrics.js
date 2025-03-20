import React from 'react';

const Matrics = () => {
  return (
    <div className='bg-green-200 py-8 px-4'>
      <div className='flex flex-col items-center md:flex-row md:justify-around gap-8 md:gap-0'>
        <div className='flex flex-col items-center gap-6 md:flex-row md:justify-around md:gap-10 w-full md:w-auto'>
          <div className='text-center'>
            <p className='text-lg'>FARMERS</p>
            <h1 className='text-4xl md:text-6xl font-bold'>300K+</h1>
          </div>
          <div className='text-center'>
            <p className='text-lg'>DRIVERS</p>
            <h1 className='text-4xl md:text-6xl font-bold'>82K+</h1>
          </div>
          <div className='text-center'>
            <p className='text-lg'>BUYERS</p>
            <h1 className='text-4xl md:text-6xl font-bold'>500K+</h1>
          </div>
        </div>
        <div className='mt-6 md:mt-0 w-full md:w-auto flex justify-center md:justify-end'>
          <img src='/images/point.png' alt='point' className='max-w-full h-auto' />
        </div>
      </div>
    </div>
  );
};

export default Matrics;