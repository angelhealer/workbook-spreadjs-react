import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ActualSheet from "./components/Sheets/ActualSheet";
import Header from "./components/Navbar/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/actualsheets" element={<ActualSheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
