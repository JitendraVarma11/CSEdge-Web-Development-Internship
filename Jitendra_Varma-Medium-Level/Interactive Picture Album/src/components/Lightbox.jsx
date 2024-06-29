import React from 'react';

const Lightbox = ({ isOpen, image, closeLightbox }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <span className="absolute top-4 right-4 text-white text-4xl cursor-pointer" onClick={closeLightbox}>&times;</span>
      <img src={image} alt="" className="max-w-3xl w-full h-auto" />
    </div>
  );
};

export default Lightbox;
