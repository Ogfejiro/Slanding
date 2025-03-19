import React from 'react';

const Matrics = () => {
  return (
    <div className='bg-green-200 py-8 px-4'> {/* Added px-4 for horizontal padding */}
      <div className='flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0'>
        <div className='flex flex-wrap justify-center md:justify-around items-center gap-6 md:gap-10 w-full md:w-auto'> {/* Added w-full and md:w-auto */}
          <div className='text-center w-full sm:w-auto'> {/* Added w-full and sm:w-auto */}
            <p className='text-lg'>FARMERS</p>
            <h1 className='text-4xl md:text-6xl font-bold'>300K+</h1>
          </div>
          <div className='text-center w-full sm:w-auto'>
            <p className='text-lg'>DRIVERS</p>
            <h1 className='text-4xl md:text-6xl font-bold'>82K+</h1>
          </div>
          <div className='text-center w-full sm:w-auto'>
            <p className='text-lg'>BUYERS</p>
            <h1 className='text-4xl md:text-6xl font-bold'>500K+</h1>
          </div>
        </div>
        <div className='mt-6 md:mt-0 w-full md:w-auto flex justify-center md:justify-end'> {/* Added justify-center and md:justify-end */}
          <img src='/images/point.png' alt='point' className='max-w-full h-auto' />
        </div>
      </div>
    </div>
  );
};

export default Matrics;