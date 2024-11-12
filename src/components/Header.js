// Header.js
import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Cristian Santamaría</h1>
      <h2>Desarrollador Full Stack</h2>
      <p>
        Desarrollador apasionado con experiencia en soluciones en la nube y desarrollo de aplicaciones modernas.
      </p>
      <div className="header-buttons">
        <a 
          href="https://drive.google.com/file/d/19nLtMCDyqz2_2JoAk-_lYqNPBwb0cDUQ/view?usp=drive_link" 
          className="btn" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ display: 'inline-block', width: '200px', textAlign: 'center' }}>
          Descargar CV
        </a>
        <a 
          href={`https://api.whatsapp.com/send?phone=${encodeURIComponent("+50498582668")}`} 
          className="btn" 
          style={{ display: 'inline-block', width: '200px', textAlign: 'center' }}>
          WhatsApp
        </a>
      </div>
    </motion.header>
  );
}

export default Header;

