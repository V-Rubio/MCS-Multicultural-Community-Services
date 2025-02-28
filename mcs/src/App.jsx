import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Navbar from "./pages/Navbar.jsx";
import AppBar from "./pages/App-Bar.jsx";
import Header from "./pages/Navbar.jsx";
import Footer from './pages/Footer.jsx';

import Home from './pages/Home';
import About from './pages/About';
import Families from './pages/Families';
import Donate from "./pages/Donate.jsx";
import PD from "./pages/Professional-Development.jsx";
import Youth from "./pages/Youth.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        {/* <Navbar sticky="top" /> */}
        <AppBar/>

        <Routes>
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/families" element={<Families />} />
          <Route path="/professional-development" element={<PD />} />
          <Route path="/youth" element={<Youth />} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
