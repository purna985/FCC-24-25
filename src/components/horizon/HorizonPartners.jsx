import React from 'react';
import campustimes from '@/assets/partners-images/campustimes.png';
import easemytrip from '@/assets/partners-images/easemytrip.png';
import fablabs from '@/assets/partners-images/fablabs.png';
import finlatics from '@/assets/partners-images/finlatics.png';
import ims from '@/assets/partners-images/ims.png';
import interviewbuddy from '@/assets/partners-images/interviewbuddy.png';
import itic from '@/assets/partners-images/itic.png';
import jamboree from '@/assets/partners-images/jamboree.png';
import manya from '@/assets/partners-images/manya.png';
import monster from '@/assets/partners-images/monster.png';
import oneelement from '@/assets/partners-images/oneelement.png';
import penguin from '@/assets/partners-images/penguin.png';
import skilligence from '@/assets/partners-images/skilligence.png';

const carouselData1 = [
  { image: oneelement, title: 'Platinum Sponsor' },
  { image: manya, title: 'Platinum Sponsor' },
  { image: fablabs, title: 'Merchandise Partner' },
  { image: ims, title: 'Bronze Sponsor' },
  { image: skilligence, title: 'Workshop Partner' },
  { image: penguin, title: 'Publishing Partner' },
];
const carouselData2 = [
  { image: itic, title: 'Branding Partner' },
  { image: monster, title: 'Energy Partner' },
  { image: campustimes, title: 'Youth Partner' },
  { image: easemytrip, title: 'Travel Partner' },
  { image: interviewbuddy, title: 'Learning Partner' },
  { image: finlatics, title: 'Certification Partner' },
  { image: jamboree, title: 'Education Partner' },
];

// Duplicate images for a seamless loop
const duplicatedData1 = [...carouselData1, ...carouselData1];
const duplicatedData2 = [...carouselData2, ...carouselData2];

const HorizonPartners = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden relative my-20 md:py-10">
      <h2 className="font-rosario text-center text-4xl md:text-6xl font-bold mb-8">Our Partners</h2>
      <div className="relative w-full overflow-hidden space-y-6">
        {/* First Carousel - Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 min-w-max animate-scroll-left hover:paused">
            {duplicatedData1.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 md:w-48 lg:w-56 shadow-md rounded-xl p-3 flex flex-col items-center transition-transform duration-300 hover:scale-105 "
              >
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" loading="lazy" />
                <p className="mt-2 md:text-md text-sm font-semibold text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Second Carousel - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 min-w-max animate-scroll-right hover:paused">
            {duplicatedData2.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 md:w-48 lg:w-56 shadow-md rounded-xl p-3 flex flex-col items-center transition-transform duration-300 hover:scale-105 "
              >
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" loading="lazy" />
                <p className="mt-2 md:text-md text-sm  font-semibold text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }

          .animate-scroll-left {
            display: flex;
            width: max-content;
            animation: scroll-left 40s linear infinite;
          }

          .animate-scroll-right {
            display: flex;
            width: max-content;
            animation: scroll-right 40s linear infinite;
          }

          .hover\:paused:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default HorizonPartners;
