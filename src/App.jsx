import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Horizon from "./pages/Horizon";

import Schedule from "./pages/Schedule";

function App() {

  return (
    <div className="" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
