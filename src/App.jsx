import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Horizon from "./pages/Horizon";

import Schedule from "./pages/Schedule";

function App() {

  return (
    <div className="bg-black" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horizon" element={<Horizon />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  )
}

export default App
