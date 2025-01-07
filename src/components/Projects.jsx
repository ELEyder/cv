import { Image, Tooltip } from 'antd'

import proyecto1 from '../assets/img/proyectos/proyecto1.png'
import proyecto2 from '../assets/img/proyectos/proyecto2.png'
import proyecto3 from '../assets/img/proyectos/proyecto3.png'
import proyecto4 from '../assets/img/proyectos/proyecto4.png'

import react from '../assets/img/tecnologias/react.svg'
import django from '../assets/img/tecnologias/django.svg'
import firebase from '../assets/img/tecnologias/firebase.svg'
import java from '../assets/img/tecnologias/java.svg'
import php from '../assets/img/tecnologias/php.svg'
import sql from '../assets/img/tecnologias/sql.svg'

function Projects() {
  return (
    <section id="proyectos" className="proyectos">
      <div className="contenido-proyectos gap-5">
        <h1 className="titulo">PROYECTOS</h1>
        <div className="row justify-content-center gap-5">
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
            <div key={title} className="col-12 col-md-6 col-lg-4 repositorios">
              <h2 className="titulo-repo">{title}</h2>
              <div className="imagenes">
                <Image src={img} alt={title} />
              </div>
              <div className="footer-repo">
                <div className="tecnologias">
                  {tech.map((t) => (
                    <Tooltip key={t.title} title={t.title}>
                      <img src={t.img} alt={t.title} />
                    </Tooltip>
                  ))}
                </div>
                <div className="nav-item">
                  <a className="nav-link texto-de-link2" href={repo} target="_blank" rel="noopener noreferrer">
                    Ver código en GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;