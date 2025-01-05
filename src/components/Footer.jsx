import email from '../assets/img/contactos/email.svg'
import github from '../assets/img/contactos/github.svg'
import linkedin from '../assets/img/contactos/linkedin.svg'
import whatsapp from '../assets/img/contactos/whatsapp.svg'

function Footer() {
  return (
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
  )
}

export default Footer;