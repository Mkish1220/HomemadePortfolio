import "./App.css";
// import "./styles/index.css";
// import "./styles/Navbar.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from "./pages/Experience";

// import React from 'react';

function App() {
    return ( 
      <div className="App">
        
        <Router>
          <Navbar />
          {/* <Home /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
             </Routes>
        <Footer />
      </Router>
    </div>
  );
}
  
export default App;

