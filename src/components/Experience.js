import React from 'react';

const experiences = [
  {
    company: "Flecha Roja Technologies S.A.",
    role: "Desarrollador Full Stack",
    duration: "mayo 2022 - Presente",
    description: "Desarrollador con experiencia en Angular, AWS, y Node.js. Responsable de implementar soluciones en la nube y desarrollar aplicaciones web.",
  },
  {
    company: "ODEF",
    role: "Desarrollador de aplicaciones",
    duration: "agosto 2021 - diciembre 2022",
    description: "Desarrollé aplicaciones web usando ASP.NET MVC y WebForms, y optimicé reportes financieros.",
  },
  {
    company: "Sumitec Suministros Técnicos",
    role: "Técnico Soluciones Externas",
    duration: "diciembre 2011 - mayo 2021",
    description: "Proporcioné soporte y soluciones técnicas para la empresa.",
  },
];

function Experience() {
  return (
    <section className="experience">
      <h2>Experiencia Profesional</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
