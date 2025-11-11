import React, { useEffect, useState } from "react";
import "./CoursesCategory.css";
import {  Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faShieldAlt,
  faPenNib,
  faBullhorn,
  faStore,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const CoursesCategory = () => {
  const [, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    { icon: faLaptopCode, title: "Artificial Intelligence" },
    { icon: faShieldAlt, title: "Cyber Security" },
    { icon: faPenNib, title: "Amazon VA" },
    { icon: faBullhorn, title: "Digital Marketing & AI" },
    { icon: faStore, title: "Shopify & Daraz" },
    { icon: faChartLine, title: "React & Node JS Web Development" },
    { icon: faPython, title: "Python Programming" },
    { icon: faReact, title: "MERN Stack Development" },
  ];

  return (
    <section className="courses-cat">
      <div className="container">
        <p className="cat-subtitle">
     <Button className="about-btn-course">Courses Category</Button>
        </p>
        <h1 className={`cat-title  }`}>
        Courses Category
        </h1>

       <div className="course-grid">
  {courses.map((course, index) => (
    <div key={index} className="course-box">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={course.icon} className="course-icon" />
      </div>
      <div className="course-info">
        <p className="course-title">{course.title}</p>
        <p className="course-subtitle">
          <a className="course-subtitle" href="/Courses"> View Course</a>
         </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default CoursesCategory;
