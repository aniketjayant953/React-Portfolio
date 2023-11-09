import './App.css';
import './swiper-bundle.min.css'
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Slider } from './components/Slider';





const App = () => {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => { console.log(data)})
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

