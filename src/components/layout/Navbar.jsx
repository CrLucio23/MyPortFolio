import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <span className="nav-monogram" aria-hidden="true">LC</span>
      <nav className="nav-links" aria-label="Navigazione principale">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">Chi sono</NavLink>
        <NavLink to="/contact">Contatti</NavLink>
      </nav>
      <span className="nav-index" aria-hidden="true">01 — 03</span>
    </header>
  );
}
