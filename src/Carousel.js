import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Carousel() {
  useEffect(() => {
    const carouselElement = document.querySelector("#carouselExampleSlidesOnly");
    if (carouselElement) {
      const bootstrap = require("bootstrap");
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, 
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Slider1.jpg" className="d-block w-100 carousel-img" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="Slider2.jpg" className="d-block w-100 carousel-img" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="Slider3.jpg" className="d-block w-100 carousel-img" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="Slider4.jpg" className="d-block w-100 carousel-img" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src="Slider5.jpg" className="d-block w-100 carousel-img" alt="Slide 5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
