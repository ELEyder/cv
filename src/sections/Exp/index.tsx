import React from "react";
import styles from "./index.module.css";

const EXPERIENCES = [
  {
    company: "Corporación Kaliffo S.A.C",
    role: "Desarrollador Full-Stack",
    duration: "Agosto 2024 - Diciembre 2024",
    description: `Desarrollé un sistema ERP para una MYPE
      utilizando React (frontend) y Node.js
      (backend), aumentando la eficiencia operativa
      en un 30%.`,
    tech: ["React", "Ant Design", "Node.js (Typescript)", "APIs", "MySQL"],
  },
  {
    company: "CM Educativa",
    role: "Desarrollador Móvil",
    duration: "Marzo 2024 - Junio 2024",
    description: `Desarrollé un aplicativo móvil para la gestión
      de llamadas de usuario, mejorando el
      seguimiento del rendimiento en un 40%`,
    tech: ["FlutterFlow", "APIs"],
  },
];

const Experience: React.FC = () => {
  return (
    <section className={styles.exp} id="exp">
      <h1>Experiencia Laboral</h1>
      <div className={styles.experienceList}>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.role}>
              {exp.role} - {exp.company}
            </h3>
            <p className={styles.duration}>{exp.duration}</p>
            <p className={styles.description}>{exp.description}</p>
            <div className={styles.techList}>
              {exp.tech.map((tech, i) => (
                <span key={i} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
