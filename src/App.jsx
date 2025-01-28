import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Horizon from "./pages/Horizon";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Newsletters from "./pages/resources-pages/Newsletters";
import Finance from "./pages/resources-pages/Finance";
import Consulting from "./pages/resources-pages/Consulting";
import ProdMan from "./pages/resources-pages/ProdMan";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsletterCard from "./components/newsletter-cards/NewsletterCard";
import ComingSoon from "./components/ComingSoon";

import { NewsLetterContentData } from "./assets/data/newsletters/1";
import rupeeBlur from "/src/assets/home/rupeeblur.svg";
import BackToTop from "./components/BackToTop";
import HorizonTimeline from "./components/horizon/HorizonTimeline";

function App() {
  return (
    <div className="relative bg-black overflow-x-hidden z-0">
      <Navbar />
      <BackToTop />
      <Routes>
        {/* Pages routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/horizon" element={<Horizon />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/finance-resources" element={<Finance />} />
        <Route
          path="/resources/consulting-resources"
          element={<Consulting />}
        />
        <Route path="/resources/product-resources" element={<ProdMan />} />

        <Route path="/resources/newsletters" element={<Newsletters />} />

        <Route path="/horizon/schedule" element={<HorizonTimeline />} />

        {/* Newsletters Routes */}
        {NewsLetterContentData.map((data, index) => {
          return (
            <Route
              key={index}
              path={`/resources/newsletters/${data.id}`}
              element={
                <div>
                  {" "}
                  <NewsletterCard id={data.id} />{" "}
                </div>
              }
            />
          );
        })}

        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      <Footer />

      {/* Background elements */}
      <img
        className="fixed h-10 w-10 top-1/2 right-1/4 z-0 rotate-[60deg] opacity-50 "
        src={rupeeBlur}
        alt=""
        title="svg"
      />
      <img
        className="fixed h-10 w-10 bottom-1/4 left-1/4 z-0 rotate-[-60deg] opacity-50 "
        src={rupeeBlur}
        alt=""
        title="svg"
      />
      <img
        className="fixed h-10 w-10 left-[10%] top-1/4 z-0 rotate-[60deg] opacity-50"
        src={rupeeBlur}
        alt=""
        title="svg"
      />
      <img
        className="fixed h-10 w-10 right-[10%] bottom-[10%] z-0 opacity-50  "
        src={rupeeBlur}
        alt=""
        title="svg"
      />
      <img
        className="fixed h-10 w-10 right-[30%] bottom-[80%] z-0 opacity-50  "
        src={rupeeBlur}
        alt=""
        title="svg"
      />
      <img
        className="fixed h-10 w-10 left-[30%] bottom-[90%] opacity-50  "
        src={rupeeBlur}
        alt=""
        title="svg"
      />
    </div>
  );
}

export default App;
