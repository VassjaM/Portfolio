// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CV from "./pages/CV";


export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          // Index Page
          <Route path="/" element={<Home />} />
          <Route path="/CV" element={<CV />} />
          {/* Optional: 404-Route */}
          <Route path="*" element={<div style={{padding:20}}>Seite nicht gefunden</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}