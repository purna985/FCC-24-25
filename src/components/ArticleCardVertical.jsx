import React from 'react';
import { AnimatedToolTip } from './AnimatedToolTip';
// ArticleCard component
const ArticleCardVertical = ({ article }) => {
    const people = article.people || []; 

  return (
    <div className="bg-[#1B1A1A] font-schibsted text-[#EBEBEB] rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
      {/* Article Image Section */}
      <div className="relative">
        <img
          src={article.imageUrl}
          alt="Article Thumbnail"
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop if placeholder also fails
            e.target.src = 'https://placehold.co/600x400/374151/FFFFFF?text=Image+Error'; // Fallback to a darker placeholder
          }}
        />
        {/* Read Time Badge */}
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {article.readTime}
        </span>
      </div>

      {/* Article Content Section */}
      <div className="p-4">
        {/* Tags and Date */}
        <div className="flex items-center justify-between text-sm font-schibsted text-[#EBEBEB] mb-2">
          <div className="flex space-x-2">
            {article.tags.map((tag, index) => (
              <span key={index} className="bg-blue-800 px-2 py-0.5 rounded-full text-base font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            {/* Calendar Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{article.publishDate}</span>
          </div>
        </div>

        {/* Article Title */}
        <h3 className="text-xl font-title font-semibold font-schibsted text-[#EBEBEB] mb-2">{article.title}</h3>

        {/* Article Description */}
        <p className="font-schibsted text-[#EBEBEB] text-sm mb-4 line-clamp-3">{article.description}</p>

        {/* Author Information */}
        <div className="flex items-center space-x-3">
            <AnimatedToolTip items={people} />
        </div>

        {/* Read More Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 font-schibsted text-[#CDFE64] hover:text-green-400 font-semibold transition-colors duration-200 py-4"
        >
          Read More 
          {/* Right Arrow Icon */}
          <span className="text-[#CDFE64]">→</span>
        </a>
      </div>
    </div>
  );
};
export default ArticleCardVertical