import React from "react";
import "./App.css";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Academics } from "./components/pages/Academics";
import { Department } from "./components/pages/Department";
import { Index } from "./components/Departments/Index";
import { Placement } from "./components/pages/Placement";
import { Campus } from "./components/pages/Campus";
import { Contact } from "./components/pages/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Department/>} />
        <Route path="/departments/:id" element={<Index/>} />
        <Route path="/placement" element={<Placement/>} />
        <Route path="/campus" element={<Campus/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
