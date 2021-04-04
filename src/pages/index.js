import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
