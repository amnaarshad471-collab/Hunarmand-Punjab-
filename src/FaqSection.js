import React, { useState } from "react";
import "./FaqSection.css";

const faqs = [
  {
    question: "What is the Hunarmand Punjab Program?",
    answer: `Hunarmand Punjab initiative Supported by the Minister of School & Higher Education Rana Sikandar Hayat that offers free Advanced IT Courses, Laptop Scheme, Solar Scheme, Study Abroad Consultancy, Taleem Finance under the Scholarship Card to empower the youth of Punjab under the policy of hunarmand punjab.`,
  },
  {
    question: "Who can apply for the program?",
    answer: (
      <ul>
        <li>Is a resident of Punjab or Pakistani</li>
        <li>No Age Limit is Required</li>
        <li>Has a valid CNIC or B-Form</li>
        <li>Meets the basic education criteria of the selected course</li>
      </ul>
    ),
  },
  {
    question: "Is there any fee for the courses?",
    answer: `All the courses under Hunarmand Punjab are completely free of cost. Only processing charges will be paid by students & will be reimbursed after the completion of final evaluation test according to the policy of Hunarmand Punjab.`,
  },
  {
    question: "How do I apply?",
    answer: (
      <>
        Apply online at:{" "}
        <a href="https://www.hunarmandpunjab.pk" target="_blank" rel="noreferrer">
          www.hunarmandpunjab.pk
        </a>
      </>
    ),
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer: (
      <>
        After successful completion, you'll get an <strong>authorized e-certification</strong> by Hunarmand Punjab
        which will be verifiable online. Furthermore, you'll be able to join our Internships and other benefits under
        Hunarmand Punjab Program after completing any course.
      </>
    ),
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section container pt-5 pb-5">
      <p className="faq-subtitle">FAQ</p>
      <h2 className="faq-title text-center pb-5">Frequently Asked Questions</h2>

      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-header ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="icon">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div className={`accordion-body ${openIndex === index ? "show" : ""}`}>
              <div className="body-content">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
