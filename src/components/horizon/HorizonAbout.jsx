import rupeeBlur from "/src/assets/home/rupeeblur.svg";

import image1 from '/src/assets/horizon-about/p1.png';
import image2 from '/src/assets/horizon-about/p2.png';
import image3 from '/src/assets/horizon-about/p3.png';
import image4 from '/src/assets/horizon-about/p4.png';

const images = [
    { img_id: image1 }, { img_id: image2 }, { img_id: image3 }, { img_id: image4 }
];

const HorizonAbout = () => {
    return (
        <div id="about" className="relative mx-auto w-full h-auto flex flex-col items-center p-6 bg-gradient-to-b from-custom-gradient-2 to-custom-gradient-1 z-1 text-white">
            <div className='max-w-6xl w-90p my-10 z-10'>
                {/* Section Title */}
                <h2 className="font-rosario text-4xl md:text-6xl font-bold text-left mb-6">About the Event</h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
                    Horizon 2025, the <b>Management Fest</b> of FCC IITH, brings together top speakers and leaders to share insights on finance, consulting, and product management. Look forward to thought-provoking keynote talks, hands-on workshops, panel discussions, career meetups, networking lobbies, competitions, and, of course, Pronites to keep the energy going!
                </p>

                {/* Image Grid */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 my-6'>
                    {images.map((image, index) => (
                        <img key={index} src={image.img_id} alt={`Image ${index + 1}`} className='w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105' />
                    ))}
                </div>

                {/* Vision Section */}
                <h2 className='font-rosario text-4xl md:text-6xl font-bold text-left mt-12 mb-6'>Our Vision for 2025</h2>
                
                <p className='text-lg md:text-xl font-light leading-relaxed'>
                    For Horizon 2025, we’re setting out to broaden our reach by connecting students with leaders from industry, academia, and government, diving into the world of Finance, Consulting, and Product Management.
                </p>
                <p className='mt-4 text-lg md:text-xl font-light leading-relaxed'>
                    We’re bringing in fresh competitions, interactive workshops, and standout sessions to make Horizon the spot for anyone into these fields. With theme reveals, laid-back fireside chats, hands-on finance workshops, and fun pronites, we’re aiming to create an event that’s both inspiring and a great time for everyone involved.
                </p>
            </div>
            
            {/* Decorative Blurred Elements */}
            <div className='w-24 h-24 md:w-48 md:h-48 bg-blue-500 absolute top-0 right-0 blur-3xl opacity-50 z-0'></div>
            <div className='w-24 h-24 md:w-48 md:h-48 bg-blue-500 absolute left-0 bottom-0 blur-3xl opacity-50 z-0'></div>
        </div>
    );
};

export default HorizonAbout;
