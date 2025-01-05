import { useState } from 'react';
import { Image, Tooltip } from 'antd'
import logo from './assets/img/icon.png'
import miCara from './assets/img/miCara.png'
import miCara2 from './assets/img/miCara2.png'
import senati1 from './assets/img/senati.png'
import senati2 from './assets/img/senati2.png'
import senati3 from './assets/img/senati3.png'
import proyecto1 from './assets/img/proyectos/proyecto1.png'
import proyecto2 from './assets/img/proyectos/proyecto2.png'
import proyecto3 from './assets/img/proyectos/proyecto3.png'
import proyecto4 from './assets/img/proyectos/proyecto4.png'
import csharp from './assets/img/tecnologias/csharp.svg'
import react from './assets/img/tecnologias/react.svg'
import django from './assets/img/tecnologias/django.svg'
import firebase from './assets/img/tecnologias/firebase.svg'
import java from './assets/img/tecnologias/java.svg'
import js from './assets/img/tecnologias/js.svg'
import php from './assets/img/tecnologias/php.svg'
import python from './assets/img/tecnologias/python.svg'
import sql from './assets/img/tecnologias/sql.svg'
import email from './assets/img/contactos/email.svg'
import github from './assets/img/contactos/github.svg'
import linkedin from './assets/img/contactos/linkedin.svg'
import whatsapp from './assets/img/contactos/whatsapp.svg'
import cv from './assets/pdf/cv.pdf'
import './App.css';

function App() {
  const [face, setFace] = useState({key: 0, img: miCara})
  const [senati, setSenati] = useState({key: 0, img: senati1})

  const imgsFace = [miCara, miCara2];
  const imgsSenati = [senati1, senati2, senati3];

  return (
    <>
      {/* ------------------------------------------------ Barra de Navegación ------------------------------------------------ */}
      <nav className="navbar navbar-expand-md" style={{ zIndex: 10 }}>
        <div className="container-fluid options-var">
          {/* Botón para mostrar las opciones en modo móvil */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbar-toggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Opciones de navegación */}
          <div className="collapse navbar-collapse opciones" id="navbar-toggler">
            <a className="navbar-brand" href="#">
              <img className="icon" src={logo} alt="Logo de la página" />
            </a>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link link" href="#sobre-mi">
                  Sobre Mí
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#proyectos">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#formacion">
                  Formación Académica
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#contactos">
                  Contáctame
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" target="_blank" href={cv} rel="noopener noreferrer">
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ------------------------------------------------ Contenido Principal ------------------------------------------------ */}
      <section className="principal">
        <div className="contenido-principal">
          <div className="borde">
            <img
              id="miFoto"
              className="foto rounded-circle"
              src={face.img}
              alt="Eyder Huayta"
              onClick={() => {
                face.key += 1
                if (face.key == imgsFace.length) face.key = 0
                setFace({key: face.key, img: imgsFace[face.key]})
              }}
            />
          </div>
          <div className="titulo">
            <h1>EYDER VICTOR HUAYTA TANTAVILCA</h1>
          </div>
          <div className="sub-titulo">
            <p>DESARROLLADOR DE SOFTWARE</p>
          </div>
          <div className="tecnologias">
            {[
              { title: "react", img: react },
              { title: "js", img: js },
              { title: "python", img: python },
              { title: "java", img: java },
              { title: "csharp", img: csharp },
              { title: "sql", img: sql },
              { title: "php", img: php },
            ].map((t) => (
              <Tooltip key={t.title} title={t.title}>
                <img src={t.img} alt={t.title} />
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Sección: Sobre Mí ------------------------------------------------ */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="contenido-sobre-mi">
          <h1 className="titulo">SOBRE MÍ</h1>
          <p className="sub-titulo">
            Programador Junior con experiencia en React, Javascript, Python, Java, C# y PHP. He realizado proyectos para demostrar mis
            habilidades y mi dedicación a este trabajo. Estudiante de SENATI y autodidacta.
          </p>
          <p>21 años</p>
          <p>San Juan de Lurigancho - Lima - Perú</p>
          <p>2025</p>
        </div>
      </section>

      {/* ------------------------------------------------ Sección: Proyectos ------------------------------------------------ */}
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
                  <Image className="img-repo img-fluid" src={img} alt={title} />
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

      {/* ------------------------------------------------ Sección: Proyectos ------------------------------------------------ */}
      <section id="formacion" className="formacion">
        <div className="contenido-formacion">
          <h1>FORMACIÓN ACADÉMICA</h1>
          {/* <!-- Fila --> */}
          <div className="row">
            <div className="col senati">
              <img id="senati" className="img-senati img-fluid rounded-circle" src={senati.img} alt="senati"
                onClick={() => {
                  senati.key += 1
                  if (senati.key == imgsSenati.length) senati.key = 0
                  setSenati({key: senati.key, img: imgsSenati[senati.key]})
                }} />
              <p>Desarrollo de Software - SENATI</p>
              <p>Finalizado</p>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------ Footer ------------------------------------------------ */}
      <footer>
        {/* <!-- Seccion de Contacto --> */}
        <section id="contactos" className="contactos">
          <h1 className="seccion-titulo">CONTACTOS</h1>
          <div className="container iconos-contactos">
            {/* <!-- Fila 1 --> */}
            <div className="row contactos-icons">
              {/* <!-- Columna Whatsapp --> */}
              <div className="col-12 col-md-6 col-lg-3">
                <a href="https://wa.me/+51919593169/?text=" target="_blank">
                  <img className="img-contacto" src={whatsapp} alt="Logo de la pagina" />
                </a>
                <h5>+51 919593169</h5>
              </div>
              {/* <!-- Columna GMAIL --> */}
              <div className="col-12 col-md-6 col-lg-3">
                <a href="mailto:eyderhuayta26@gmail.com" target="_blank">
                  <img className="img-contacto" src={email} alt="Logo de la pagina" />
                </a>
                <h5>eyderhuayta26@gmail.com</h5>
              </div>
              {/* <!-- Columna LINKEDIN --> */}
              <div className="col-12 col-md-6 col-lg-3">
                <a href="https://www.linkedin.com/in/eyder-huayta" target="_blank">
                  <img className="img-contacto" src={linkedin} alt="Logo de la pagina" />
                </a>
                <h5>eyder-huayta</h5>
              </div>
              {/* <!-- Columna GITHUB --> */}
              <div className="col-12 col-md-6 col-lg-3">
                <a href="https://github.com/ELEyder" target="_blank">
                  <img className="img-contacto" src={github} alt="Logo de la pagina" />
                </a>
                <h5>ELEyder</h5>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
