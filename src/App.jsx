// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CV from "./pages/CV";


export default function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          {/* Index Page */}
          <Route path="/" element={<Home />} />
          <Route path="/CV" element={<CV />} />
          {/* Optional: 404-Route */}
          <Route path="*" element={<div style={{ padding: 20 }}>Seite nicht gefunden</div>} />
        </Routes>
      </main>
    </HashRouter>
  );
}