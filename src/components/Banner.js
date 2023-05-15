import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
  return (
    <div className='relative'>
        <div className=' w-full h-8 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={4000}>
          <div>
              <img loading='lazy' href="/banner.png" alt='' width={50} height={50} />
          </div>
          <div>
              <img loading='lazy' src="/banner.png" alt='' width={50} height={50} />
          </div>
          <div>
              <img loading='lazy' src="/banner.png" alt='' width={50} height={50} />
          </div>
        </Carousel>
    </div>
  )
}

export default Banner