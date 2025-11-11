import React from "react";
import "./NewsSection.css";

const newsVideos = [
  {
    title:
      "Honorable Guest Adnan Afzal Chattha, Chairperson of the CM Task Force for Skills Development, addressing in the inauguration of Hunarmand Punjab.",
    src: "https://www.youtube.com/embed/NC4ExcWTkOE",
  },
  {
    title:
      "Inauguration of Hunarmand Punjab by Minister of School & Higher Education Rana Sikanadar Hayat",
    src: "https://www.youtube.com/embed/Ss0cuzczCMM",
  },
  {
    title: "1st Time in Pakistan Launching Laptop Scheme",
    src: "https://www.youtube.com/embed/49Xr-WHgGGA",
  },
  {
    title: "Launching Scholarship Card (Only 50,000 Available)",
    src: "https://www.youtube.com/embed/MwaXTW0_jc8",
  },
  {
    title:
      "500,000 Free IT Courses under the Ministry of School & Higher Education Rana Sikanadar Hayat",
    src: "https://www.youtube.com/embed/Prb2SI-2wtQ",
  },
  {
    title:
      "Interview with Honorable Guest Prof. Dr. Yasir Ayaz | NCAI Pakistan | Inauguration Hunarmand Punjab",
    src: "https://www.youtube.com/embed/9dgJMrVYouo?si=EDkwLoZ5ictyxJnl",
  },
  {
    title:
      "Interview with Honorable Guest Dr. Wajahat Qazi | Comsats University | Inauguration Hunarmand Punjab",
    src: "https://www.youtube.com/embed/_3hRDF_FQqQ?si=0-0000000000000000",
  },
  {
    title:
      "Interview with Honorable Guest Dr. Yasir Niaz Khan | CTO PSCA | Inauguration Hunarmand Punjab",
    src: "https://www.youtube.com/embed/N5OYV3PkDXo?si=0-0000000000000000",
  },
  {
    title:
      "Laptop Winner Highlights | Minhal Raza From Sargodha | Inauguration Hunarmand Punjab",
    src: "https://www.youtube.com/embed/JWXBm9v2QyY?si=0-0000000000000000",
  },
  {
    title:
      "Laptop Winner Highlights | Abdul Rehman from Lahore | Inauguration Hunarmand Punjab",
    src: "https://www.youtube.com/embed/DgXT0twJJFI?si=0-0000000000000000",
  },
];

const NewsSection = () => {
  return (
    <section className="news pt-5 pb-5 text-center">
      <h2 className="mb-3">Latest News & Events</h2>
      <p>
        Stay up-to-date with all the latest developments at Hunarmand. From new
        course launches to special <br /> events, find out what's happening and
        how you can get involved in shaping the future of Hunarmand Punjab
        <br /> skilled workforce. Keep an eye on this space for exciting
        announcements and opportunities!
      </p>

      <div className="container pt-5 px-4">
        <div className="row justify-content-center">
          {newsVideos.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="course h-100 p-0">
                <div className="course-card-details h-100 d-flex flex-column gap-2 justify-content-between align-items-start">
                  <h6 className="mb-2 font-18 text-start">{item.title}</h6>
                  <div className="video-wrapper w-100">
                    <div className="vid-container">
                      <iframe
                        src={item.src}
                        title={item.title}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <button className="btn-green-sq">
                    Read More <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
