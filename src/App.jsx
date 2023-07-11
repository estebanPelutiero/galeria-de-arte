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

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={

            [<EmblaCarousel key={1} />,
            <CardContainer key={2} />,
            <SocialMedia key={3}/>,
            <Contact key={4}/>]
            
          } />

          <Route path="/obras" element={<Paintings />} />
          <Route path="/obras/:id" element={<CardDetailContainer />} />

        </Routes>
    </>
  );
}

export default App;
