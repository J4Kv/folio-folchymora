import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Areas from "./pages/Areas";
import Contact from "./pages/Contact";
import Privacidad from "./pages/privacidad"; // 👈 AÑADIDO
import Terminos from "./pages/Terminos";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacidad" element={<Privacidad />} /> {/* 👈 NUEVA RUTA */}
            <Route path="/terminos" element={<Terminos />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
