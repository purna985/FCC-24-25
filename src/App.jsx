import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Horizon from "./pages/Horizon";
import Schedule from "./pages/Schedule";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Resources from "./pages/Resources";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="bg-black" >
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/horizon" element={<Horizon />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
