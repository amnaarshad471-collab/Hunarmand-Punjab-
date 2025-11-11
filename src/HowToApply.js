import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HowToApply.css";
import Howtoapply1 from "./Howtoapply1";

const steps = [
  {
    number: "01",
    title: "Step 1: Go to the Apply Section",
    description: "To apply for Hunarmand courses, navigate to the Apply section on our website.",
  },
  {
    number: "02",
    title: "Step 2: Click New Registration & Submit Admission Form",
    description: "Fill out the admission form by clicking on New Registration and provide all necessary details.",
  },
  {
    number: "03",
    title: "Step 3: Verify Your Admission Application",
    description: "To verify your Pakistan residency, documents latest Degree Certificate etc.",
  },
  {
    number: "04",
    title: "Step 4: Application Login Credentials Sent To Your Email",
    description: "Check your email for the login credentials needed to access your application.",
  },
  {
    number: "05",
    title: "Step 5: Visit Back & Login Using Given Credentials",
    description: "Log in to your account using the provided credentials, and start your Online Admission Test.",
  },
  {
    number: "06",
    title: "Step 6: Admission Test Result",
    description: "If you qualify, you will proceed to the next steps. If not, you can try again in the next batch after 3 months.",
  },
  {
    number: "07",
    title: "Step 7: Application Processing & Confirm Your Seat",
    description: "If you pass the admission test, you will be prompted to pay a minor ...",
  },
  {
    number: "08",
    title: "Step 8: Application Review",
    description: "Your application will be reviewed by our team to ensure all details and documents are in order.",
  },
  {
    number: "09",
    title: "Step 9: LMS Access",
    description: "Final verification by our team will ensure all details and documents are correct....",
  },
  {
    number: "10",
    title: "Step 10: Scholarship Card",
    description: "If you're eligible, you will receive a Scholarship Card. This card confirms your scholarship ...",
  },
];

const HowToApply = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
    <Howtoapply1 />
    <section className="apply-section">
      <div className="container">
        <div className="row justify-content-center pt-5 pb-5">
          <div className="col-lg-8">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/MwaXTW0_jc8"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-center pt-4">How to Apply</h3>
            <p className="text-center">
              Learn how to easily apply using our step-by-step guide.
            </p>
          </div>
        </div>
      </div>

      <div className="cus-container">
        <div className="timeline-line"></div> {/* Center line */}
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div className="row mb-4 timeline-row" key={step.number}>
              {isLeft && (
                <>
                  <div className="col-lg-5">
                    <div
                      className="process-box process-left"
                      data-aos="fade-right"
                    >
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="process-step">
                            <p>Step</p>
                            <h2>{step.number}</h2>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <h5>{step.title}</h5>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 d-flex justify-content-center">
                    <div className="timeline-point"></div>
                  </div>
                  <div className="col-lg-5"></div>
                </>
              )}
              {!isLeft && (
                <>
                  <div className="col-lg-5"></div>
                  <div className="col-lg-2 d-flex justify-content-center">
                    <div className="timeline-point"></div>
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="process-box process-right"
                      data-aos="fade-left"
                    >
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="process-step">
                            <p>Step</p>
                            <h2>{step.number}</h2>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <h5>{step.title}</h5>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default HowToApply;
