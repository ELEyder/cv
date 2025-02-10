import { Image, Tooltip } from 'antd';

import proyecto1 from '../assets/img/proyectos/proyecto1.png';
import proyecto2 from '../assets/img/proyectos/proyecto2.png';
import proyecto3 from '../assets/img/proyectos/proyecto3.png';
import proyecto4 from '../assets/img/proyectos/proyecto4.png';

import react from '../assets/img/tecnologias/react.svg';
import django from '../assets/img/tecnologias/django.svg';
import firebase from '../assets/img/tecnologias/firebase.svg';
import java from '../assets/img/tecnologias/java.svg';
import php from '../assets/img/tecnologias/php.svg';
import sql from '../assets/img/tecnologias/sql.svg';

import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="proyectos" className={styles.proyectos}>
      <div className={`${styles.contenido} gap-5`}>
        <h1 className={styles.titulo}>PROYECTOS</h1>
        <div className={styles.repositorios}>
          {[
            {
              title: "CV Web",
              tech: [
                { title: "react", img: react }
              ],
              repo: "https://github.com/ELEyder/cv.git",
              img: proyecto1,
            },
            {
              title: "CinesCat Web",
              tech: [
                { title: "java", img: java },
                { title: "sql", img: sql }
              ],
              techText: ["html", "css", "js"],
              repo: "https://github.com/ELEyder/CinesCat",
              img: proyecto2,
            },
            {
              title: "Moda Luz Web",
              tech: [
                { title: "php", img: php },
                { title: "sql", img: sql }
              ],
              techText: ["html", "css", "js"],
              repo: "https://github.com/ELEyder/moda-luz-web",
              img: proyecto3,
            },
            {
              title: "Senatinet Web",
              tech: [
                { title: "django", img: django },
                { title: "firebase", img: firebase }
              ],
              techText: ["html", "css", "js"],
              repo: "https://github.com/ELEyder/python-invoice-creator",
              img: proyecto4,
            },
          ].map(({ title, tech, repo, img }) => (
            <div key={title} className={styles.repositorio}>
              <h2 className={styles.tituloRepo}>{title}</h2>
              <div  className={styles.img}>
                <Image src={img} alt={title} />
              </div>
              <div className={styles.footerRepo}>
                <div className={styles.tecnologias}>
                  {tech.map((t) => (
                    <Tooltip key={t.title} title={t.title}>
                      <img className={styles.tech} src={t.img} alt={t.title} />
                    </Tooltip>
                  ))}
                </div>
                  <a href={repo} target="_blank" rel="noopener noreferrer">
                    Ver código en GitHub
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;