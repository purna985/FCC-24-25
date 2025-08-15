import React from 'react';

// Main App component
const ScrollAnimation = () => {
  // The URL of the uploaded image.
  const uploadedImageUrl = 'src/assets/images/events/ScrollAnimation/img1.png';

  // Define the items for the carousel.
  // Each item can be either 'single' (one image) or 'stacked' (two images).
  // The heights are adjusted to make the overall visual height of each card consistent.
  const rawScrollItems = [
    // Stacked images example
    { type: 'stacked', topImage: 'src/assets/images/events/ScrollAnimation/img1.png', bottomImage: 'src/assets/images/events/ScrollAnimation/img2.png' },
    { type: 'single', image: 'src/assets/images/events/ScrollAnimation/img3.png' }, // Single image example
    { type: 'stacked', topImage: 'src/assets/images/events/ScrollAnimation/img4.png', bottomImage: 'src/assets/images/events/ScrollAnimation/img5.png' },
    { type: 'single', image: 'src/assets/images/events/ScrollAnimation/img6.png' },
  ];

  // To make the scrolling seamless, we duplicate the items.
  // This allows the animation to loop smoothly without a visible jump.
  const duplicatedScrollItems = [...rawScrollItems, ...rawScrollItems];

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Tailwind CSS and custom styles for the scrolling animation */}
      <style>
        {`
       
        /* Define the keyframes for the horizontal scrolling animation */
        @keyframes scroll-left {
          0% {
            transform: translateX(0%); /* Start at the original position */
          }
          100% {
            transform: translateX(-50%); /* Move half of the content width to the left.
                                           Since we duplicated the content, this brings the start
                                           of the second set of items to the beginning, creating a loop. */
          }
        }

        /* Apply the animation to the scrolling container */
        .scrolling-container {
          animation: scroll-left 30s linear infinite; /* 30 seconds duration, linear speed, infinite loop */
          display: flex; /* Use flexbox to arrange items horizontally */
          white-space: nowrap; /* Prevent items from wrapping to the next line */
          width: fit-content; /* Ensure the container takes only the width of its content */
        }

        /* Pause the animation when the user hovers over the scrolling content */
        .scrolling-container:hover {
          animation-play-state: paused;
        }
        `}
      </style>

      {/* Main container for the scrolling section */}
      <div className="relative w-full overflow-hidden py-8">
        {/* The actual container that will scroll */}
        <div className="scrolling-container">
          {duplicatedScrollItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-1
                         transform hover:scale-105 transition-transform duration-300 ease-in-out
                         flex flex-col items-center justify-center"
            >
              {item.type === 'stacked' ? (
                <>
                  {/* Top Image for stacked type */}
                  <img
                    src={item.topImage}
                    alt={`Scrolling Item Top ${index + 1}`}
                    className="w-[300px] h-[273px] object-cover rounded-lg border border-gray-300 mb-2" // h-32 (128px) + mb-2 (8px)
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/640x320/FF0000/FFFFFF?text=Top+Image+Error";
                    }}
                  />
                  {/* Bottom Image for stacked type */}
                  <img
                    src={item.bottomImage}
                    alt={`Scrolling Item Bottom ${index + 1}`}
                    className="w-[300px] h-[273px] object-cover rounded-lg border border-gray-300 mb-3" // h-32 (128px) + mb-3 (12px)
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/640x320/0000FF/FFFFFF?text=Bottom+Image+Error";
                    }}
                  />
                </>
              ) : (
                // Single image type
                <img
                  src={item.image}
                  alt={`Scrolling Item Single ${index + 1}`}
                  // The height for a single image is calculated to match the combined
                  // height of two h-32 images plus their mb-2 margin: 128px + 8px + 128px = 264px.
                  // Tailwind's h-64 is 256px, h-72 is 288px. Using h-[264px] for precision.
                  // mb-3 is added to match the spacing below the second stacked image.
                  className="w-[400px] h-[556px] object-cover rounded-lg border border-gray-300 mb-3"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/640x528/008000/FFFFFF?text=Single+Image+Error"; // Green error placeholder
                  }}
                />
              )}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;