import React from 'react';
import { useState } from 'react';

// Main App component
const UpcomingEvent = () => {
  // Array of background images for the hero section
  const images = [
    "src/assets/images/events/img1.png",
    "src/assets/images/events/EventArchive/img5.jpg",
  ];

  // State to manage the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" min-h-screen w-full flex items-center justify-center ">

      {/* Hero Section Container */}
      <div
        className="relative w-full max-w-5xl h-[500px] md:h-[600px] lg:h-[700px]
                   rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for text and gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-8 flex flex-col justify-end">
          {/* "Upcoming event" tag */}
          <div className="absolute font-schibsted top-8 right-8 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className='text-xl font-schibsted '>Upcoming event</span>
          </div>

          {/* Main content */}
          <h1 className="text-[#EBEBEB] font-schibsted text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lorem ipsum
          </h1>
          <p className="text-[#BBBBBB] font-outfit text-lg md:text-xl max-w-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet
            lorem et commodo a nulla diam.
          </p>

          {/* Location tag */}
        <div className="flex items-center text-[#EBEBEB] text-base md:text-lg mb-12
                        bg-[#121649] px-4 py-2 rounded-full w-fit font-outfit border border-blue-200"> {/* Added bg-blue-600, px-4 py-2, rounded-full, w-fit */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-[#EBEBEB]" // Changed icon color to match text
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className='text-xl font-schibsted '>Auditorium</span>
          </div>
          {/* Navigation buttons */}
            <div className="flex justify-center w-full "> {/* Flex container to center the gray box */}
            <div className="flex space-x-4 p-3 rounded-xl shadow-lg w-fit"> {/* Gray box around buttons */}
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white/80 hover:bg-[#EBEBEB] transition-colors duration-200
                           focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
                           shadow-lg mx-8"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-white/80 hover:bg-[#EBEBEB] transition-colors duration-200
                           focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
                           shadow-lg "
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              </div>
            </div> 
         </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
