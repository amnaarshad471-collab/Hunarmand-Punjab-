import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./AboutDetails.css";

const AboutDetails = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  
  const particlesOptions = {
    autoPlay: true,
    background: {
      color: { value: "#079560" },
    },
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 },
        },
        resize: { enable: true, delay: 0.5 },
      },
      modes: {
        grab: {
          distance: 400,
          links: { opacity: 1 },
        },
        push: { quantity: 4 },
      },
    },
    particles: {
      number: {
        value: 200, 
        density: { enable: true, width: 1920, height: 1080 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 3, sync: false },
      },
      size: {
        value: { min: 1, max: 10 },
        animation: { enable: true, speed: 10, sync: false },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
        attract: { enable: false },
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  };


  return (
    <section className="about-container1">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      
      <div className="about-inner">
        <div className="about-text">
         
          <h1 className="about-title">
         About Us
          </h1>
          <p className="about-desc">
            Ready to gain valuable digital skills? Hunarmand Punjab is dedicated to empowering the youth with the training needed to succeed in today’s job market.
          </p>
        </div>

        <div className="about-image">
          <img src="/AboutDetail.jpg" alt="Minister" />
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
