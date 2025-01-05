import React from 'react'
import logo from '../assets/img/icon.png'
import cv from '../assets/pdf/cv.pdf'

function NavBar() {
  return (
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
  )
}

export default NavBar;