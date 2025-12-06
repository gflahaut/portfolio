import React from 'react';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
