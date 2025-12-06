import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function VideoGallery( { videos, itemsPerRow }) {
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
          <figure id={'video-figure'+i}>
          <img src={video.thumb} id={i+'video'} className="video-gallery-thumb" alt={`Video ${i + 1}`} />
          <figcaption className='text-center'>{video.title}</figcaption>
          </figure>
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
