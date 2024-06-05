import { Routes, Route } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import Horizon from "./pages/Horizon.jsx";
import Schedule from "./pages/Schedule.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Team from "./pages/Team.jsx";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horizon" element={<Horizon />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
