import React from 'react';
import GCreaA from '../assets/img/creation/crea3.jpg';    
import GcreaC from '../assets/img/creation/crea8.jpg';
import GcreaD from '../assets/img/creation/crea9.jpg';
import GcreaF from '../assets/img/creation/crea16.jpg';  
import GcreaH from '../assets/img/creation/crea18.jpg';
import GcreaI from '../assets/img/creation/crea19.jpg';  
import GLogoA from '../assets/img/logo/logo2.jpg';
import GLogoB from '../assets/img/logo/logo1.png';
import GLogoC from '../assets/img/logo/logo3.jpg';  
import GLogoD from '../assets/img/logo/logo4.png';
import GLogoE from '../assets/img/logo/logo5.png';
import GLogoF from '../assets/img/logo/logo6.jpg';  
import TatooA from '../assets/img/tatoo/tatoo1.png';
import TatooB from '../assets/img/tatoo/tatoo2.jpg';  
import TatooC from '../assets/img/tatoo/tatoo4.jpeg';
import PersoCreaA from '../assets/img/persoCrea/affiche.jpg';

import PersoCreaC from '../assets/img/persoCrea/card1.jpg'; 
import PersoCreaD from '../assets/img/persoCrea/creation-perso-ezgif.com-resize.png';


import thumb1 from '../assets/img/website/website3.webp';
import thumb2 from '../assets/img/website/website2.webp';
import thumb3 from '../assets/img/website/website1.webp';


import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import TiktokGallery from '../components/TiktokGallery';

 
export default function Portfolio() {

   const Creations = [
    { src: GCreaA, alt: "Sexy Woman Blind" },
    { src: GcreaC, alt: "Titre 3" },
    { src: GcreaD, alt: "Titre 4" },
    { src: GcreaF, alt: "Titre 6" },
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

       const Tatoos = [
    { src: TatooA, alt: "Paper & Pixel" , text: "Projet : Agence Digitale" },
    { src: TatooB, alt: "Maison Vampire",  text: "Projet : Prêt-à-porter Gothique" }, 
    { src: TatooC, alt: "Just'in Harmony",  text: "Projet : Massage Bien-être" },
  ];

       const PersoCrea = [
    { src: PersoCreaA, alt: "Paper & Pixel" , text: "Projet : Agence Digitale" }, 
    { src: PersoCreaC, alt: "Just'in Harmony",  text: "Projet : Massage Bien-être" },
    { src: PersoCreaD, alt: "Le Continental",  text: "Projet : Casino" },
  ];
    const Publicites = [
      
      'https://www.tiktok.com/@scout2015/video/6718335390845095173',"https://www.tiktok.com/@maskperso/video/7480501214719855894", "https://www.tiktok.com/@maskperso/video/7480501214719855894?lang=fr" ]

  const videosGallery = [
    { 
      thumb: thumb1, 
      src: 'https://www.youtube.com/embed/SSdDKfxyloM',
      title : 'Les Petits Plats'
    },
    { 
      thumb: thumb2, 
      src: 'https://www.youtube.com/embed/KMXmArriwLc',
      title : 'Orinoco'
    },
    { 
      thumb: thumb3, 
      src: 'https://www.youtube.com/embed/lBl2jsY1V6s',
      title : 'Just\'in Harmony'
    },
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

        {/* Tatoot Draw Gallery Section */}
        <div className="col-12">
          <h3 className="text-center mb-4">Tatoo</h3>
                    <div className="glass-card Tatoo">
            <Gallery images={Tatoos} imgPerRow={3} className="Tatoo"/>
          </div>
        </div>

        {/* Personnalized Creation Gallery Section */}
        <div className="col-12">
          <h3 className="text-center mb-4">Créations Personnalisées</h3>
                    <div className="glass-card Perso-Crea">
            <Gallery images={PersoCrea} imgPerRow={3} className="Perso-Crea"/>
          </div>
        </div>

        {/* Publicites Gallery Section */}
        <div className="col-12">
          <h3 className="text-center mb-4">Publicites</h3>
                    <div className="glass-card Perso-Crea">
             <TiktokGallery tiktokUrls={Publicites}/>
          </div>
        </div>

        {/* Video Gallery Section */}
        <div className="col-12">
          <h3 className="text-center mb-4">Site Web crée</h3>
                    <div className="glass-card Video">
            <VideoGallery videos={videosGallery} itemsPerRow={3} className="Video"/>
          </div>
        </div>

      </div>
    </section>
  );
}