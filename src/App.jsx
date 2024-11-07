import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Horizon from "./pages/Horizon";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Newsletters from "./pages/resources-pages/Newsletters";
import Finance from "./pages/resources-pages/Finance";
import Consulting from "./pages/resources-pages/Consulting";
import ProdMan from "./pages/resources-pages/ProdMan";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News_1 from "./pages/newsletters/newsletters/News_1";
import News_2 from "./pages/newsletters/newsletters/News_2";
import News_3 from "./pages/newsletters/newsletters/News_3";
import News_4 from "./pages/newsletters/newsletters/News_4";
import News_5 from "./pages/newsletters/newsletters/News_5";
import News_6 from "./pages/newsletters/newsletters/News_6";
import News_7 from "./pages/newsletters/newsletters/News_7";
import News_8 from "./pages/newsletters/newsletters/News_8";
import News_9 from "./pages/newsletters/newsletters/News_9";
import News_10 from "./pages/newsletters/newsletters/News_10";
import ComingSoon from "./components/ComingSoon";

function App() {

  return (


      <div className="bg-black overflow-x-hidden" >

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/horizon" element={<Horizon />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/team" element={<Team />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/finance-resources" element={<Finance />} />
          <Route path="/resources/consulting-resources" element={<Consulting />} />
          <Route path="/resources/product-resources" element={<ProdMan />} />
          
          <Route path="/resources/newsletters" element={<Newsletters />} />

          {/* Newsletters Routes */}
          <Route path="/resources/newsletters/1" element={<News_1 />} />
          <Route path="/resources/newsletters/2" element={<News_2 />} />
          <Route path="/resources/newsletters/3" element={<News_3 />} />
          <Route path="/resources/newsletters/4" element={<News_4 />} />
          <Route path="/resources/newsletters/5" element={<News_5 />} />
          <Route path="/resources/newsletters/6" element={<News_6 />} />
          <Route path="/resources/newsletters/7" element={<News_7 />} />
          <Route path="/resources/newsletters/8" element={<News_8 />} />
          <Route path="/resources/newsletters/9" element={<News_9 />} />
          <Route path="/resources/newsletters/10" element={<News_10 />} />

          <Route path="/coming-soon" element={<ComingSoon />} />


        </Routes>
        <Footer />
      </div>

  )
}

export default App
