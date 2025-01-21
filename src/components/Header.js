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
      <h2>Ingeniero en Computación | Desarrollador Full Stack | Desarrollador en la Nube | Arquitecto de Soluciones Asociado de AWS</h2>
      <p>
        Desarrollador apasionado con experiencia en soluciones en la nube, aplicaciones modernas y certificado como Arquitecto de Soluciones Asociado de AWS.
      </p>
      <div className="header-buttons">
        <a 
          href="https://drive.google.com/file/d/1O9qEazSv4pk8_foHB8c9iz1M25hfeBBP/view?usp=drive_link" 
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

