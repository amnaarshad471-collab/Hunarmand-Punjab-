import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./AboutDetails.css";

const CourseDetails = () => {
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
        Courses
          </h1>
          <p className="about-desc">
Hunarmand Punjab courses are not just different — they are revolutionary. Designed with hands-on practice, live projects, and international standards, we prepare you to lead in today's global digital economy.          </p>
        </div>

        <div className="about-image">
          <img src="/IT-Courses.jpg" alt="IT" />
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;