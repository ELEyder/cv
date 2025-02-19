import React from "react";
import styles from "./index.module.css";

const EXPERIENCES = [
  {
    company: "Corporación Kaliffo S.A.C",
    role: "Desarrollador Frontend",
    duration: "Agosto 2024 - Diciembre 2024",
    description:
      "Desde mi rol se aportó en todo el UI/UX del ERP que administra los módulos de trabajadores, tiendas, productos y ventas, entre otros.",
    tech: ["React", "Ant Design", "Node.js (Typescript)", "APIs", "MySQL"],
  },
  {
    company: "CM Educativa",
    role: "Desarrollador Móvil",
    duration: "Marzo 2024 - Junio 2024",
    description:
      "Se realizó un aplicativo móvil que administre las llamadas del usuario, enviando la información a una base de datos y registrar la eficiencia de cada usuario.",
    tech: ["FlutterFlow", "APIs"],
  },
  {
    company: "Consigue Ventas",
    role: "Diseñador UI/UX",
    duration: "Agosto 2023 - Diciembre 2023",
    description:
      "Realizaba prototipos de páginas web para enfocar el UI/UX en el usuario y poder facilitar el desarrollo frontend con WordPress.",
    tech: ["Figma"],
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
