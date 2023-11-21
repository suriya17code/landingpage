import Carousel from 'react-bootstrap/Carousel';

import React from 'react';

const Header = () => {
  return (
<div className='container mt-5  ' >
<Carousel>
      <Carousel.Item >
      <img
          className="d-block w-100 "
          src="https://ae01.alicdn.com/kf/H91125b9692ea485e980ec74eabca3666r.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 h-100"
          src="https://www.phoneworld.com.pk/wp-content/uploads/2019/10/Vivo-Officially-Announces-iQOO-Neo-855.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 h-100"
          src="https://www.nepalitelecom.com/wp-content/uploads/2020/10/Infinix-Note-7-Lite-Overview-1024x553.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 h-100"
          src="https://www.mobiles.co.uk/blog/content/images/2020/07/design2.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Header;