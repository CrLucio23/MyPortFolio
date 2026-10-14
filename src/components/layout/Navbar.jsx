import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const projectsActive = pathname === "/" && hash === "#projects";
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="Luciano Cretella, homepage">
          <span className="nav-monogram" aria-hidden="true">lc<span>.</span></span>
          <span className="brand-name">Luciano<br />Cretella</span>
        </Link>
        <nav className="nav-links" aria-label="Navigazione principale">
          <NavLink to="/" end className={({ isActive }) => isActive && !hash ? "active" : ""}>Home</NavLink>
          <Link to="/#projects" className={projectsActive ? "active" : ""} aria-current={projectsActive ? "location" : undefined}>Progetti</Link>
          <NavLink to="/about">Chi sono</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-contact${isActive ? " active" : ""}`}>Parliamone <ArrowUpRight size={15} aria-hidden="true" /></NavLink>
        </nav>
      </div>
    </header>
  );
}
