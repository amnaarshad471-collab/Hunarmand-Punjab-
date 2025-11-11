import React, { useEffect } from "react";
import "./OurCourses.css";
import AOS from "aos";
import {  Button } from "react-bootstrap";
import "aos/dist/aos.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const courses = [
  {
    title: "Amazon Virtual Assistant",
    img: "/Amazon Virtual Assistant.ecc5048b4d10e2c4c3ba.jpg",
    delay: 0,
  },
  {
    title: "Full Stack Digital Marketing & AI",
    img: "/Full Stack Digital Marketing & AI.01de78f93832402ff589.jpg",
    delay: 0,
  },
  {
    title: "Shopify & Daraz Business",
    img: "/Shopify & Daraz Business.82367a55a7887e17ecfb.jpg",
    delay: 200,
  },
  {
    title: "Full Stack Graphic Designing & AI",
    img: "/Full Stack Graphic Designing & AI.f8e8dc5598430831cff2.jpg",
    delay: 200,
  },
  {
    title: "UI/UX Designing for Web & App",
    img: "/UIUX Designing for Web & App.3db2d93d037a25a582fe.jpg",
    delay: 400,
  },
  {
    title: "WordPress Website Development",
    img: "/WordPress Website Development.4e65e26a510127fc6452.jpg",
    delay: 400,
  },
];

const CourseCategory = () => {
  useEffect(() => {
    AOS.init({ duration: 800,  });
  }, []);

  return (
    <section className="courses-section">
      <div className="row-header">
        <div className="text-col">
          <h2 className="heading">
                 <Button className="about-btn-course1">Our Courses</Button>
            <p className="text-reveal mb-0">
              <span>Learn,&nbsp;</span>
              <span>grow,&nbsp;</span>
              <span>succeed&nbsp;</span>
            </p>
          </h2>
          <p className="description">
            Hunarmand Punjab equips youth with in-demand digital skills through
            hands-on practical training based on an internationally recognized
            curriculum — empowering them to secure online job opportunities and
            thrive in the global digital economy.
          </p>
        </div>
        <div className="btn-col">
          <a href="/Courses">
            <button className="btn-green view-all">View All Courses</button>
          </a>
        </div>
      </div>

      <div className="courses-wrapper">
        {courses.map((course) => (
          <div
            className="course-card"
            key={course.title}
            data-aos="fade-up"
            data-aos-delay={course.delay}
          >
            <img src={course.img} alt={course.title} className="course-img" />
            <div className="course-details">
              <p className="course-card-title">{course.title}</p>
              <p className="by-text">By Hunarmand Punjab</p>
              <div className="rating">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="rate">4.9</span>
              </div>
              <a href="/Courses">
                <button className="btn-green-sq">View Details</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCategory;
