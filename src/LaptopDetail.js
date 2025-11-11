import React, { useEffect, useRef, useState } from "react";
import "./SolarDetails.css";

const LaptopDetail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // toggle every time the element crosses the threshold
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        root: null,
        rootMargin: "0px",
      }
    );

    io.observe(sectionRef.current);

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section className="solar-section" ref={sectionRef}>
      <div className={`solar-container ${isVisible ? "visible" : ""}`}>
        <div className="solar-image-side">
          <img
            src="/Laptop Scheme Page Image (3).jpeg"
            alt="Laptop Scheme"
            className="solar-image"
          />
        </div>

        <div className="solar-text-side">
          <h2 className="solar-title">
            Your Digital Future Starts Here – Free Laptops for Eligible Students
          </h2>

          <p className="solar-desc">
            The Laptop Scheme, launched under the visionary leadership of
            Minister of School & Higher Education Rana Sikandar Hayat, ensures
            that eligible students who meet our criteria never fall behind due
            to a lack of digital access.
          </p>

          <p className="solar-desc">
            This initiative provides laptops to students enrolled in Hunarmand
            Punjab who pass the final evaluation test as per policy, enabling
            them to participate in online classes, complete practical
            assignments, and launch their freelance or tech careers with
            confidence.
          </p>

          <div className="solar-benefits">
            <p className="solar-benefits-heading">
              ⚡ What the Laptop Scheme Delivers:
            </p>
            <ul>
              <li>A Brand-New Laptop — Absolutely Free</li>
              <li>Unlimited Access to Online Classes & Tools</li>
              <li>Empowerment to Learn, Create & Earn from Anywhere</li>
              <li>Fuel for Freelancing, Tech Startups & Career Growth</li>
              <li>A Level Playing Field for All Learners</li>
            </ul>
          </div>

          <p className="solar-highlight">Light Up Your Learning — Apply Now!</p>
          <p className="solar-desc">
            Apply today, get a chance to avail your laptop, and unlock a world
            of digital opportunities.
          </p>

          <div className="solar-btn-area">
            <a href="/apply-scholarshipcard" className="btn-green">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopDetail;
