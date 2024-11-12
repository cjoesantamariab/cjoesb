import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Cristian Santamaría. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/cristian-santamaria-870841134/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/cjoesantamariab" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent("+50498582668")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}

export default Footer;
