import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // Show after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-[#2462EB] text-white py-3 px-5 rounded-sm shadow-md shadow-black transition-opacity z-[100] ${
        visible ? "opacity-90" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
