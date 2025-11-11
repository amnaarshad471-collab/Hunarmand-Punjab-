import React, { useEffect, useRef, useState } from "react";
import "./WhyChooseHunarmandPunjab.css";

const statsData = [
  { number: 500000, text: "Students" },
  { number: 30, text: "National & International Trainers Experts", suffix: "+" },
  { number: 50000, text: "Scholarship Cards" },
  { number: 25, text: "Job Oriented Courses", suffix: "+" },
];

const WhyChooseHunarmandPunjab = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="platform white">
      <h1 className="font-40">Why choose Hunarmand Punjab</h1>
      <div className="stats row">
        {statsData.map((stat, index) => (
          <div className="stat col-lg-3 col-md-12" key={index}>
            <p className="font-48 m-0">
              <CountUpNumber
                target={stat.number}
                start={visible}
                suffix={stat.suffix}
              />
            </p>
            <p className="font-16 weight-400">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CountUpNumber = ({ target, start, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const stepTime = 15;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= target) {
        startValue = target;
        clearInterval(timer);
      }
      setCount(Math.floor(startValue));
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export default WhyChooseHunarmandPunjab;
