import React from 'react';

// Using an inline SVG component avoids needing to install another dependency.
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    // The icon will transition smoothly when its transform class is changed on hover.
    // The `group-hover:translate-x-1` class on the parent button will trigger this.
    className="h-5 w-5 transition-transform duration-300 ease-in-out"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);


/**
 * A collaborative-themed button component.
 */
const CollaborateButton = () => {
  return (
    <button
      className="
        group /* The 'group' class allows us to style child elements on hover */
        flex
        items-center
        justify-center
        gap-3 /* Creates space between the text and the icon */
        px-6
        py-3
        font-semibold
        text-white
        bg-indigo-600 /* Main button color */
        rounded-lg
        shadow-md
        transition-all /* Smooth transition for all properties */
        duration-300
        ease-in-out
        hover:bg-indigo-700 /* Darker shade on hover */
        hover:shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
        focus:ring-offset-2
        focus:ring-offset-slate-900
      "
    >
      Collaborate
      {/* The icon gets its hover effect from the parent 'group' class */}
      <span className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out">
        <ArrowRightIcon />
      </span>
    </button>
  );
};

export default CollaborateButton