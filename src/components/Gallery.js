import React from 'react';

export default function Gallery({ images, imgPerRow }) {
    // const columns = [];
    const columns = Array.from({ length: imgPerRow }, () => []);
    images.forEach((img, index) => {
      columns[index % imgPerRow].push(img);
    });
    // const rows = Math.ceil(images.length / imgPerRow);
    // for (let i = 0; i < imgPerRow; i++) {
    //     columns.push(images.slice(i * rows, i * rows + rows));
    // }
      return (
    <div className="gallery-section w-100">
      <div className="row g-4">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="col-md-4 d-flex flex-column gap-4">
            {col.map((image, imgIndex) => (
              <div key={imgIndex} className="gallery-item">
                <figure  className="text-center" style={image.backgroundColor ? { backgroundColor: image.backgroundColor } : {}}>
                  <img
                    id={imgIndex}
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid"
                    style={image.height ? { height: image.height, objectFit: 'cover' } : {}}
                  />
                  {image.text && <figcaption className="mt-2 text-center">{image.text}</figcaption>}
                </figure>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
