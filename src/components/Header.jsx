// src/components/Header.jsx
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header" style={{padding: "1rem 2rem", textAlign:"center"}}>
      <nav>
        <Link to="/" className="link-header">Home</Link>
        <Link to="/impressum" className="link-header">Impressum</Link>
      </nav>
    </header>
  );
}