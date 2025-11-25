import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="sticky top-0 z-[1000]">
      <header className="px-5 py-8 flex items-center">
        <nav className="flex justify-between w-full">
          <Link to="/" className="text-white no-underline font-regular text-base hover:text-[#D05353] transition-colors duration-200">Home</Link>
          <Link to="/CV" className="text-white no-underline font-regular text-base hover:text-[#D05353] transition-colors duration-200">CV</Link>
        </nav>
      </header>
    </div>
  );
}