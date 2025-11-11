import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Login.css";

const ApplyNow = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "#079560" },
    },
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 400, links: { opacity: 1 } },
        push: { quantity: 4 },
      },
    },
    particles: {
      number: { value: 180, density: { enable: true } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 3 },
      },
      size: {
        value: { min: 1, max: 10 },
        animation: { enable: true, speed: 10 },
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2.5,
        outModes: "out",
      },
    },
  };

  return (
    <div className="login">
      <div className="particles-wrapper">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>

      <div className="applynow-container">
        <div className="applynow">
          <img
            className="apply-logo mb-4"
            alt="logo"
            src="/logo.png"
          />

          <h2 className="apply-title mb-4">
            Welcome to the Hunarmand Punjab Admission Portal!
          </h2>

          <p className="apply-text">
            Start by registering as a new applicant. Once registered, use your
            email and password to log in to the Candidate Portal <br /> and
            continue your application journey.
          </p>

          <div className="auth-buttons">
            <a href="/Admission">
              <button type="button" className="btn-green register-btn">
                New Registration
              </button>
            </a>
            <a href="/Login">
              <button type="button" className="btn-green register-btn">
                Candidate Login
              </button>
            </a>
            <a href="/Apply">
              <button type="button" className="btn-green register-btn">
                How It Works
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
