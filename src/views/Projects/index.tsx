import styles from "./index.module.css";
import { Image, Tooltip } from "antd";

function Projects() {
  const projects = [
    {
      img: "p1",
      name: "Portafolio",
      github: "https://github.com/ELEyder/cv",
      deploy: "https://eleyder.github.io/cv/",
      description:
        "Mi protafolio personal diseñado y desarrollado para mostrar mis proyectos personales y profesionales.",
      techs: [
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
      techs: [
        {
          name: "React",
          icon: "./img/tech/react.svg",
        },
        {
          name: "Node Js",
          icon: "./img/tech/node.svg",
        },
      ],
    },
    {
      img: "p3",
      name: "CinesCat",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploys: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      techs: [
        {
          name: "React",
          icon: "./img/tech/react.svg",
        },
        {
          name: "Spring Boot",
          icon: "./img/tech/spring.svg",
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo-ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploys: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      techs: [
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
      techs: [
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
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <div className={styles.techs}>
                    {project.techs.map((tech) => {
                      return <div className={styles.tech}>
                        <Tooltip title={tech.name}>
                          <img src={tech.icon} alt={tech.name} />
                        </Tooltip>
                      </div>;
                    })}
                  </div>
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
