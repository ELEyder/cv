import styles from "./index.module.css";
import { Image, Tooltip } from "antd";
import { ReactComponent as React } from '../../assets/tech/react.svg';
import { ReactComponent as Spring } from '../../assets/tech/spring.svg';
import { ReactComponent as Node } from '../../assets/tech/node.svg';
import { ReactComponent as GitHub } from '../../assets/contact/github.svg';
import { ReactComponent as Internet } from '../../assets/contact/internet.svg';

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
          icon: <React/>
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo-ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploy: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      techs: [
        {
          name: "React",
          icon: <React/>
        },
        {
          name: "Node Js",
          icon: <Node />
        },
      ],
    },
    {
      img: "p3",
      name: "CinesCat",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploy: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      techs: [
        {
          name: "React",
          icon: <React/>
        },
        {
          name: "Spring Boot",
          icon: <Spring />
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo-ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploy: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      techs: [
        {
          name: "React",
          icon: <React/>
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo-ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploy: "https://eleyder.github.io/cv/",
      description: "ERP para una empresa textil",
      techs: [
        {
          name: "React",
          icon: <React/>
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
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.techs}>
                    {project.techs.map((tech) => {
                      return <div className={styles.tech}>
                        <Tooltip title={tech.name}>
                          {tech.icon}
                        </Tooltip>
                      </div>;
                    })}
                  </div>
                  <div className={styles.footer}>
                  <a className={styles.linkFooter} href={project.github} target="_blank">
                    <GitHub /> <p>Ver en GitGub</p>
                  </a>
                  <a className={styles.linkFooter} href={project.deploy} target="_blank">
                  <Internet /> <p>Demo en vivo</p>
                  </a>
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
