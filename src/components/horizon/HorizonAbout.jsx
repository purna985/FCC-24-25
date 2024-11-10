import rupeeBlur from "/src/assets/home/rupeeblur.svg"

import image1 from '/src/assets/horizon-about/p1.png'
import image2 from '/src/assets/horizon-about/p2.png'
import image3 from '/src/assets/horizon-about/p3.png'
import image4 from '/src/assets/horizon-about/p4.png'

const images = [
    { img_id: image1 }, { img_id: image2 }, { img_id: image3 }, { img_id: image4 }
];

const HorizonAbout = () => {
    return (
        <div className="relative mt-10p mx-auto w-full h-auto flex flex-col items-center p-1p
        justify-center bg-gradient-to-[#000D71] from-custom-gradient-2 to-custom-gradient-1 z-1 ">
            <div className='m-auto w-90p my-4 z-10'>
                <div className="font-rosario w-full flex items-baseline h-50p text-4xl md:text-6xl pt-2p pl-2p text-left leading-100p
            font-medium">
                    About the Event
                </div>
                <div className="w-full h-auto text-custom-white text-2xl font-extralight leading-normal p-2p
            md-1:text-[1.3rem] ">Horizon 2025, the flagship event of FCC IITH, brings together top speakers and leaders to share insights on finance, consulting, and product management. Look forward to thought-provoking keynote talks, hands-on workshops, panel discussions, career meetups, networking lobbies, competitions, and, of course, Pronites to keep the energy going!
                </div>

                <div className='w-full h-auto flex justify-evenly items-center flex-wrap my-4'>
                    <div className='w-full flex flex-wrap justify-between'>
                        {images.map((image, index) => (
                            <img className='md-1:w-1/4 md-2:w-20p' key={index} src={image.img_id} alt={`Image ${index + 1}`} />
                        ))}
                    </div>
                </div>

                <div className='font-rosario flex items-baseline h-1/2 leading-100p text-left font-medium text-4xl pt-2p pl-2p'>
                    Our Vision for 2025
                </div>


                <div className='w-full h-auto text-custom-white text-2xl font-extralight leading-normal p-2p
              md-1:text-[1.2rem]'>
                    For Horizon 2025, we’re setting out to broaden our reach by connecting students with leaders from industry, academia, and government, diving into the world of Finance, Consulting, and Product Management.
                    <p className='mt-0 mb-4'>We’re bringing in fresh competitions, interactive workshops, and standout sessions to make Horizon the spot for anyone into these fields. <br /> With theme reveals, laid-back fireside chats, hands-on finance workshops, and fun pronites, we’re aiming to create an event that’s both inspiring and a great time for everyone involved.</p>
                </div>
            </div>
            <div className='w-20 h-20  md:w-48 md:h-48 bg-blue-500 absolute top-0 right-0 blur-[5rem] md:blur-[8rem] z-10' ></div>
            <div className='w-20 h-20  md:w-48 md:h-48 bg-blue-500 absolute left-0 bottom-0 blur-[5rem] md:blur-[8rem] z-10' ></div>
            <img className="fixed w-10 h-10 z-0 bottom-1/4 left-[10%] rotate-[60deg] " src={rupeeBlur} alt="" title="svg" />
            <img className="fixed w-10 h-10 z-0 md:top-1/2 right-1/4 " src={rupeeBlur} alt="" title="svg" />
            <img className="fixed w-10 h-10 z-0 top-1/4 md:top-1/3 left-1/3 " src={rupeeBlur} alt="" title="svg" />
            <img className="fixed w-10 h-10 z-0 top-[40%] md:top-1/4 left-[10%] md:left-[15%] " src={rupeeBlur} alt="" title="svg" />
            <img className="fixed w-10 h-10 z-0 top-1/3 md:top-1/4 right-[10%] " src={rupeeBlur} alt="" title="svg" />
        </div>)
}

export default HorizonAbout