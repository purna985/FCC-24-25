import Speakers from '../components/Speakers'
import rupeeBlur from "/src/assets/home/rupeeblur.svg"

import image1 from '../assets/horizon-about/p1.png'
import image2 from '../assets/horizon-about/p2.png'
import image3 from '../assets/horizon-about/p3.png'
import image4 from '../assets/horizon-about/p4.png'

import simg1 from '../assets/sponsors/abhibus-min.png'
import simg2 from '../assets/sponsors/decathalon-min.png'
import simg3 from '../assets/sponsors/easemytrip-min.png'
import simg4 from '../assets/sponsors/edufabrica-min.png'
import simg5 from '../assets/sponsors/elearnmarkets-min.png'
import simg6 from '../assets/sponsors/finlarics-min.png'
import simg7 from '../assets/sponsors/grabon-min.png'
import simg8 from '../assets/sponsors/monster-min.png'
import simg9 from '../assets/sponsors/plum-min.png'
import simg10 from '../assets/sponsors/preplounge-min.png'
import simg11 from '../assets/sponsors/product-min.png'
import simg12 from '../assets/sponsors/sid farm-min.png'
import simg13 from '../assets/sponsors/startupnews-min.png'
import simg14 from '../assets/sponsors/stockgro-min.png'

import glimpseVideo from "/src/assets/home/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4"
import { BackgroundLines } from "@/components/ui/background-lines";

function Horizon() {

  const images = [
    { img_id: image1 }, { img_id: image2 }, { img_id: image3 }, { img_id: image4 }
  ];

  const s_images = [
    { img_id: simg1 }, { img_id: simg2 }, { img_id: simg3 }, { img_id: simg4 }, { img_id: simg5 },
    { img_id: simg6 }, { img_id: simg7 }, { img_id: simg8 }, { img_id: simg9 }, { img_id: simg10 },
    { img_id: simg11 }, { img_id: simg12 }, { img_id: simg13 }, { img_id: simg14 }
  ]

  return (
    <div className='text-white font-rosario z-30'>
      {/* Landing part Horizon */}
    
      <div className='relative md:min-h-[80vh] px-6 pt-12 my-12 md:my-[6rem] text-center  z-50 '>
        <div className='absolute left-0 top-[20vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] '></div>
        <div className='absolute right-0 top-[90vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] '></div>
      <BackgroundLines className='absolute  md:flex bg-transparent md:right-10 -top-16 right-10 md:-top-48 -z-10' />
        <p className=' text-lg md:text-[2.2vw] font-light font-rosario text-custom-blue pb-6 md-1:pb-4 '>
          FCC IIT-HYDERABAD  Presents
        </p>
        <div className='mx-auto w-full flex-col gap-0 m-6 md-1:mb-6 mt-0'>
          <p className='w-full font-semibold text-6xl md:text-[7rem] text-white  md-1:leading-normal'>HORIZON 25&apos;</p>
        </div>

        {/* Schedule Button */}
        {/* <div className="gap-2 flex justify-center py-8 md-1:py-2">
          <button className="font-rosario bg-custom-blue font-bold rounded-lg text-xl px-6 py-2 md-1:w-70p md-1:inline-block">
            TODAY'S SCHEDULE </button>
        </div> */}

      </div>

      {/* Horizon glimpse video */}
      <div className="sticky m-auto py-12 md:py-2 mt-10 md:mt-2 z-50 ">
        <div className='w-full h-full opacity-50 absolute z-10 ' ></div>
        <video className="px-3 mx-auto md:w-4/5" autoPlay muted loop draggable="false">
          <source src={glimpseVideo} />
          ./images/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4
        </video>
      </div>

      {/* About the Event */}
      <div className="relative mt-10p mx-auto w-full h-auto flex flex-col items-center p-1p
        justify-center bg-gradient-to-[#000D71] from-custom-gradient-2 to-custom-gradient-1 z-1 ">
        <div className='m-auto w-90p my-4 z-10'>
          <div className="font-rosario w-full flex items-baseline h-50p text-4xl md:text-6xl pt-2p pl-2p text-left leading-100p
            font-medium">
            About the Event
          </div>
          <div className="w-full h-auto text-custom-white text-2xl font-extralight leading-normal p-2p
            md-1:text-[1.3rem] ">Horizon 2025, the flagship event of FCC IITH, brings in some of the best speakers and leaders to promote the knowledge of Finance, Consulting,
            and Product Management among the community via thought-provoking Keynote Talks, Panel Discussions,
            Career Guidance Meetups, Networking Lobbies, Workshops and Competitions.
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
            In 2024-25,  Horizon aims to expand its influence to students community by inviting industry, academia, and government experts to share insights on Finance, Consulting,
            and Product Management.
            <p className='mt-0 mb-4'>We will introduce new competitions and workshops solidifying its status as the go-to platform for Finance, Consulting, and Product Management enthusiasts.</p>
          </div>
        </div>
        <div className='w-20 h-20  md:w-48 md:h-48 bg-blue-500 absolute top-0 right-0 blur-[5rem] md:blur-[8rem] z-10' ></div>
        <div className='w-20 h-20  md:w-48 md:h-48 bg-blue-500 absolute left-0 bottom-0 blur-[5rem] md:blur-[8rem] z-10' ></div>
        <img className="fixed w-10 h-10 z-0 bottom-1/4 left-[10%] rotate-[60deg] " src={rupeeBlur} alt="" title="svg" />
        <img className="fixed w-10 h-10 z-0 md:top-1/2 right-1/4 " src={rupeeBlur} alt="" title="svg" />
        <img className="fixed w-10 h-10 z-0 top-1/4 md:top-1/3 left-1/3 " src={rupeeBlur} alt="" title="svg" />
        <img className="fixed w-10 h-10 z-0 top-[40%] md:top-1/4 left-[10%] md:left-[15%] " src={rupeeBlur} alt="" title="svg" />
        <img className="fixed w-10 h-10 z-0 top-1/3 md:top-1/4 right-[10%] " src={rupeeBlur} alt="" title="svg" />
      </div>

      {/* Past Speakers */}

      <Speakers />

      {/* Partners */}
      <div className='flex flex-col justify-center items-center overflow-hidden relative my-6'>
        <div className='flex items-center justify-center mb-6'>
          <p className='font-rosario text-center mb-5 text-4xl md:text-6xl'>Partners</p>
        </div>
        <div className='flex w-full gap-3p animate-scroll-1'>
          <div className='flex basis-1/5 md-1:flex md-1:basis-1/4 gap-3p'>
            {s_images.map((image, index) => (
              <img src={image.img_id} key={index} alt={`Image ${index + 1}`}></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Horizon

