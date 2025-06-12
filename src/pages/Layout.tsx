import { Outlet, Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import "./styles/Layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Devs">Developers</Link>
          </li>
          <li>
            <SearchBox />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;