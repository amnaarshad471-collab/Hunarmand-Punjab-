import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="text-white">
              Need Assistance? Our Team is Just a Message Away!
            </h2>
            <a
              href="tel:03111133053"
              className="btn-green bg-transparent border-white text-white w-100 mt-3 rounded-2"
            >
              <i className="fas fa-phone me-1"></i> Helpline: 03-111-133-053
            </a>
            <a
              href="mailto:contact@hunarmandpunjab.pk"
              className="btn-green w-100 mt-3 rounded-2"
            >
              <i className="fas fa-envelope me-1"></i> contact@hunarmandpunjab.pk
            </a>
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label className="mb-2">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control p-3"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <label className="mb-2">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control p-3"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <label className="mb-2">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control p-3"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <label className="mb-2">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control p-3"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-lg-12 mb-3">
                  <label className="mb-2">Message</label>
                  <textarea
                    className="form-control p-3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>

                <div className="col-lg-12">
                  <button type="submit" className="btn-green w-100 mt-3 rounded-2">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
