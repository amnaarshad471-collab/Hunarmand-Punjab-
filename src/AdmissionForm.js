import React from "react";
import "./AdmissionForm.css";
import { FaUser, FaClock, FaBook, FaFileAlt, FaCloudUploadAlt, FaEyeSlash } from "react-icons/fa";

const AdmissionForm = () => {
  return (
    <div className="register mb-5">
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-lg-4 px-0">
            <div className="stepers">
              <div className="d-flex align-items-center gap-3">
                <FaUser className="icon fs-3" />
                <div>
                  <h2 className="fs-5 fw-bold">Step:1</h2>
                  <p className="mb-0">Student Registration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 px-0">
            <div className="stepers">
              <div className="d-flex align-items-center gap-3">
                <FaBook className="icon fs-3" />
                <div>
                  <h2 className="fs-5 fw-bold">Step:2</h2>
                  <p className="mb-0">Attempt Online Admission Test</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 px-0">
            <div className="stepers">
              <div className="d-flex align-items-center gap-3">
                <FaFileAlt className="icon fs-2" />
                <div>
                  <h2 className="fs-5 fw-bold">Step:3</h2>
                  <p className="mb-0">Enrollment Confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form>
          <div className="text-center">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "200px" }}
            />
          </div>

          <h1 className="fs-5 fw-bold text-black text-center pt-4">Admission Form</h1>
          <p className="text-center text-pink">
            To Become eligible for scholarship card (free laptops, Solar scheme, Taleem Finance, Taleem Abroad,
            Advance Courses) you must be enrolled in one or more programs under Hunarmand Punjab.
          </p>

          <div className="mb-3">
            <label className="mb-2">Full Name <span className="text-danger">*</span></label>
            <input className="form-control p-3" placeholder="Enter your full name as per your CNIC/B-Form." />
          </div>

          <div className="mb-3">
            <label className="mb-2">Father's Name <span className="text-danger">*</span></label>
            <input className="form-control p-3" placeholder="Provide your father's name as per your CNIC." />
          </div>

          <div className="mb-3">
            <label className="mb-2">CNIC/B-Form Number <span className="text-danger">*</span></label>
            <input
              className="form-control p-3"
              placeholder="Enter your 13 digits CNIC or B-Form number without hyphenation"
              maxLength="13"
            />
          </div>

          <div className="mb-3">
            <label className="mb-2">Email Address <span className="text-danger">*</span></label>
            <input
              className="form-control p-3"
              type="email"
              placeholder="Provide your active email address."
              defaultValue="amnaarshad471@gmail.com"
            />
          </div>

          <div className="mb-3">
            <label className="mb-2">Mobile Number <span className="text-danger">*</span></label>
            <input
              className="form-control p-3"
              placeholder="Enter your mobile number e.g. 03001234567"
              maxLength="11"
            />
          </div>

          <div className="mb-3">
            <label className="mb-2">Date of Birth <span className="text-danger">*</span></label>
            <input className="form-control p-3" type="date" max="2025-11-03" />
          </div>

          <div className="mb-3">
            <label className="mb-2">Gender <span className="text-danger">*</span></label>
            <select className="form-select p-3">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="mb-2">Highest Qualification Attained <span className="text-danger">*</span></label>
            <select className="form-select p-3">
              <option value="">Select your highest educational qualification</option>
              <option value="matric">Matric</option>
              <option value="intermediate">Intermediate</option>
              <option value="bachelor">Bachelor / Higher</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="mb-2">First Course <span className="text-danger">*</span></label>
            <select className="form-select p-3">
              <option value="">Choose your Course</option>
              <option>Amazon Virtual Assistant</option>
              <option>Full Stack Digital Marketing & AI</option>
              <option>Shopify & Daraz Business</option>
              <option>Full Stack Graphic Designing & AI</option>
              <option>UI/UX Designing for Web & App</option>
              <option>WordPress Website Development</option>
              <option>React & Node.js Full Stack Development</option>
              <option>MERN Stack Web Development</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="mb-2">Second Course</label>
            <select className="form-select p-3">
              <option value="">Choose your Course (Optional)</option>
              <option>Amazon Virtual Assistant</option>
              <option>Full Stack Digital Marketing & AI</option>
              <option>Shopify & Daraz Business</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="mb-2">Referral Code (Optional)</label>
            <input className="form-control p-3" placeholder="Enter referral code if you have one" />
          </div>

          <div className="mb-3">
            <label className="mb-2">City <span className="text-danger">*</span></label>
            <input className="form-control p-3" placeholder="Enter your city of residence." />
          </div>

          <div className="mb-3">
            <label className="mb-2">Address <span className="text-danger">*</span></label>
            <textarea className="form-control p-3" placeholder="Enter your complete address." rows="3"></textarea>
          </div>

          <div className="mb-3">
            <label className="mb-2">Upload CNIC (Front Side) <span className="text-danger">*</span></label>
            <div className="drop_box">
              <FaCloudUploadAlt className="fa-3x mb-3 text-muted" />
              <header><h4>Click to choose or drop your file here</h4></header>
              <p>Accepted formats: jpg, jpeg, png, pdf (Max 5MB)</p>
              <input type="file" hidden accept=".jpg,.jpeg,.png,.pdf" />
            </div>
          </div>

          <div className="mb-3">
            <label className="mb-2">Upload CNIC (Back Side) <span className="text-danger">*</span></label>
            <div className="drop_box">
              <FaCloudUploadAlt className="fa-3x mb-3 text-muted" />
              <header><h4>Click to choose or drop your file here</h4></header>
              <p>Accepted formats: jpg, jpeg, png, pdf (Max 5MB)</p>
              <input type="file" hidden accept=".jpg,.jpeg,.png,.pdf" />
            </div>
          </div>

          <div className="mb-3 position-relative">
            <label className="mb-2">Password <span className="text-danger">*</span></label>
            <div className="position-relative">
              <input
                type="password"
                className="form-control p-3 pe-5"
                placeholder="Create a strong password (min 8 characters)"
                defaultValue="Mankera@4455"
              />
              <button type="button" className="btn-eye">
                <FaEyeSlash />
              </button>
            </div>
            <small className="text-success mt-1 d-block">Strong password</small>
          </div>

          <div className="mb-3 form-check">
            <input className="form-check-input" type="checkbox" id="agreement" />
            <label htmlFor="agreement" className="form-check-label">
              I declare that all the information provided is correct to the best of my knowledge, and I agree to the terms and conditions of the Hunarmand program. <span className="text-danger">*</span>
            </label>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success fw-bold text-white p-3 w-100">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
