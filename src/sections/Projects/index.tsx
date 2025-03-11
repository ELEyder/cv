import styles from "./index.module.css";
import { Image, Tooltip } from "antd";
import { ReactComponent as React } from "../../assets/tech/react.svg";
import { ReactComponent as TypeScript } from "../../assets/tech/ts.svg";
import { ReactComponent as Node } from "../../assets/tech/node.svg";
import { ReactComponent as MySQL } from "../../assets/tech/mysql.svg";
import { ReactComponent as Firebase } from "../../assets/tech/firebase.svg";
import { ReactComponent as PHP } from "../../assets/tech/php.svg";
import { ReactComponent as GitHub } from "../../assets/contact/github.svg";
import { ReactComponent as Internet } from "../../assets/contact/internet.svg";
import { ReactComponent as Java } from "../../assets/tech/java.svg";
import { ReactComponent as AndroidStudio } from "../../assets/tech/android.svg";

const Projects = () => {
  const projects = [
    {
      img: "p1",
      name: "Mi Portafolio",
      github: "https://github.com/ELEyder/cv",
      deploy: "https://eleyder.github.io/cv/",
      description:
        "Mi portafolio personal, donde te presento mis proyectos de manera más rápida y accesible",
      techs: [
        {
          name: "React",
          icon: <React className={styles.svg} />,
        },
        {
          name: "TypeScript",
          icon: <TypeScript className={styles.svg} />,
        },
        {
          name: "Firebase",
          icon: <Firebase className={styles.svg} />,
        },
      ],
      type: "deployed",
    },
    {
      img: "p2",
      name: "Kaliffo - ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploy: "https://eleyder.github.io/kaliffo-erp/",
      description:
        "ERP para la empresa Kaliffo que optimiza la gestión de ventas, tiendas, productos, trabajadores y facturación.",
      techs: [
        {
          name: "React",
          icon: <React className={styles.svg} />,
        },
        {
          name: "Node Js",
          icon: <Node className={styles.svg} />,
        },
        {
          name: "MySQL",
          icon: <MySQL className={styles.svg} />,
        },
      ],
      type: "demo",
    },
    {
      img: "p6",
      name: "Moda Luz - Ecommerce",
      github: "https://github.com/ELEyder/moda-luz-backend",
      deploy: "https://github.com/ELEyder/moda-luz-backend",
      description:
        "Moda Luz es una tienda online de ropa que ofrece una amplia variedad de prendas",
      techs: [
        {
          name: "PHP",
          icon: <PHP className={styles.svg} />,
        },
        {
          name: "MySQL",
          icon: <MySQL className={styles.svg} />,
        },
      ],
      type: "demo",
    },
    {
      img: "p7",
      name: "Mangaka - Android",
      github: "https://github.com/ELEyder/mangaka-android",
      deploy: "https://github.com/ELEyder/mangaka-android/releases/tag/1.0",
      description: `
      Diseñado para facilitar la lectura de mangas, libros y cómics usando APIs públicas`,
      techs: [
        {
          name: "Java",
          icon: <Java className={styles.svg} />,
        },
        {
          name: "Android Studio",
          icon: <AndroidStudio className={styles.svg} />,
        },
      ],
      type: "android",
    },
  ];

  return (
    <>
      <section className={styles.projects} id="projects">
        <h1>Proyectos</h1>
        <div className={styles.cards}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={styles.card}>
                <Image
                  className={styles.imgProject}
                  src={`./images/projects/${project.img}.webp`}
                  alt={project.name}
                  fallback="./images/placeholder.webp"
                  width="100%"
                />
                <div className={styles.text}>
                  <h2>{project.name}</h2>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.techs}>
                    {project.techs.map((tech, index) => {
                      return (
                        <div key={index} className={styles.tech}>
                          <Tooltip title={tech.name}>{tech.icon}</Tooltip>
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.footer}>
                    <a
                      className={styles.linkFooter}
                      href={project.github}
                      target="_blank"
                    >
                      <GitHub className={styles.svg} /> <p>Ver en GitGub</p>
                    </a>
                    <a
                      className={styles.linkFooter}
                      href={project.deploy}
                      target="_blank"
                    >
                      <Internet className={styles.svg} />{" "}
                      <p>
                        {project.type == "deployed"
                          ? "Ir al sitio"
                          : project.type == "demo"
                          ? "Demo Frontend"
                          : "Descargar APK"}
                      </p>
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
};

export default Projects;
