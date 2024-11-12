import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Cristian Joe Santamaría</h1>
      <h2>Desarrollador Full Stack</h2>
      <p>
        Desarrollador apasionado con experiencia en soluciones en la nube y desarrollo de aplicaciones modernas.
      </p>
      <div className="header-buttons">
        <a href="https://drive.google.com/file/d/19nLtMCDyqz2_2JoAk-_lYqNPBwb0cDUQ/view?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Descargar CV</a>
        <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent("+50498582668")}`} className="btn">WhatsApp</a>
      </div>
    </header>
  );
}

export default Header;
