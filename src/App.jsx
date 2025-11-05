// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Impressum from "./pages/impressum"; // Make sure this matches your file name's case

export default function App() {
  return (
    <BrowserRouter>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          {/* Optional: 404-Route */}
          <Route path="*" element={<div style={{padding:20}}>Seite nicht gefunden</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}