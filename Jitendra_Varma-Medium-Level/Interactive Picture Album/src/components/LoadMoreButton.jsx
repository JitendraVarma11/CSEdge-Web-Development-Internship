import React, { useState } from 'react';
import { FaAnglesDown } from "react-icons/fa6";

const LoadMoreButton = ({ loadMore}) => {
  return (
    <div className="flex items-center justify-center p-10">
       <button className="flex gap-2 text-black font-semibold text-lg items-center justify-center" onClick={loadMore}><FaAnglesDown className='animate-bounce'/>Load More...</button>
    </div>
  );
};

export default LoadMoreButton;
