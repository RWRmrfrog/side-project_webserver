import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';

export default function App() {
  return (
    <div className="app">
      <div className="main-content">
        <NavBar />
      </div>
      <Footer />
    </div>
  );
}
