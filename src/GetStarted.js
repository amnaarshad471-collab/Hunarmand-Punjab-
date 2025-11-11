import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GetStarted.css";

const steps = [
  {
    num: "01",
    icon: "fa-user-plus",
    title: "Create Account",
    desc: "Register your free Hunarmand Punjab account in seconds",
  },
  {
    num: "02",
    icon: "fa-lock",
    title: "Login Candidate Portal",
    desc: "Login your candidate portal with registered email & password",
  },
  {
    num: "03",
    icon: "fa-file",
    title: "Submit Application",
    desc: "Complete and submit your application form",
  },
  {
    num: "04",
    icon: "fa-pen-to-square",
    title: "Attempt Entry Test",
    desc: "Take the online assessment test",
  },
  {
    num: "05",
    icon: "fa-circle-check",
    title: "Confirm Admission",
    desc: "Receive confirmation and start learning",
  },
  {
    num: "06",
    icon: "fa-id-card",
    title: "Scholarship Card",
    desc: "Receive confirmation & get scholarship card on merit-based",
  },
];

const GetStarted = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="getstarted-section">
      <div className="container">
        <div className="steps" data-aos="fade-up">
          <h2 className="steps-title text-reveal">
            <span>How to Get Started with Hunarmand Punjab </span>
           
          </h2>

          <p className="steps-subtext1">
          It's easy to become a part of Hunarmand Punjab and start learning new skills.Here's what you need to do: </p>
          <p className="steps-highlight1">
            Your Steps During The Application Process
          </p>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="step-num">{step.num}</p>
                <i className={`fa-solid ${step.icon} step-icon`}></i>
                <p className="step-title">{step.title}</p>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
