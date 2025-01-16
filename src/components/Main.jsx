import { useState } from 'react'
import { Tooltip } from 'antd'

import miCara from '../assets/img/miCara.png'
import miCara2 from '../assets/img/miCara2.png'

import csharp from '../assets/img/tecnologias/csharp.svg'
import react from '../assets/img/tecnologias/react.svg'
import java from '../assets/img/tecnologias/java.svg'
import js from '../assets/img/tecnologias/js.svg'
import php from '../assets/img/tecnologias/php.svg'
import python from '../assets/img/tecnologias/python.svg'
import sql from '../assets/img/tecnologias/sql.svg'

import styles from './Main.module.css'
function Main() {
  const [face, setFace] = useState({ key: 0, img: miCara })
  const imgsFace = [miCara, miCara2];

  return (
    <section className={styles.principal}>
    <div className={styles.contenido}>
        <div className={styles.borde}>
          <img
            className={styles.foto}
            src={face.img}
            alt="Eyder Huayta"
            onClick={() => {
              face.key += 1
              if (face.key == imgsFace.length) face.key = 0
              setFace({ key: face.key, img: imgsFace[face.key] })
            }}
          />
        </div>
        <div className={styles.titulo}>
          <h1>EYDER VICTOR HUAYTA TANTAVILCA</h1>
        </div>
        <div className={styles.subtitulo}>
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
              <img className={styles.tech} src={t.img} alt={t.title} />
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main;