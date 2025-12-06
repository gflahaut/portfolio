import React, { useEffect } from 'react';

export default function TiktokGallery({ tiktokUrls }) {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
  return (
    <div className="tiktok-gallery d-flex flex-wrap gap-4 justify-content-center">
      {tiktokUrls.map((url, index) => (
        <div key={index} className="tiktok-card" style={{ minWidth: '325px', maxWidth: '605px' }}>
          <blockquote 
            className="tiktok-embed" 
            cite={url}

            data-video-id={url.split('/video/')[1].split('?')[0]}
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            <section>
              <a target="_blank" title="TikTok Video" href={url}>Watch on TikTok</a>
            </section>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
