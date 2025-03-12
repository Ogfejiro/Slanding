import React from 'react';

const Section = () => {
  return (
    <div className="text-center pt-12 leading-8 pb-12 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
      {/* Adjust padding for different screen sizes */}
      <div>
        <h1 className="text-2xl leading- sm:text-3xl md:text-4xl lg:text-5xl">
          Harvest More, Sell Smarter, <br className="hidden sm:block" /> Deliver
          Faster - All in One Platform.
        </h1>
        <p className="mt-4 sm:mt-6 md:mt-8">
          Powering Benue’s agricultural trade with real-time insights,
          <br className="hidden sm:block" /> seamless logistics, and a thriving
          digital marketplace.
        </p>
      </div>
      <div className="pt-14 flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Adjust layout for different screen sizes */}
        <div className="flex justify-center items-center">
          <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
        <div>
          <button className="border border-gray-400 px-4 py-2 bg-transparent rounded-md font-semibold">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;