import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import Home from "./pages/Home";
import Devs from "./pages/Devs";
import NoPage from "./pages/NoPage";
import { useEffect, type ReactNode } from "react";
import Layout from "./pages/Layout";

function LoginPage() {
  const { route } = useAuthenticator((c) => [c.route]);
  const isAuthed = route === "authenticated";
  const navigate = useNavigate();
  const location = useLocation() as any;


  useEffect(() => {
    if (isAuthed) {
      navigate(location.state?.from ?? "/", { replace: true });
    }
  }, [isAuthed, navigate, location.state]);

  return <Authenticator initialState="signIn" />;
}

function RequireAuth({ children }: { children: ReactNode }) {
  const { route } = useAuthenticator((c) => [c.route]);
  const isAuthed = route === "authenticated";
  const location = useLocation();
  if (!isAuthed) return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="devs" element={<Devs />} />
        <Route path="*" element={<NoPage />} />

        <RequireAuth>
          <Route></Route>
        </RequireAuth>
      </Route>
    </Routes>
  );
}

// can add <RequireAuth> around something to require auth to acces a page