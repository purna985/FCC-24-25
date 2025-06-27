import React, { useState, useEffect } from 'react';

// Main App component
const DynamicTitle = () => {
  // State to control the visibility and animation of the first line
  const [showFirstLine, setShowFirstLine] = useState(false);
  // State to store the index of the currently displayed word in the second line
  const [currentSecondLineWordIndex, setCurrentSecondLineWordIndex] = useState(0);
  // NEW State to control when the second line starts displaying
  const [showSecondLine, setShowSecondLine] = useState(false);

  // The words for the second line that will cycle
  const wordsForSecondLine = ["Finance Practice", "Quant Finance", "Consulting"];

  useEffect(() => {
    // --- Animation for the first line: "Learn,Build,Excel in" ---
    // Set a timeout to trigger the first line's animation after a small initial delay
    const firstLineAnimationDelay = setTimeout(() => {
      setShowFirstLine(true);
    }, 500); // Start showing the first line after 0.5 seconds

    // --- Animation for the second line's words: Replace each word sequentially ---
    // Calculate the delay before the second line's words start cycling.
    // This starts after the first line's animation completes (2s) plus its initial delay (0.5s)
    // and an additional buffer (0.5s) to create a pause.
    const secondLineStartDelay = 2000 + 500 + 500; // Total 3 seconds

    let intervalId; // Variable to hold the interval ID for cleanup

    // Use a setTimeout to initiate the word cycling after the `secondLineStartDelay`
    const startSecondLineAnimation = setTimeout(() => {
      setShowSecondLine(true); // Make the second line visible after the delay
      // Set up an interval to cycle through the words for the second line
      intervalId = setInterval(() => {
        setCurrentSecondLineWordIndex(prevIndex =>
          // Increment the index, and loop back to 0 if it exceeds the array length
          (prevIndex + 1) % wordsForSecondLine.length
        );
      }, 3000); // Change word every 2 seconds (this includes the fade-in animation time)
    }, secondLineStartDelay);


    // Cleanup function: This runs when the component unmounts
    return () => {
      clearTimeout(firstLineAnimationDelay);     // Clear the timeout for the first line animation
      clearTimeout(startSecondLineAnimation);    // Clear the timeout that starts the interval
      if (intervalId) {                          // If the interval was set, clear it
        clearInterval(intervalId);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    // Main container for the application, setting up a full-screen, centered layout
    <div className="text-left">
      {/* Custom CSS for animations using a <style> tag.
          In a real-world scenario with a full Tailwind setup, these keyframes
          would typically be defined in tailwind.config.js. */}
      <style>
        {`
        /* Keyframes for the right-to-left reveal of the first line */
        @keyframes revealRightToLeft {
          0% {
            clip-path: inset(0 100% 0 0); /* Start fully clipped from the right */
            opacity: 0;
          }
          1% {
             opacity: 1; /* Make visible as soon as animation starts */
          }
          100% {
            clip-path: inset(0 0% 0 0);   /* End fully visible */
            opacity: 1;
          }
        }

        /* Keyframes for the fade-in-up effect of the second line words */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px); /* Start slightly below */
          }
          100% {
            opacity: 1;
            transform: translateY(0);    /* End at original position, fully visible */
          }
        }

        /* Tailwind utility classes for applying the animations */
        .animate-revealRightToLeft {
          animation: revealRightToLeft 2s forwards ease-out; /* 2s duration, keeps final state */
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s forwards ease-out; /* 0.7s duration, keeps final state */
        }
        `}
      </style>

      {/* Container for the text content, centered */}
      <div className="text-center">
        {/* First line: "Learn,Build,Excel in" */}
        <h1 className={`gap-x-3 text-left text-4xl md:text-5xl font-schibsted font-bold bg-gradient-to-r from-[#6B72DA] to-[#F3FFD8] bg-clip-text text-transparent overflow-hidden whitespace-nowrap mb-2.5
                        ${showFirstLine ? 'animate-revealRightToLeft' : 'opacity-0'}`}>
          Learn. Build. Excel in
        </h1>
        {/* Second line: dynamically rendered word, replacing previous one */}
        <div className="gap-x-3 text-left text-4xl md:text-5xl text-schibsted font-schibsted font-bold bg-gradient-to-r from-[#6B72DA] to-[#F3FFD8] bg-clip-text text-transparent">
          {/* Only render the second line word if the first line has started its animation
              AND the delay for the second line has passed. */}
          {showFirstLine && showSecondLine && wordsForSecondLine.length > 0 && (
            <span
              // Use the index as a key to force React to re-render the span when the word changes,
              // which re-triggers the fadeInUp animation for the new word.
              key={currentSecondLineWordIndex}
              className="gap-x-3 text-4xl md:text-5xl font-schibsted bg-gradient-to-r from-[#6B72DA] to-[#F3FFD8] bg-clip-text text-transparent inline-block animate-revealRightToLeft mb-5 sm:mx-3 py-1"
            >
              {wordsForSecondLine[currentSecondLineWordIndex]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicTitle;
