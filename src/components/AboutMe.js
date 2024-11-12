// AboutMe.js
import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <motion.section
      className="about-me"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Acerca de Mí</h2>
      <p>
        Soy un desarrollador Full Stack con experiencia en múltiples tecnologías y plataformas. 
        He trabajado en proyectos usando ASP.NET MVC, Angular, AWS, y mucho más. 
        Mi objetivo es seguir creciendo profesionalmente y contribuir a proyectos innovadores.
      </p>
    </motion.section>
  );
}

export default AboutMe;
