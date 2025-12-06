import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (activeVideo !== null) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [activeVideo]);

  const videos = [
    { 
      thumb: 'https://github.com/gflahaut/portfolio/blob/main/src/assets/img/website/website1.webp', 
      src: 'https://www.youtube.com/embed/SSdDKfxyloM' 
    },
    { 
      thumb: 'https://i.ytimg.com/an_webp/KMXmArriwLc/mqdefault_6s.webp?du=3000&sqp=CIGa0MkG&rs=AOn4CLCgca9kD1aFTfpm-2UvTu1Kx7dJZA', 
      src: 'https://www.youtube.com/embed/KMXmArriwLc' 
    },
    { 
      thumb: 'https://i.ytimg.com/an_webp/lBl2jsY1V6s/mqdefault_6s.webp?du=3000&sqp=CMnfzskG&rs=AOn4CLDxSmEr19105376vnR4-XPsCVLtqA', 
      src: 'https://www.youtube.com/embed/lBl2jsY1V6s' 
    },
  ];

  const openModal = (index) => {
    setActiveVideo(index);
  };

  const closeModal = () => {
    setActiveVideo(null);
  };

  return (
    <div className="video-gallery-grid">
      {videos.map((video, i) => (
        <div key={i} className="video-gallery-item" onClick={() => openModal(i)}>
          <img src={video.thumb} id={i+'video'} className="video-gallery-thumb" alt={`Video ${i + 1}`} />
        </div>
      ))}

            {activeVideo !== null && ReactDOM.createPortal(
        <div className="video-modal-backdrop" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-iframe-container">
              <iframe
                src={videos[activeVideo].src}
                title="Video"
                className="video-modal-iframe"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="video-modal-close-btn"
            >
              Close
            </button>
          </div>
        </div>,
        document.getElementById('modal-root')
      )}
    </div>
  );
}
