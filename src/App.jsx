import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Studies from './components/Studies';
import Footer from './components/Footer';

import { ConfigProvider } from 'antd';
function App() {
  const [primaryColor, setPrimaryColor] = useState("");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const color = rootStyles.getPropertyValue("--color-p").trim();
    setPrimaryColor(color);
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            popupBg: primaryColor,
            itemBg: 'white'
          },
        },
      }}
    >
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

    </ConfigProvider>
  );
}

export default App;
