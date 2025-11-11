import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <div className="footer-logo-box">
              <img
                src="/logo-white.71d99a5f6b740fc179a4.png"
                alt="Hunarmand Punjab"
                className="footer-logo"
              />
            </div>
            <p className="footer-desc">
              Provide training to 500,000 students and make them professional earners.
            </p>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/hunarmandpunjab.pk"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/hunarmandpunjab.pk/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@hunarmandpunjab"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Links</h3>
              <a href="/Home">Home</a>
              <a href="/Courses">Courses</a>
              <a href="/Scholarship">Scholarship Cards</a>
              <a href="/ApplyNow">Apply Now</a>
              <a href="/FAQ">FAQs</a>
            </div>

            <div className="footer-column">
              <h3>About</h3>
              <a href="/About">About Us</a>
              <a href="/ContactSection">Contact Us</a>
              <a href="/Apply">Terms & Policy</a>
              <a href="/News">Privacy Policy</a>
            </div>

            <div className="footer-column contact">
              <h3>Contact Us</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> Head Office: Sabzazar,
                Lahore <br />
                Test Venue: E-Library, Lahore
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> 03-111-133-053
              </p>
              <p>
                <i className="fas fa-envelope"></i> support@hunarmandpunjab.pk
              </p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="footer-bottom">
          <p>© 2025 Hunarmand Punjab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
