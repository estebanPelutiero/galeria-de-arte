import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import EmblaCarousel from "./components/EmblaCarousel";
import CardContainer from "./components/Card/CardContainer";

function App() {
  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <CardContainer />
    </>
  );
}

export default App;
