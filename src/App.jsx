import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Navbar from "./components/Navbar";
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Paintings from './components/Paintings';
import EmblaCarousel from "./components/EmblaCarousel";
import CardContainer from "./components/Card/CardContainer";
import CardDetailContainer from "./components/Card Detail/CardDetailContainer";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={

            [<EmblaCarousel key={1} />,
            <CardContainer key={2} />,
            <Contact key={3} />,
            <SocialMedia key={4} />]
            
          } />

          <Route path="/obras" element={<Paintings />} />
          <Route path="/obras/:id" element={<CardDetailContainer />} />

        </Routes>
      <Footer />
    </>
  );
}

export default App;
