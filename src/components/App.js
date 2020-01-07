import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Home from '../container/Home';
import Portfolio from './Portfolio';

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <Footer />
    </>
  );
}
