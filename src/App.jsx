import { Routes, Route } from "react-router-dom";
import './App.css'

import Home from './pages/Home'


import Navbar from './components/Navbar';
import Schedule from "./pages/Schedule";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  )
}

export default App
