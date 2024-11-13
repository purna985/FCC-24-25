import { Routes, Route } from "react-router-dom";
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
import NewsletterCard from "./components/newsletter-cards/NewsletterCard";
import ComingSoon from "./components/ComingSoon";

import { NewsLetterContentData } from './assets/data/newsletters/1'

function App() {
  return (
    <div className="bg-black overflow-x-hidden" >

      <Navbar />

      <Routes>
        {/* Pages routes */}
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
        {NewsLetterContentData.map((data, index) => {
          return(
          <Route key={index} path={`/resources/newsletters/${data.id}`} element={<div> <NewsletterCard id={data.id} /> </div>} />
        )})}

        <Route path="/coming-soon" element={<ComingSoon />} />


      </Routes>
      <Footer />
    </div>

  )
}

export default App
