import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          Portfolio
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">Chi sono</Link>
          <Link to="/contact">Contatti</Link>
        </nav>
      </div>
    </header>
  );
}