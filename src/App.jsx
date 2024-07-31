import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Horizon from "./pages/Horizon";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horizon" element={<Horizon />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
