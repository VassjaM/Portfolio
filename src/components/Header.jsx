import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <header className="site-header">
        <nav>
          <Link to="/" className="link-header logo">Vassilij<br />Misenko</Link>
          <Link to="/CV" className="link-header cv-link">CV</Link>
        </nav>
      </header>
    </div>
  );
}