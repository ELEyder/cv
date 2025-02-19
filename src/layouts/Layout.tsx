import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Contacts from "./Contacts";

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