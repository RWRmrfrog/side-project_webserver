import { Outlet, Link } from "react-router-dom";
import "./styles/Layout.css"
import logoImg from "../assets/SP_Large.png"
import homeIcon from "../assets/home_icon.png"
import gearIcon from "../assets/gear_icon.png"
import searchIcon from "../assets/search_icon.png"

const Layout = () => {
  return (
    <>
      <nav className="navbar-main">
        <div className="nav-left">
          <ul>
            <li><Link to="/"><img src={logoImg} alt="nav logo" className="nav-logo"/></Link></li>
            <li><Link to="/"><img src={homeIcon} alt="home" title="Home" className="nav-icons"/></Link></li>
            <li><Link to="/Devs"><img src={gearIcon} alt="developers" title="Developers" className="nav-icons"/></Link></li>
          </ul>
        </div>

        <div className="nav-center">
          <form>
            <input type="search" placeholder="Search" aria-label="Search" className="searchBar" />
            <button type="submit" className="searchButton"><img src={searchIcon} alt="search icon" title="Search" className="nav-icons"/></button>
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