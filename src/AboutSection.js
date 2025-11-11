import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {  Button } from "react-bootstrap";
import './AboutSection.css';

const AboutSection = () => {
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
    <section className="about-section">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <div className="about-content">
         <Button className="about-btn">Hunarmand Punjab</Button>
        <br /> <br /> 
        <h1 className="About-h1">Minister of School & Higher Education, Punjab</h1>
        <p className="About-p">
         <b>Hunarmand Punjab</b> initiative with the appreciation of our Honourable Minister of School & Higher Education, Punjab <b> Rana Sikandar Hayat</b>, aimed at providing IT-Skills to youth enrolled in the training program. Hunarmand Punjab Scholarship Card enables eligible trainees to access free advanced IT Trainings, laptop scheme, solar scheme, Taleem finance, study abroad & more in a transparent, secure, and efficient manner & ensure that every learner receives skill-based training.
        </p>
      </div>
    </section>
  );
};



export default AboutSection ;
