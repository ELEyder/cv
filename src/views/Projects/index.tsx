import styles from "./index.module.css";
import { Image, Tooltip } from "antd";
import { ReactComponent as React } from '../../assets/tech/react.svg';
import { ReactComponent as Spring } from '../../assets/tech/spring.svg';
import { ReactComponent as Node } from '../../assets/tech/node.svg';
import { ReactComponent as MySQL } from '../../assets/tech/mysql.svg';
import { ReactComponent as Firebase } from '../../assets/tech/firebase.svg';
import { ReactComponent as DJango } from '../../assets/tech/django.svg';
import { ReactComponent as PHP } from '../../assets/tech/php.svg';
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
          icon: <React className={styles.svg}/>
        },
      ],
    },
    {
      img: "p2",
      name: "Kaliffo - ERP",
      github: "https://github.com/ELEyder/kaliffo-erp",
      deploy: "https://eleyder.github.io/kaliffo-erp/",
      description: "ERP para la empresa Kaliffo que optimiza la gestión de ventas, tiendas, productos, trabajadores y facturación.",
      techs: [
        {
          name: "React",
          icon: <React className={styles.svg}/>
        },
        {
          name: "Node Js",
          icon: <Node className={styles.svg}/>
        },
        {
          name: "MySQL",
          icon: <MySQL className={styles.svg}/>
        },
      ],
    },
    {
      img: "p3",
      name: "CinesCat - Plataforma Online",
      github: "https://github.com/ELEyder/cinescat",
      deploy: "https://eleyder.github.io/cinescat/",
      description: "CineStar es una plataforma para gestionar películas y cines de forma eficiente.",
      techs: [
        {
          name: "React",
          icon: <React className={styles.svg}/>
        },
        {
          name: "Spring Boot",
          icon: <Spring className={styles.svg}/>
        },
        {
          name: "MySQL",
          icon: <MySQL className={styles.svg}/>
        },
      ],
    },
    {
      img: "p4",
      name: "SunnySpace - Red Social",
      github: "https://github.com/ELEyder/sunnyspace",
      deploy: "https://eleyder.github.io/sunnyspace/",
      description: "Sunny Space es una red social. Es una remasterización de Senatinet con React y Express",
      techs: [
        {
          name: "React",
          icon: <React className={styles.svg}/>
        },
        {
          name: "Node Js",
          icon: <Node className={styles.svg}/>
        },
        {
          name: "Firebase",
          icon: <Firebase className={styles.svg}/>
        },
      ],
    },
    {
      img: "p5",
      name: "Senatinet - Red Social",
      github: "https://github.com/ELEyder/senatinet",
      deploy: "https://eyder.pythonanywhere.com/login/  ",
      description: "Senatinet es una red social que permite publicar contenido, chatear en tiempo real y configurar el perfil.",
      techs: [
        {
          name: "Django",
          icon: <DJango className={styles.svg}/>
        },
        {
          name: "Firebase",
          icon: <Firebase className={styles.svg}/>
        },
      ],
    },
    {
      img: "p6",
      name: "Moda Luz - Ecommerce",
      github: "https://github.com/ELEyder/moda-luz-web",
      deploy: "https://github.com/ELEyder/moda-luz-web  ",
      description: "Moda Luz es una tienda online de ropa que ofrece una amplia variedad de prendas",
      techs: [
        {
          name: "PHP",
          icon: <PHP className={styles.svg}/>
        },
        {
          name: "MySQL",
          icon: <MySQL className={styles.svg}/>
        },
      ],
    },
  ];

  return (
    <>
      <section className={styles.projects} id="projects">
        <h1>Proyectos</h1>
        <div className={styles.cards}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={styles.card} >
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
                    {project.techs.map((tech, index) => {
                      return <div key={index} className={styles.tech}>
                        <Tooltip title={tech.name}>
                          {tech.icon}
                        </Tooltip>
                      </div>;
                    })}
                  </div>
                  <div className={styles.footer}>
                  <a className={styles.linkFooter} href={project.github} target="_blank">
                    <GitHub className={styles.svg}/> <p>Ver en GitGub</p>
                  </a>
                  <a className={styles.linkFooter} href={project.deploy} target="_blank">
                  <Internet className={styles.svg} /> <p>Demo Frontend</p>
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
