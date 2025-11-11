import React, { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

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

      <div className="login-form">
        <div className="text-center mb-4">
          <img
            alt="logo"
            src="/logo.png"
            className="login-logo"
          />
        </div>

        <div className="text-center mb-4">
          <h5>CANDIDATE LOGIN</h5>
        </div>

        <form>
          <div className="mb-3">
            <label className="mb-2" htmlFor="email">
              Email <span className="text-danger">*</span>
            </label>
            <input
              className="form-control p-3"
              placeholder="Enter your email"
              required
              type="email"
              name="email"
            />
          </div>

          <div className="mb-3">
            <label className="mb-2" htmlFor="password">
              Password <span className="text-danger">*</span>
            </label>
            <div className="position-relative">
              <input
                className="form-control p-3 pe-5"
                placeholder="Enter your password"
                required
                type={passwordVisible ? "text" : "password"}
                name="password"
              />
              <button
                type="button"
                className="btn-eye"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="text-end">
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-green register-btn btn w-100 mt-3 rounded-2">
            Login
          </button>

          <div className="text-center mt-3 fs-6">
            <span>Don't have an account? </span>
            <a href="/register">New Registration</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
