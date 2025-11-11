import React, { useState } from "react";
import './VideoSection.css';

const VideoSection = () => {
  const videos = [
    "NC4ExcWTkOE",
    "Ss0cuzczCMM",
    "9dgJMrVYouo",
    "C1PEgg0x2iE",
    "_3hRDF_FQqQ",
    "N5OYV3PkDXo",
    "eisQK3Nv03g",
    "Prb2SI-2wtQ",
    "49Xr-WHgGGA",
    "MwaXTW0_jc8",
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <section className="video-section-container">
      <div className="main-video-section">
        <div className="main-video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${currentVideo}`}
            title="Hunarmand Punjab Video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="video-playlist-section">
        <h4 className="playlist-title">Video Playlist</h4>
        <div className="underline"></div>

        <div className="video-playlist">
          {videos.map((id, index) => (
            <div
              key={id}
              className={`video-thumbnail ${
                id === currentVideo ? "active" : ""
              }`}
              onClick={() => setCurrentVideo(id)}
            >
              <div className="thumbnail-image">
                <img
                  src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                  alt={`Video ${index + 1}`}
                />
                <div className="play-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;