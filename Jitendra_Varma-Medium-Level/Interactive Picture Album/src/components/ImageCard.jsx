import React from 'react';

const ImageCard = ({ image, openLightbox }) => {

  return (
    <div className="relative cursor-pointer mt-5" onClick={() => openLightbox(image.src)}>
      <img src={image.src} alt="" className="w-full sm:w-[350px] h-[250px] transition-transform transform hover:scale-105 object-cover object-center rounded-lg shadow-lg" />
    </div>
  );
};

export default ImageCard;
