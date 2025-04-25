import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import LandingPage from "./pages/LandingPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes like /dashboard, /chatbot, etc. */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
