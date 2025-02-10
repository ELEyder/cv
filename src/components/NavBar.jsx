import React, { useState } from 'react'
import cv from '../assets/pdf/cv.pdf'
import styles from './NavBar.module.css'
import { Menu } from 'antd'

function NavBar() {
  const items = [
    { key: "sobreMi", label: <a className={styles.link} href="#sobre-mi"> Sobre Mí </a> },
    { key: "proyectos", label: <a className={styles.link} href="#proyectos"> Proyectos </a> },
    { key: "formacionAcademica", label: <a className={styles.link} href="#formacion"> Formación Académica </a> },
    { key: "contactame", label: <a className={styles.link} href="#contactos"> Contáctame </a> },
    { key: "descargarCV", label: <a className={styles.link} target="_blank" href={cv} rel="noopener noreferrer"> Descargar CV </a> },
  ]

  return (
    <nav className={styles.navbar}>
      <Menu
        mode="vertical"
        items={items} />
    </nav>
  )
}

export default NavBar;