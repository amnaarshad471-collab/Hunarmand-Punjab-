import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Solar.css";

const LaptopScheme = () => {
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
    <section className="solar-hero-container">
      <Particles id="solarParticles" init={particlesInit} options={particlesOptions} />

      <div className="solar-hero-inner">
        <div className="solar-hero-text">
          <h1 className="solar-hero-title">Hunarmand Laptop Scheme</h1>
          <p className="solar-hero-desc">
The Hunarmand Laptop Scheme, launched under the visionary leadership of Minister of School & Higher Education Rana Sikandar Hayat, ensures that eligible students who meet our criteria never fall behind due to a lack of digital access          </p>
        </div>

        <div className="solar-hero-image">
          <img src="/Laptop Scheme.jpg" alt="Solar Scheme" />
        </div>
      </div>
    </section>
  );
};

export default LaptopScheme;

