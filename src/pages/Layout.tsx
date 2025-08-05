import { Outlet, Link } from "react-router-dom";
import { FaHouse, FaUsersGear, FaMagnifyingGlass } from 'react-icons/fa6';
import "./styles/Layout.css"
import logoImg from "../assets/SP_Large.png"

const Layout = () => {
  return (
    <>
      <nav className="navbar-main">
        <div className="nav-left">
          <ul>
            <li><Link to="/"><img src={logoImg} alt="nav logo" className="nav-logo"/></Link></li>
            <li><Link to="/"><FaHouse size="30" className="nav-icons"/></Link></li>
            <li><Link to="/Devs"><FaUsersGear size="30" className="nav-icons"/></Link></li>
          </ul>
        </div>

        <div className="nav-center">
          <form>
            <input type="search" placeholder="Search" aria-label="Search" className="searchBar" />
            <button type="submit" className="searchButton"><FaMagnifyingGlass size="30" className="nav-icons"/></button>
          </form>
        </div>

        <div className="nav-right">
          <form>
            <button type="submit">Login</button>
          </form>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;