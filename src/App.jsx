import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Studies from './components/Studies';
import Footer from './components/Footer';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
import './App.css';

import { ConfigProvider } from 'antd';
function App() {
  const [primaryColor, setPrimaryColor] = useState("");

  const items1 = ['Sobre Mí', 'Proyectos', 'Formación Académica', 'Contáctame', 'Descargar CV'].map((key) => ({
    key,
    label: key,
  }));

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
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}
        >
          <div />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: 'red',
              position: 'fixed',
              height: '100vh',
              zIndex: 10
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items1}
            />
          </Sider>
          <Layout
          style={{
            marginInlineStart: 200,
          }}
          >
            <Content
            >
              <Main />
              {/* ------------------------------------------------ Sección: Sobre Mí ------------------------------------------------ */}
              <AboutMe />
              {/* ------------------------------------------------ Sección: Proyectos ------------------------------------------------ */}
              <Projects />
              {/* ------------------------------------------------ Sección: Formación Académica ------------------------------------------------ */}
              <Studies />
              {/* ------------------------------------------------ Footer ------------------------------------------------ */}
              <Footer />

            </Content>
          </Layout>
        </Layout>
      </Layout>
      {/* ------------------------------------------------ Barra de Navegación ------------------------------------------------ */}
      <NavBar />
      {/* ------------------------------------------------ Contenido Principal ------------------------------------------------ */}

    </ConfigProvider>
  );
}

export default App;
