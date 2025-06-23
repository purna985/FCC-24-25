import React, { useState, useEffect, useRef } from 'react';

// Data for carousel items - You can replace these with your actual data
const items = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MjA4MDF8MHwxfHNlYXJjaHw0fHxBY2Nlc3MlMjBDb250cm9sJTIwTGlzdHMlMkMlMjBJUHY0JTIwbmV0d29ya2luZyUyQyUyMHBhY2tldCUyMGZpbHRlcmluZ3xlbnwxfDB8fHwxNzI4NTQxNTcyfDA&ixlib=rb-4.0.3&q=85&w=1000&fit=crop&h=340&q=75&fm=webp',
    date: 'Mar 2024',
    title: 'Horizon 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    attendees: '250 Attendees',
    location: 'Auditorium'
  },
  {
    id: 2,
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTE9lKVZ8MIL2A-WkG-6jN2bP3um1VMY78h0MS7-gJTI0qowWAP',
    date: 'Mar 2024',
    title: 'Horizon 2024',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    attendees: '250 Attendees',
    location: 'Auditorium'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvTFkQawR6ZQXtUaDNmNZy0fkS8iKtFjazrnRVGfmAOZZvcA5',
    date: 'Mar 2024',
    title: 'Horizon 2024',
    description: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
    attendees: '250 Attendees',
    location: 'Auditorium'
  },
  
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTrackRef = useRef(null); // Ref for the inner container that moves
  const itemRef = useRef(null); // Ref for a single carousel item to measure its dimensions
  const [itemWidth, setItemWidth] = useState(0);

  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    const calculateItemDimensions = () => {
      if (itemRef.current && carouselTrackRef.current) {
        const itemElement = itemRef.current;
        // Get the actual rendered width of a single item (e.g., w-80 + padding + border)
        const itemTotalWidth = itemElement.offsetWidth;

        // Get the column gap defined by Tailwind's `gap-x-6` on the parent flex container.
        // `column-gap` is the CSS property for `gap-x`. `1.5rem` is 24px.
        const trackComputedStyle = window.getComputedStyle(carouselTrackRef.current);
        const columnGap = parseFloat(trackComputedStyle.getPropertyValue('column-gap')) || 0;

        // The total width to translate for each slide is the item's width plus the gap.
        setItemWidth(itemTotalWidth + columnGap);

        if (itemWidth === 0 && items.length > 0) {
          setCurrentIndex(items.length);
        }
      }
    };

    // Call the function on component mount and on window resize.
    calculateItemDimensions();
    window.addEventListener('resize', calculateItemDimensions);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('resize', calculateItemDimensions);
    };
  }, [items.length, itemWidth]); // Re-run when `items.length` or `itemWidth` changes.

  // useEffect to apply the CSS `transform` to the carousel track based on `currentIndex` and `itemWidth`.
  // This controls the visual sliding motion.
  useEffect(() => {
    if (carouselTrackRef.current && itemWidth > 0) {
      // Apply a smooth transition for sliding.
      carouselTrackRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselTrackRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex, itemWidth]); // Re-run when `currentIndex` or `itemWidth` changes.

  // useEffect for automatic sliding.
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        // Infinite loop logic:
        // If `nextIndex` is about to go beyond the second set of items (i.e., into the third set),
        // we instantly jump the carousel back to the equivalent position at the beginning of the second set.
        // `items.length * 2` represents the start of the third set.
        if (nextIndex >= items.length * 2) {
          if (carouselTrackRef.current) {
            carouselTrackRef.current.style.transition = 'none'; // Temporarily disable transition for the jump
            // Jump back to the start of the second group of items
            carouselTrackRef.current.style.transform = `translateX(-${items.length * itemWidth}px)`;

            // After a very short delay, re-enable the transition. This delay allows the browser
            // to register the `transition: none` before the next slide animation starts.
            setTimeout(() => {
              if (carouselTrackRef.current) {
                carouselTrackRef.current.style.transition = 'transform 0.5s ease-in-out';
              }
            }, 50); // Small delay, e.g., 50 milliseconds
          }
          return items.length; // Reset `currentIndex` to the start of the second group
        } else {
          return nextIndex; // Move to the next item
        }
      });
    }, 3000); // Slide every 3 seconds

    // Clean up the interval when the component unmounts or dependencies change.
    return () => clearInterval(slideInterval);
  }, [items.length, itemWidth]); // Re-run when `items.length` or `itemWidth` changes.

  // Component for rendering a single carousel card.
  const CarouselCard = ({ item, innerRef }) => (
    <div
      ref={innerRef} // Attach this ref only to the first item for width measurement.
      className="flex-shrink-0 w-96 bg-gray-800 rounded-xl shadow-lg p-1 border border-gray-700 font-inter"
    >
      {/* Image section */}
      <div className="relative rounded-lg overflow-hidden h-48 mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          // Fallback image in case the original image fails to load.
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/400/fff?text=Image+Error'; }}
        />
        {/* Date tag overlay */}
        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-md">
          {/* Calendar icon (SVG) */}
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          {item.date}
        </div>
      </div>
      {/* Content section */}
      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
      {/* `line-clamp-2` truncates description to 2 lines for consistent card height */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
      {/* Buttons section */}
      <div className="flex flex-wrap gap-2 justify-start">
        <button className="flex items-center px-4 py-2 bg-[#121649] text-white text-sm rounded-full shadow-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          {/* Attendees icon (SVG) */}
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
          {item.attendees}
        </button>
        <button className="flex items-center px-4 py-2 bg-[#121649] text-white text-sm rounded-full shadow-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          {/* Location icon (SVG) */}
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 100-4 2 2 000 4z" clipRule="evenodd" />
          </svg>
          {item.location}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center py-0 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="flex flex-col relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Main carousel track container */}
        <div
          id="Section title"
          class="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
          <span
            class="bg-gradient-to-r text-Title-Title-2-fontSize text-3xl mb-[2%] from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent"
            >Glimpses of Excellence</span>
        </div>
        <div
          id="Section subtitle"
          class="mt-4 text-center font-normal text-base sm:text-lg mb-[3%] md:text-2xl leading-relaxed max-w-3xl mx-auto"
          >
          <span class="text-white font-Family-secondary "
            >Explore our journey through events, insights, projects, and the brilliant minds that make FCC a thriving community.</span>
        </div>
        <div
          ref={carouselTrackRef}
          // `flex` for horizontal layout, `gap-x-6` for spacing between items.
          // `transition-transform duration-500 ease-in-out` for smooth sliding animation.
          className="flex gap-x-6 transition-transform duration-500 ease-in-out"
          // Inline style for dynamic `translateX` based on `currentIndex` and `itemWidth`.
          style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
        >
          {/* Render all duplicated items */}
          {duplicatedItems.map((item, index) => (
            <CarouselCard
              key={`${item.id}-${index}`} // Unique key for each duplicated item
              item={item}
              // Only pass `itemRef` to the very first item (index 0) for measurement.
              // This ensures `itemWidth` is calculated correctly only once from a representative item.
              innerRef={index === 0 ? itemRef : null}
            />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
