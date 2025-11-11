import React from "react";
import "./WhoWeAre.css";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="container">
        <div className="row pt-5 pb-5 align-items-center">
          
          {/* LEFT SIDE IMAGE */}
          <motion.div
            className="col-lg-6 col-md-12 mb-4 mb-lg-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <img
              src="/Abstract-Profile-Photo-Instagram-Post-1.webp"
              alt="mission"
              className="w-100 "
            />
          </motion.div>

          {/* RIGHT SIDE TEXT */}
          <motion.div
            className="col-lg-6 col-md-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="section-label">
              <Button className="about-btn-Who">Who We Are</Button>
            </p>

            <h2 className="section-title1">
              <span>Grow Your Skills and Career with Hunarmand Punjab</span>
            </h2>

            <p className="section-description">
              Welcome to Hunarmand Punjab! We're here to help the young people
              of Punjab get the digital skills they need to find good jobs. Our
              goal is to train 500,000 students and help them become
              professional earners. We want to lower unemployment and make
              Punjab's economy stronger by teaching skills that are in demand.
            </p>

            <p className="section-subtitle">Our Mission</p>
            <p className="mission-text">
              To provide training to 500,000 students and make them professional
              earners.
            </p>

            <div className="row mt-4">
              <div className="col-md-6 mb-4">
                <div className="info-card">
                  <img
                    src="/13.png"
                    alt="Instructor Icon"
                    className="info-icon"
                  />
                  <h5>Professional Instructors</h5>
                  <p>
                    Learn from dedicated industry experts and grow your digital
                    skills.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="info-card">
                  <img
                    src="/14.png"
                    alt="Courses Icon"
                    className="info-icon"
                  />
                  <h5>25+ Courses</h5>
                  <p>
                    You'll find a lot of different courses to help you learn new
                    skills!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
