import React, { useState } from 'react';

const eventsData = {
  2025: {
    title: 'Events 2025',
    events: [
      {
        id: 'first-speaker',
        name: 'First Speaker',
        about: 'Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam. Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam. Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam.',
        gallery: [
          'src/assets/images/events/EventArchive/img1.jpg',
          'src/assets/images/events/EventArchive/img2.jpg',
          'src/assets/images/events/EventArchive/img3.jpg',
          'src/assets/images/events/EventArchive/img4.jpg',
        ],
        videoUrl: 'src/assets/images/events/EventArchive/img5.jpg',
      },
      {
        id: 'fintech-workshop',
        name: 'FinTech Workshop',
        about: 'A deep dive into the future of financial technology. This workshop covers blockchain, AI in finance, and modern payment gateways.',
        gallery: [
          'src/assets/images/events/EventArchive/img1.jpg',
          'src/assets/images/events/EventArchive/img3.jpg',
        ],
        videoUrl: 'src/assets/images/events/EventArchive/img5.jpg',
      },
      {
        id: 'club-launch',
        name: 'Club Launch Event',
        about: 'Celebrating the launch of our new innovation club. Join us for an evening of networking, food, and fun.',
         gallery: [
          'src/assets/images/events/EventArchive/img2.jpg',
          'src/assets/images/events/EventArchive/img4.jpg',
        ],
        videoUrl: 'https://placehold.co/1280x720/000000/ffffff?text=Launch+Recap',
      },
      {
        id: 'first-speaker-session',
        name: 'First Speaker Session',
        about: 'An inspiring session from a leading industry expert on the future of technology and society.',
        gallery: [],
        videoUrl: null,
      },
    ],
  },
  2024: {
    title: 'Events 2024',
    events: [
       { id: 'annual-conf-24', name: 'Annual Conference 2024', about: 'Our biggest event of 2024.', gallery: [], videoUrl: null },
       { id: 'summer-hackathon-24', name: 'Summer Hackathon', about: 'A 24-hour coding challenge.', gallery: [], videoUrl: null },
    ]
  },
  2023: {
    title: 'Events 2023',
    events: [
       { id: 'keynote-23', name: 'Spring Keynote 2023', about: 'Kicking off the year with big announcements.', gallery: [], videoUrl: null },
    ]
  },
    2022: {
    title: 'Events 2022',
    events: [
       { id: 'product-reveal-22', name: 'Product Reveal 2022', about: 'Unveiling our latest product.', gallery: [], videoUrl: null },
    ]
  },
    2021: {
    title: 'Events 2021',
    events: [
       { id: 'community-meetup-21', name: 'Community Meetup', about: 'Our first community event.', gallery: [], videoUrl: null },
    ]
  },
};

const years = [2021, 2022, 2023, 2024, 2025];

const PlayIcon = () => (
  <svg className="w-16 h-16 text-white opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.048A1.125 1.125 0 019 15.118V8.882c0-.877.921-1.4 1.671-.983l5.603 3.048z" clipRule="evenodd" />
  </svg>
);

const EventArchive = () =>{
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedEventId, setSelectedEventId] = useState(eventsData[2025].events[0].id);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    // When year changes, select the first event of that year
    if (eventsData[year] && eventsData[year].events.length > 0) {
      setSelectedEventId(eventsData[year].events[0].id);
    } else {
      setSelectedEventId(null);
    }
  };

  const activeEventData = eventsData[selectedYear]?.events.find(e => e.id === selectedEventId);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl sm:text-5xl font-schibsted font-bold bg-gradient-to-r from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent overflow-hidden mb-5">
            Full Event Archive
            </h1>
          <p className="text-gray-400 font-outfit text-2xl mt-2">Every milestone, every session, every moment that built our community.</p>
        </header>

        {/* Year Navigation */}
        <nav className="flex justify-center mb-10 ">
          <div className="bg-[#292929] p-1 rounded-lg flex space-x-1 max-w-[100%]">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-16 sm:px-6 py-3 text-sm font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                  selectedYear === year
                    ? 'bg-[#4a55ff] font-schibsted text-lg text-[#EBEBEB] shadow-md '
                    : 'font-schibsted text-lg text-[#EBEBEB] hover:bg-gray-700'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row gap-8">
          
          {/* Left Sidebar: Event List */}
          <aside className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
            <h2 className="text-2xl font-schibsted font-bold bg-gradient-to-r from-[#97DD01] to-[#F3FFD8] bg-clip-text text-transparent mb-4">{eventsData[selectedYear]?.title || `Events ${selectedYear}`}</h2>
            <ul className="space-y-2">
              {eventsData[selectedYear]?.events.map((event) => (
                <li key={event.id}>
                  <button
                    onClick={() => setSelectedEventId(event.id)}
                    className={`w-full font-outfit text-[18px] text-left px-4 py-2.5 text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                      selectedEventId === event.id
                        ? 'bg-[#4a55ff] text-[#EBEBEB] '
                        : 'hover:bg-[#2a2b33] text-[#EBEBEB]'
                    }`}
                  >
                    {event.name}
                  </button>
                </li>
              ))}
               {!eventsData[selectedYear]?.events.length && (
                <p className="text-gray-500 italic px-4">No events recorded for this year.</p>
              )}
            </ul>
          </aside>

          {/* Right Panel: Event Details */}
          <section className="w-full md:w-3/4 lg:w-4/5 bg-[#18191f] p-6 sm:p-8 rounded-xl">
            {activeEventData ? (
              <div className="space-y-10">
                {/* About Section */}
                <div>
                  <h3 className="text-2xl font-schibsted font-bold text-[#EBEBEB] mb-3">About</h3>
                  <p className="text-[#BBBBBB] leading-relaxed">
                    {activeEventData.about}
                  </p>
                </div>

                {/* Event Gallery */}
                {activeEventData.gallery && activeEventData.gallery.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold font-schibsted text-[#EBEBEB] mb-4">Event Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      {activeEventData.gallery.map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          alt={`Event gallery image ${index + 1}`}
                          className="rounded-lg w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
                          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/ff0000/ffffff?text=Error'; }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Recap Video */}
                {activeEventData.videoUrl && (
                    <div>
                        <h3 className="text-2xl font-schibsted font-bold text-white mb-4">Recap Video</h3>
                        <a href="#" className="block relative group">
                             <img 
                                src={activeEventData.videoUrl} 
                                alt="Recap video thumbnail" 
                                className="rounded-lg w-full object-cover aspect-video"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1280x720/ff0000/ffffff?text=Error'; }}
                             />
                             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg transition-opacity duration-300 group-hover:bg-opacity-20">
                                 <PlayIcon />
                             </div>
                        </a>
                    </div>
                )}

              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 text-lg">Select an event to see details.</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default EventArchive