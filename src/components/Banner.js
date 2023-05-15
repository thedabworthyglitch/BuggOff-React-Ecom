import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative z-20">
      <div className=" w-full h-8 bg-gradient-to-t from-gray-100 to-transparent bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img
            loading="lazy"
            src="/Banner1.jpg"
            alt="50% Off!"
            style={{
              height: "20%",
              maxWidth: "70%",
              zIndex: 10,
              aspectRatio: "1600/1026",
            }}
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/Banner2.jpg"
            alt="New Sneakers!"
            style={{
              height: "20%",
              maxWidth: "70%",
              zIndex: 10,
              aspectRatio: "1600/1026",
            }}
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/Banner3.jpg"
            alt="New Discounts!"
            width={30}
            height={30}
            style={{
              height: "20%",
              maxWidth: "70%",
              zIndex: 10,
              aspectRatio: "1600/1026",
            }}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
