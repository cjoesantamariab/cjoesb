import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
