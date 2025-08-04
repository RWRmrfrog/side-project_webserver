import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Devs from "../pages/Devs";
import Users from "../pages/Users";
import NoPage from "../pages/NoPage";

function NavBar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="devs" element={<Devs />} />
                    <Route path="users" element={<Users />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NavBar