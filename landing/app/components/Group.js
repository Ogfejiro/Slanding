import React from 'react';

const Group = () => {
  return (
    <div className="relative h-screen sm:h-[80vh] md:h-[70vh] lg:h-screen pt-3">
      {/* Reduced height on smaller screens */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/frame.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 text-white">
        
      </div>
    </div>
  );
};

export default Group;