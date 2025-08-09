import { Link, useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "./styles/NavBar.css";

import logoImg from "../assets/SP_Large.png"
import { FaDev, FaUsers, FaMagnifyingGlass } from 'react-icons/fa6';

export default function NavBar() {
    const { route, signOut } = useAuthenticator((c) => [c.route]);
    const isAuthed = route === "authenticated";
    const navigate = useNavigate();

    const handleLogin = () =>
        navigate("/login", { state: { from: location.pathname } });

    const handleLogout = async () => {
        await signOut();
        navigate("/", { replace: true });
    };

    return (
        <header>
            {/* hamburger toggle (CSS-only) */}
            <input id="nav-toggle" type="checkbox" className="nav-toggle" />
            <label htmlFor="nav-toggle" className="hamburger" aria-label="Toggle menu">☰</label>

            <nav className="left">
                <Link to="/"><img src={logoImg} alt="nav logo" className="nav-logo" /></Link>
                <Link to="/devs"><FaDev size="30" className="nav-icons" /></Link>
                <Link to="/users"><FaUsers size="30" className="nav-icons" /></Link>
            </nav>

            <nav className="center">
                <form>
                    <input type="search" placeholder="Search" aria-label="Search" className="searchBar" />
                    <button type="submit" className="searchButton"><FaMagnifyingGlass size="20" /></button>
                </form>
            </nav>

            <nav className="right">
                {!isAuthed ? (
                    <button onClick={handleLogin}>Log in</button>
                ) : (
                    <button onClick={handleLogout}>Log out</button>
                )}
            </nav>
        </header>
    );
}
