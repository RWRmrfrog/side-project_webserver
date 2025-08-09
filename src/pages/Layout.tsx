import { Outlet } from "react-router-dom";
import "./styles/Layout.css"

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = () => {

  return (
    <div className="layout">
      <NavBar />

      <div className="main-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
};

export default Layout;