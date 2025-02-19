import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Contacts from "./Contacts/Contacts";

function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Contacts />
      <Footer />
    </>
  );
}

export default Layout;