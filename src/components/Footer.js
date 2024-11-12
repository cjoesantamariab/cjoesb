// Footer.js
import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2023 Cristian Santamaría. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/cristian-santamaria-870841134/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/cjoesantamariab" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent("+50498582668")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </motion.footer>
  );
}

export default Footer;
