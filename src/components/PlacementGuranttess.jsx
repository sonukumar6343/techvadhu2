import React from 'react';

const PlacementGuarantee = () => {
  return (
    <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden  shadow-lg border border-gray-200">
      <div className="bg-blue-800 text-white">
        <div className="flex">
          <div className="w-1/2 p-4 border-r border-blue-700 text-center">
            <h2 className="text-xl font-bold ">Placement Guarantee</h2>
          </div>
          <div className="w-1/2 p-4 flex  items-center border-r-amber-50  border-l-2">
            <span className="font-semibold mx-auto">FULLY ONLINE</span>
            <span className="text-xl font-bold flex">9 months</span>
          </div>
        </div>
      </div>
      
      <div className="flex text-center">
        <div className="w-1/3 bg-blue-700 text-white p-4 border-r-2 border-t-2 border-gray-200">
          <h3 className="font-bold mb-2">DREAM JOBS</h3>
          <p className="font-bold">6 - 10 LPA</p>
        </div>
        
        <div className="w-1/3 bg-blue-800 text-white p-4 border-r-2 border-t-2 border-white">
          <h3 className="font-bold mb-2">SUPER DREAM JOBS</h3>
          <p className="font-bold">10 - 25+ LPA</p>
        </div>
        
        <div className="w-1/3 bg-blue-800 text-white p-4 border-t-2">
          <h3 className="font-bold mb-2">TRIAL SESSION</h3>
          <p className="font-bold">Free</p>
        </div>
      </div>
      
      <div className="p-4 bg-white text-gray-800 text-medium">
        <p className="text-center ">For more info, check Tech Vedhu's Job Guarantee Details.</p>
      </div>
    </div>
  );
};

export default PlacementGuarantee;