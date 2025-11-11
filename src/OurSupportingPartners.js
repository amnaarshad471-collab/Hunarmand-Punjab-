import React from "react";
import Slider from "react-slick";
import "./OurSupportingPartners.css";

const partners = [
  { name: "Bank of Punjab", img: "https://youthparliament.pk/wp-content/uploads/2022/07/bop111.png" },
  { name: "Lenovo", img: "https://crystalpng.com/wp-content/uploads/2025/05/lenovo-logo.png" },
  { name: "Electric Bike", img: "/Icon-1.png" },
  { name: "Ministry of School & Higher Education", img: "/government-of-punjab-logo-png_seeklogo-237539 (1).png" },
  { name: "Taleem Finance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0TQwO2v6lvKYL3d7qvmHD6yKA8gUn14-Uw&s" },
  { name: "Taleem Abroad", img: "https://www.shutterstock.com/image-vector/study-abroad-vector-logo-design-600nw-1711891945.jpg" },
  { name: "EC-Council", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdTeSH02aH9-eUut6MYCnwtGlI6kCnNDarQ&s" },
  { name: "Udemy", img: "https://logowik.com/content/uploads/images/udemy-new-20212512.jpg" },
  { name: "Coursera", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3pl_zOXCdfxx2ksowu1H39fbyBpFMdo7Dw&s" },
  { name: "Meta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtdzKPDmF4BYfI0WCuTY416jnhZiJeAK-rg&s" },
  { name: "Fiverr", img: "https://logowik.com/content/uploads/images/fiverr-new3326.jpg" },
  { name: "Microsoft", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LnDYBaUFCBj2hvQqKZkCwjCZZFXalvd3OA&s" },
];

const OurSupportingPartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700, // animation speed
    slidesToShow: 8,
    slidesToScroll: 1, // move step by step
    autoplay: true,
    autoplaySpeed: 1600, // time between steps
    cssEase: "ease", // smooth transition
    arrows: false,
    pauseOnHover: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 6, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="partners-container">
      <h2 className="partners-title">Our Supporting Partners</h2>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="partner-slide">
            <img src={partner.img} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurSupportingPartners;
