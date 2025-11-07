import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <header className="site-header">
        <nav>
          <Link to="/" className="link-header">Home</Link>
          <Link to="/impressum" className="link-header">Impressum</Link>
        </nav>
      </header>
    </div>
  );
}