import Image from "next/image";
import React from "react";
import Product from "./Product";
import { Carousel } from "react-responsive-carousel";

function ProductFeed({ products }) {
  return (
    <div className="mx-auto mb-10">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
        centerMode
        centerSlidePercentage={30}
        
      >
        {products.map(({ id, title, price, description, category, image }) => (
          <div key={id} className="mx-10 mt-56">
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductFeed;
