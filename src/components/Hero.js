import React from "react";
import Photo from "../assets/img/photo/photo3.jpg";

export default function Hero() {
  return (
    <header id="hero" className="hero-section">
      <div className="hero-content">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="glass-card">
              <div class="row g-5 align-items-center">
                <div class="col-md-4">
                  <img
                    alt="Portrait"
                    class="img-fluid rounded-circle shadow-lg"
                    src={Photo}
                  />
                </div>
                <div class="col p-4 d-flex flex-column position-static text-center">
                  <h1 className='"hero-title"'>Gwendoline Flahaut </h1>
                  <h2 className="hero-subtitle mb-3">
                    Designer Graphique & Illustratrice
                  </h2>
                  <h3 className="hero-subtitle">
                    Illustrations • Identités visuelles • Interfaces élégantes
                  </h3>
                  <p className="hero-subtitle">
                    Un univers où l'art rencontre la précision.
                  </p>
                </div>
                <div class="col p-4 d-flex flex-row position-static text-center">
                  <a href="#portfolio" className="btn btn-glass btn-lg mt-4">
                    Explorer mon travail
                  </a>
                  <a
                    href="https://www.canva.com/design/DAGi6ukODwc/coFKhUxnlBrskxBMeohsgg/view?utm_content=DAGi6ukODwc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb0c54f82a6"
                    className="btn btn-glass btn-lg mt-4"
                    download
                  >
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
