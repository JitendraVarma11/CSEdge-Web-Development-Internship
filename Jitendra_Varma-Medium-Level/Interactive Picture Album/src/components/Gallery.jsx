import React from "react";
import ImageCard from "./ImageCard";

const Gallery = ({ images, openLightbox }) => {
  return (
    <div className="">
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-1 gap-4 p-4">
          {images.map((image, index) => (
            <ImageCard key={index} image={image} openLightbox={openLightbox} />
          ))}
        </div>
      ) : (
        <div className="h-full flex items-center justify-center mt-44">
          <div className="text-center text-2xl font-semibold">
            No Image Found
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
