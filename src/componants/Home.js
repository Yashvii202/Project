import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

function Home() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true
    };
  
    return (
      <div className="container-fluid">
        <Slider {...settings}>
          <div>
            <img className="slider-image" src="https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
          </div>
          <div>
            <img className="slider-image" src="https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
          </div>
          <div>
            <img className="slider-image" src="https://images.unsplash.com/photo-1489359337130-59cfeeccc6c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
          </div>
          <div>
            <img className="slider-image" src="https://images.unsplash.com/photo-1607473129014-0afb7ed09c3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 4" />
          </div>
          <div>
            <img className="slider-image" src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 5" />
          </div>
        </Slider>
      </div>
    );
  }
  
  export default Home;
  