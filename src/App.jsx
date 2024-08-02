import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Horizon from "./pages/Horizon.jsx";
import Schedule from "./pages/Schedule.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Team from "./pages/Team.jsx";
import Resources from "./pages/Resources.jsx";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="bg-black" >
      <Navbar/>
      <Routes>
        <Route path="/FCC-24-25/" element={<Home />} />
        <Route path="/FCC-24-25/horizon" element={<Horizon />} />
        <Route path="/FCC-24-25/schedule" element={<Schedule />} />
        <Route path="/FCC-24-25/sponsors" element={<Sponsors />} />
        <Route path="/FCC-24-25/team" element={<Team />} />
        <Route path="/FCC-24-25/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
