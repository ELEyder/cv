import styles from "./index.module.css";
import { Image } from "antd";

function Projects() {
  const projects = [
    {
      img: "p1",
      name: "Portafolio",
      github: "https://github.com/ELEyder/cv",
      deploy: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      tech: [
        {
          name: "React",
          icon: "./img/tech/react.svg",
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo-ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploys: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      tech: [
        {
          name: "React",
          icon: "./img/tech/react.svg",
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo-ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploys: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      tech: [
        {
          name: "React",
          icon: "./img/tech/react.svg",
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo-ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploys: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      tech: [
        {
          name: "React",
          icon: "./img/tech/react.svg",
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo-ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploys: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      tech: [
        {
          name: "React",
          icon: "./img/tech/react.svg",
        },
      ],
    },
  ];

  return (
    <>
      <section className={styles.projects} id="#">
        <h1>Proyectos</h1>
        <div className={styles.cards}>
          {projects.map((project) => {
            return (
              <div className={styles.card}>
                <Image
                  className={styles.imgProject}
                  src={`./img/projects/${project.img}.png`}
                  alt={project.name}
                  fallback="./img/placeholder.png"
                  width="100%"
                />
                <div className={styles.text}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
