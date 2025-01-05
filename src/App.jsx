



import NavBar from './components/NavBar';
import Main from './components/Main';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Studies from './components/Studies';
import Footer from './components/Footer';

function App() {


  return (
    <>
      {/* ------------------------------------------------ Barra de Navegación ------------------------------------------------ */}
      <NavBar />
      {/* ------------------------------------------------ Contenido Principal ------------------------------------------------ */}
      <Main />
      {/* ------------------------------------------------ Sección: Sobre Mí ------------------------------------------------ */}
      <AboutMe />
      {/* ------------------------------------------------ Sección: Proyectos ------------------------------------------------ */}
      <Projects />
      {/* ------------------------------------------------ Sección: Formación Académica ------------------------------------------------ */}
      <Studies />
      {/* ------------------------------------------------ Footer ------------------------------------------------ */}
      <Footer />
    </>
  );
}

export default App;
