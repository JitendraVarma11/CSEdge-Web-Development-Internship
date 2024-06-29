import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const SimpleCarousel = ({ images }) => {
  return (
    <Carousel
      autoPlay={true}
      interval={1500}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
    >
      {images.map((image, index) => (
        <div key={index} className="md:h-[450px] transition-all duration-150">
          <img src={image} alt="image" className="sm:h-[300px] md:h-[450px] object-cover"/>
        </div>
      ))}
    </Carousel>
  );
};
