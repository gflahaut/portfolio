import React from 'react';
import heroImg from '../assets/img/photo/photo.jpg';

function About() {
    return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="section-title text-center">À Propos</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="glass-card">
              <div className="row g-5 align-items-center">
                <div className="col-md-4">
                  <img src={heroImg} alt="Portrait" className="img-fluid rounded-circle shadow-lg" />
                </div>
                <div className="col-md-8 text-md-start text-center">
                  <h3 className="mb-3">Gwendoline — Illustratrice & Designer</h3>
                  <p className="text-secondary">
                    Je crée des univers visuels subtils, élégants et émotionnels. Mélange de douceur artistique et de rigueur graphique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;