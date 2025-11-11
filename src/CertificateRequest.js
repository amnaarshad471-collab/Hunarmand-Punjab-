import React from "react";
import "./CertificateRequest.css";
import { FaUser, FaEnvelope, FaIdCard, FaBook, FaFileAlt } from "react-icons/fa";

const CertificateRequest = () => {
  return (
    <section className="certificate-section pt-5 pb-5">
      <div className="container">
        <div className="certificate-box p-5 rounded-4 shadow">
          <h3 className="text-center mb-5 text-dark">
            Request Your Official Hunarmand Certificate
          </h3>

          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="mb-2 fw-semibold text-dark">
                  <FaUser className="me-2" /> Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control p-3"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label className="mb-2 fw-semibold text-dark">
                  <FaEnvelope className="me-2" /> Email Address{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control p-3"
                  placeholder="Enter Email Address"
                  type="text"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label className="mb-2 fw-semibold text-dark">
                  <FaIdCard className="me-2" /> CNIC No{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control p-3"
                  placeholder="Enter CNIC No"
                  type="text"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label className="mb-2 fw-semibold text-dark">
                  <FaBook className="me-2" /> Course Track{" "}
                  <span className="text-danger">*</span>
                </label>
                <select className="form-select p-3" defaultValue="">
                  <option value="" disabled>
                    Choose your Course
                  </option>
                  <option>Advanced Amazon Virtual Assistant</option>
                  <option>Full Stack Digital Marketing & AI</option>
                  <option>Advanced Shopify & Daraz</option>
                  <option>Full Stack Graphic Designing & AI</option>
                  <option>Advanced UIUX Designing with AI for Web & APP</option>
                  <option>WordPress Website Development</option>
                  <option>Full Stack Web Development with React & Node JS</option>
                  <option>MERN Stack Web Development</option>
                  <option>Advanced PHP Laravel Web Development</option>
                  <option>Python Programming for Everyone</option>
                  <option>Web Development with Python Django</option>
                  <option>Search Engine Optimization - SEO</option>
                  <option>Advanced Google Ads</option>
                  <option>National Cyber Security</option>
                  <option>Penetration Testing Web Hacking</option>
                  <option>Video Editing & Animation</option>
                  <option>Artificial Intelligence</option>
                  <option>Machine Learning & Data Science</option>
                  <option>Forex Trading</option>
                  <option>BlockChain Development</option>
                  <option>Cross platform Flutter App Development</option>
                  <option>CGI Ads</option>
                  <option>Architectural Visualization with Blender 3D</option>
                  <option>Digital Embroidery</option>
                  <option>Textile Designing</option>
                  <option>Ielts</option>
                  <option>Freelancing Program</option>
                </select>
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="btn-apply rounded-2">
                <FaFileAlt className="me-2" />
                Apply For Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateRequest;
