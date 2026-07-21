import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProfileSidebar from "./components/layout/ProfileSidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <a className="skip-link" href="#main-content">Vai al contenuto</a>
        <div className="portfolio-shell">
          <ProfileSidebar />
          <div className="content-shell">
            <main className="main" id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}
