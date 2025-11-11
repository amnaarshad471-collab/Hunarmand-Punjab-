import React, { useEffect, useRef, useState } from "react";
import "./SolarDetails.css";

const SolarDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
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
            src="/Solar Scheme Page Image (2).jpeg"
            alt="Solar Scheme"
            className="solar-image"
          />
        </div>

        <div className="solar-text-side">
          <h2 className="solar-title">
            Powering Your Dreams — Even When the Lights Go Out!
          </h2>

          <p className="solar-desc">
            In a world where digital learning is the future, uninterrupted power
            is a necessity, not a luxury. Hunarmand Punjab Solar Scheme provides
            solar energy systems to eligible students — so your learning never
            stops, no matter the power cuts.
          </p>

          <p className="solar-desc">
            This initiative removes a major barrier for students across
            underserved areas, ensuring reliable electricity to support online
            classes, skill development, and a brighter academic future —
            literally and figuratively.
          </p>

          <div className="solar-benefits">
            <p className="solar-benefits-heading">
              ⚡ Key Benefits of the Solar Scheme:
            </p>
            <ul>
              <li>Free Solar Panels</li>
              <li>Uninterrupted Power for Devices & Learning</li>
              <li>No More Load-Shedding Interruptions</li>
              <li>Eco-Friendly, Sustainable Energy Solution</li>
              <li>Perfect for Online Learning & IT Training</li>
            </ul>
          </div>

          <p className="solar-highlight">Light Up Your Learning — Apply Now!</p>
          <p className="solar-desc">
            Don’t let power cuts hold you back. With the Solar Scheme, your
            future stays fully charged — no matter where you live.
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

export default SolarDetails;
