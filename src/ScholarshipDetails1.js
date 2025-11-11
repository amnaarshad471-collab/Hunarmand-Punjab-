import React, { useEffect, useRef, useState } from "react";
import "./ScholarshipDetails1.css";

const ScholarshipDetails1 = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="card-section">
      <div className={`card-wrapper ${isVisible ? "active" : ""}`}>
        {/* Text Side */}
        <div className="card-text-area">
          <h2 className="card-heading">
            Unlock Your Future with Our Scholarship Cards
          </h2>

          <p className="card-para">
            The <b>Scholarship Card</b> is your all-in-one pass to unlock a world of
            digital learning and career-building opportunities.{" "}
            <b>Hunarmand Punjab</b> is the biggest E-Learning Platform launched by{" "}
            <b>Minister of School & Higher Education Rana Sikandar Hayat</b>. This
            initiative empowers youth with access to high-quality training
            programs, hands-on practical learning, and an internationally
            recognized curriculum.
          </p>

          <p className="card-para">
            Whether you're looking to build IT skills, receive a free laptop, or
            benefit from educational financing and solar support, your
            Scholarship Card is the key to it all.
          </p>

          <div className="card-benefits">
            <p className="card-benefit-title">⚡ Benefits of the Scholarship Card:</p>
            <ul>
              <li>Advanced IT Training with real-world skills</li>
              <li>Laptop, Solar & Education Finance Support</li>
              <li>Hands-On Learning with Global Curriculum</li>
              <li>Eco-Friendly, Sustainable Energy Solution</li>
              <li>Career Guidance & Freelancing Support</li>
            </ul>
          </div>

          <p className="card-highlight">
            Apply today and take the first step toward a skilled, self-reliant
            future.
          </p>

          <div className="card-btn-box">
            <a href="/Admission" className="card-btn">
              Apply Now
            </a>
          </div>
        </div>

        <div className="card-img-area">
          <img
            src="/scholarship-card.jpg"
            alt="Scholarship Card"
            className="card-img"
          />
          <div className="card-btn-mobile">
            <a href="/apply-scholarshipcard" className="card-btn">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipDetails1;
