import { useState } from 'react';
import senati1 from '../assets/img/senati.png'
import senati2 from '../assets/img/senati2.png'
import senati3 from '../assets/img/senati3.png'

function Studies() {
  const [senati, setSenati] = useState({ key: 0, img: senati1 })

  const imgsSenati = [senati1, senati2, senati3];

  return (
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
                setSenati({ key: senati.key, img: imgsSenati[senati.key] })
              }} />
            <p>Desarrollo de Software - SENATI</p>
            <p>Finalizado</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studies;