import React from 'react';

export default function Gallery({ images, imgPerRow }) {
    const columns = [];
    const rows = Math.ceil(images.length / imgPerRow);
    for (let i = 0; i < imgPerRow; i++) {
        columns.push(images.slice(i * rows, i * rows + rows));
    }
      return (
    <div className="gallery-section w-100">
      <div className="row g-4">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="col-md-4 d-flex flex-column gap-4">
            {col.map((image, imgIndex) => (
              <div key={imgIndex} className="gallery-item">
                <figure>
                  <img
                    id={imgIndex}
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid"
                  />
                  {image.text && <figcaption className="mt-2">{image.text}</figcaption>}
                </figure>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
