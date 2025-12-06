import React from 'react';
import GCreaA from '../assets/img/creation/crea3.jpg';  
import GCreaB from '../assets/img/creation/crea4.jpg';  
import GcreaC from '../assets/img/creation/crea8.jpg';
import GcreaD from '../assets/img/creation/crea9.jpg';
import GcreaE from '../assets/img/creation/crea14.jpg';
import GcreaF from '../assets/img/creation/crea16.jpg';  
import GcreaG from '../assets/img/creation/crea17.jpg';
import GcreaH from '../assets/img/creation/crea18.jpg';
import GcreaI from '../assets/img/creation/crea19.jpg';  
import GLogoA from '../assets/img/logo/logo2.jpg';
import GLogoB from '../assets/img/logo/logo1.png';
import GLogoC from '../assets/img/logo/logo3.jpg';  
import GLogoD from '../assets/img/logo/logo4.png';
import GLogoE from '../assets/img/logo/logo5.png';
import GLogoF from '../assets/img/logo/logo6.jpg';  
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';

 
export default function Portfolio() {

   const Creations = [
    { src: GCreaA, alt: "Titre 1" },
    { src: GCreaB, alt: "Titre 2" },
    { src: GcreaC, alt: "Titre 3" },
    { src: GcreaD, alt: "Titre 4" },
    { src: GcreaE, alt: "Titre 5" },
    { src: GcreaF, alt: "Titre 6" },
    { src: GcreaG, alt: "Titre 7" },
    { src: GcreaH, alt: "Titre 8" },
    { src: GcreaI, alt: "Titre 9" },
  ];

     const Logos = [
    { src: GLogoA, alt: "Paper & Pixel" , text: "Projet : Agence Digitale" },
    { src: GLogoB, alt: "Maison Vampire",  text: "Projet : Prêt-à-porter Gothique" },
    { src: GLogoC, alt: "Just'in Harmony",  text: "Projet : Massage Bien-être" }, 
    { src: GLogoD, alt: "Le Continental",  text: "Projet : Casino" },
    { src: GLogoE, alt: "Chiquita Re-Dress",  text: "Projet : Friperie" },
    { src: GLogoF, alt: "4woln4tion4rt",  text: "Projet : Illustratrice" },
  ];

      return (
    <section id="portfolio" className="container py-5">
            <h2 className="section-title text-center">Portfolio</h2>
      <div className="row gy-5">
        
        {/* Procreate Gallery Section */}
        <div className="col-12">
          <h3 className="text-center mb-4">Création Procreate</h3>
                    <div className="glass-card Creation-Procreate">
            <Gallery images={Creations} imgPerRow={3} className="Creation-Procreate"/>
          </div>
        </div>

        {/* Logo Gallery Section */}
        <div className="col-12">
          <h3 className="text-center mb-4">Logo</h3>
                    <div className="glass-card Logo">
            <Gallery images={Logos} imgPerRow={3} className="Logo"/>
          </div>
        </div>

        {/* Video Gallery Section */}
        <div className="col-12">
          <h3 className="text-center mb-4">Site Web crée</h3>
                    <div className="glass-card Video">
            <VideoGallery itemsPerRow={3} className="Video"/>
          </div>
        </div>

      </div>
    </section>
  );
}