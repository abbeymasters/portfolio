import React from 'react';
import Header from '../components/Header';
// import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Home from '../container/Home';
import Portfolio from '../container/Portfolio';

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
