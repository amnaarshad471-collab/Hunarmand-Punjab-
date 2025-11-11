import React, { useEffect } from "react";
import './ScholarshipCards.css';
import AOS from "aos";
import "aos/dist/aos.css";

const ScholarshipCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const cards = [
    {
      icon: "fas fa-location-arrow",
      title: "Scholarship Card",
      link: "/Scholarship",
    },
    {
      icon: "fas fa-laptop",
      title: "Laptop Scheme",
      link: "Laptop",
    },
    {
      icon: "fas fa-solar-panel",
      title: "Solar Scheme",
      link: "/SolorScheme",
    },
    {
      icon: "fas fa-coins",
      title: "Taleem Finance",
      link: "/taleem-finance",
    },
  ];

  return (
    <section className="scholarship-section1">
      <h2 className="title">
        <span className="title-span">Scholarship Card Benefits</span>
      </h2>
      <p className="subtitle">
        Unlock free access to premium Scholarship Card, Laptop Scheme, Solar Scheme,
        and Taleem Finance under the scholarship card.
      </p>

      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className="Card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="card-front">
              <i className={`${card.icon} icon`} />
              <h4>{card.title}</h4>
            </div>
            <div className="card-back">
              <h4>{card.title}</h4>
              <a href={card.link}>
                <button>Apply Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScholarshipCards;
