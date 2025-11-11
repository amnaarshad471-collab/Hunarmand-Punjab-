import React, { useState } from "react";
import "./CourseGrid.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const initialCourses = [
  {
    title: "Amazon Virtual Assistant",
    img: "/Amazon Virtual Assistant.ecc5048b4d10e2c4c3ba.jpg",
    rating: 4.9,
  },
  {
    title: "Full Stack Digital Marketing & AI",
    img: "/Full Stack Digital Marketing & AI.01de78f93832402ff589.jpg",
    rating: 4.9,
  },
  {
    title: "Shopify & Daraz Business",
    img: "/Shopify & Daraz Business.82367a55a7887e17ecfb.jpg",
    rating: 4.9,
  },
  {
    title: "Full Stack Graphic Designing & AI",
    img: "/Full Stack Graphic Designing & AI.f8e8dc5598430831cff2.jpg",
    rating: 4.9,
  },
  {
    title: "UI/UX Designing for Web & App",
    img: "/UIUX Designing for Web & App.3db2d93d037a25a582fe.jpg",
    rating: 4.9,
  },
  {
    title: "WordPress Website Development",
    img: "/WordPress Website Development.4e65e26a510127fc6452.jpg",
    rating: 4.9,
  },
];

const moreCourses = [
  {
    title: "React & Node.js Full Stack Development",
    img: "/React & Node js Full Stack Development.a64db653bae002aed884.jpg",
    rating: 4.9,
  },
  {
    title: "MERN Stack Web Development",
    img: "/MERN Stack Web Development.21d5d2da9481a6d63cd0.jpg",
    rating: 4.9,
  },
  {
    title: "PHP Laravel Web Development",
    img: "/PHP Laravel Web Development.4c3433c8acd8de7c1ed5.jpg",
    rating: 4.9,
  },
  {
    title: "Python Programming for Everyone",
    img: "/Python Programming for Everyone.54a4bf9aa64b089c4144.jpg",
    rating: 4.9,
  },
  {
    title: "Video Editing & Animation",
    img: "/Video Editing & Animation.235304fdda6c10848086.jpg",
    rating: 4.9,
  },
  {
    title: "Artificial Intelligence (AI)",
    img: "/Artificial Intelligence (AI).f1b9a226b659c8eb0251.jpg",
    rating: 4.9,
  },
  {
    title: "Machine Learning & Data Science",
    img: "/Machine Learning & Data Science.ad01d32f448fd4381d30.jpg",
    rating: 4.9,
  },
  {
    title: "National Cyber Security",
    img: "/National Cyber Security.504c29a82945a81ed222.jpg",
    rating: 4.9,
  },
  {
    title: "IELTS Preparation",
    img: "/IELTS Preparation.3983ee0eff97d36cab9f.jpg",
    rating: 4.9,
  },
  {
    title: "Freelancing Program",
    img: "/Freelancing Program.9082e05330990ed4123b.jpg",
    rating: 4.9,
  },
  {
    title: "Architectural Visualization with Blender 3D",
    img: "/Architechtural Visualization with Blender 3D.ef6d916501efb0f99ffd.jpg",
    rating: 4.9,
  },
  {
    title: "Textile Designing",
    img: "/Textile Designing.a11f4d6b369912c3d0af.jpg",
    rating: 4.9,
  },
  {
    title: "Digital Embroidery",
    img: "/Digital Embroidery.16ebe2250ea3c9edf4f3.jpg",
    rating: 4.9,
  },
  {
    title: "Cross platform Flutter App Development",
    img: "/Flutter App Development.2f34a469e61de443df8f.jpg",
    rating: 4.9,
  },
  {
    title: "BlockChain Development",
    img: "/Blockchain Development.7d4a92463ab79325cb37.jpg",
    rating: 4.9,
  },
  {
    title: "Forex Trading",
    img: "/Forex Trading.95fd088ef2319b2cdd31.jpg",
    rating: 4.9,
  },
  {
    title: "Penetration Testing Web Hacking",
    img: "/Penetration Testing.df2bfa1aa2081eed016a.jpg",
    rating: 4.9,
  },
  {
    title: "Advanced Google Ads",
    img: "/Advanced Google Ads.47c06445a834606d10d9.jpg",
    rating: 4.9,
  },
  {
    title: "Search Engine Optimization - SEO",
    img: "/SEO.cc6ed711d33bf25003f8.jpg",
    rating: 4.9,
  },
  {
    title: "YouTube Monetization",
    img: "/YouTube Monetization.bc14a39e6f9a6565bc1d.jpg",
    rating: 4.9,
  },
];

const CourseGrid = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    if (!showMore) {
      setCourses([...courses, ...moreCourses]);
      setShowMore(true);
    }
  };

  return (
    <section className="cg-section">
      <div className="courses-wrapper">
        {courses.map((course, index) => (
          <div className="cg-card" 
          key={index}>
            <img src={course.img} alt={course.title} className="cg-image" />
            <div className="cg-card-body">
              <h3 className="cg-course-title">{course.title}</h3>
              <p className="cg-by">By Hunarmand Punjab</p>
              <div className="cg-rating">
                <div className="cg-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="cg-rate">{course.rating}</span>
              </div>
              <button className="cg-btn-details">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {!showMore && (
        <div className="text-center mt-5">
          <button className="btn-green" onClick={handleShowMore}>
            More Courses
          </button>
        </div>
      )}
    </section>
  );
};

export default CourseGrid;
