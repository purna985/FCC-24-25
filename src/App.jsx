import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Horizon from "./pages/Horizon";
import Schedule from "./pages/Schedule";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Newsletters from "./pages/resources-pages/Newsletters";
import Finance from "./pages/resources-pages/Finance";
import Consulting from "./pages/resources-pages/Consulting";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News_1 from "./pages/newsletters/newsletters/News_1";
import News_2 from "./pages/newsletters/newsletters/News_2";

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
          <Route path="/resources/finance-resources" element={<Finance />} />
          <Route path="/resources/consulting-resources" element={<Consulting />} />
          <Route path="/resources/newsletters" element={<Newsletters />} />

          {/* Newsletters Routes */}
          <Route path="/resources/newsletters/1" element={<News_1 />} />
          <Route path="/resources/newsletters/2" element={<News_2 />} />

        </Routes>
        <Footer />
      </div>

  )
}

export default App
