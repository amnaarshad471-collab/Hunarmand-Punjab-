import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './BuildSection.css';


const BuildSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  return (
    <section className="build-section1 container" id="build-section">
      <div className="row align-items-center py-4">
        <div className="col-lg-6 col-md-12" data-aos="fade-right">
          <div className="build">
            <h2 className="build-b-i d-flex align-items-center">
              <button className="build-icon-btn">
                <img alt="icon" src="11.png" className="icon-img" />
              </button>
              <span className="highlight">
                Earn $1000 – $5000 <br /> Through Freelancing
              </span>
            </h2>

            <h1 className="text-reveal mb-0">
              <span className="word">
                     Build Your Future
                <br /> with Hunarmand
                <br /> Punjab
              </span>
            </h1>

            <p className="font-18" data-aos="fade-up" data-aos-delay="200">
              Hunarmand Punjab provides free Digital Skills Training and Support
              Programs to empower youth with employable skills and online
              earning opportunities for a brighter future.
            </p>

            <div
              className="d-flex gap-4 buttons"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a href="/Courses">
                <button className="btn-green">Explore Courses</button>
              </a>
              <a href="/apply-now">
                <button className="btn-black">Enroll Now</button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="col-lg-6 col-md-12 text-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img className="build-img-big" alt="build future" src="/3.webp" />
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
