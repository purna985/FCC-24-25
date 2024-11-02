import React from 'react'
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
    <div className='text-white font-rosario'>
      {/* Landing part Horizon */}
      <div className='md:min-h-screen px-6 py-12 mt-12 text-center  '>
      <div className='absolute left-0 top-[20vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] '></div>
      <div className='absolute right-0 top-[90vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] '></div>

        <p className='text-vw-2.3 font-light font-rosario text-white pb-6 md-1:pb-4 md-1:text-lg'>
          FCC IIT-HYDERABAD <br /> Presents
        </p>
        <div className='mx-auto w-full flex-col gap-0 m-6 md-1:mb-6 mt-0'>
          <p className='w-full font-normal text-[4rem] text-custom-blue md:text-vw-10 md-1:leading-normal'>HORIZON 25&apos;</p>
        </div>
            <img className="absolute top-[20vh] left-[50vw] rotate-[60deg] " src={rupeeBlur} alt="" height="50" width="50" title="svg" />
            <img className="absolute top-[80vh] right-[10vw] " src={rupeeBlur} alt="" height="50" width="50" title="svg" />
            <img className="absolute top-[20vh] left-[20vw] " src={rupeeBlur} alt="" height="50" width="50" title="svg" />
            <img className="absolute top-[80vh] left-[10vw] " src={rupeeBlur} alt="" height="50" width="50" title="svg" />
            <img className="absolute top-[20vh] right-[10vw] " src={rupeeBlur} alt="" height="50" width="50" title="svg" />
        {/* Schedule Button */}
        {/* <div className="gap-2 flex justify-center py-8 md-1:py-2">
          <button className="font-rosario bg-custom-blue font-bold rounded-lg text-xl px-6 py-2 md-1:w-70p md-1:inline-block">
            TODAY'S SCHEDULE </button>
        </div> */}
      </div>

      {/* Horizon glimpse video */}
      <div className="m-auto py-[2vw] my-5 z-10">
        <video className=" md:h-[90vh] w-[80%] mx-auto md:w-[90vw]" autoPlay muted loop draggable="false">
          <source src={glimpseVideo} />
          ./images/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4
        </video>
      </div>




      {/* About the Event */}
      <div className="mt-10p ml-auto mr-auto w-full h-auto flex flex-col items-center p-1p
        justify-center bg-gradient-to-r from-custom-gradient-2 to-custom-gradient-1">
        <div className='m-auto w-90p my-4'>
          <div className="font-rosario md-1:hidden w-full flex items-baseline h-50p text-vw-7 pt-2p pl-2p text-left leading-100p
            font-medium">
            About,
            <br></br>
            the Event
          </div>
          <div className='font-rosario md-2:hidden flex justify-center w-full items-baseline h-50p text-vw-7 pt-2p pl-2p pb-4'>
            About the Event
          </div>
          <div className="w-full h-auto text-custom-white text-vw-2.75 font-extralight leading-normal p-2p
            md-1:text-[1.3rem] ">Horizon 2025, the flagship event of FCC IITH, brings in some of the best speakers and leaders to promote the knowledge of Finance, Consulting,
            and Product Management among the community via thought-provoking Keynote Talks, Panel Discussions,
            Career Guidance Meetups, Networking Lobbies, Workshops and Competitions.
          </div>

          <div className='w-full h-auto flex justify-evenly items-center flex-wrap my-4'>
            <div className='w-full flex flex-wrap justify-between'>
              {images.map((image, index) => (
                <img className='md-1:w-1/4 md-2:w-23p' key={index} src={image.img_id} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>

          <div className='font-rosario md-1:hidden flex items-baseline h-1/2 leading-100p text-left font-medium text-vw-7 pt-2p pl-2p'>
            Our Vision
            <br></br>
            for 2025
          </div>
          <div className='font-rosario md-2:hidden flex items-baseline h-1/2 leading-100p justify-center font-medium text-vw-7 pt-2p pl-2p md-1:pb-4'>
            Our Vision for 2025
          </div>

          <div className='w-full h-auto text-custom-white text-vw-2.75 font-extralight leading-normal p-2p
              md-1:text-[1.2rem]'>
            In 2024-25,  Horizon aims to expand its influence to students community by inviting industry, academia, and government experts to share insights on Finance, Consulting,
            and Product Management.
            <p className='mt-0 mb-4'>We will introduce new competitions and workshops solidifying its status as the go-to platform for Finance, Consulting, and Product Management enthusiasts.</p>
          </div>
        </div>
      </div>

      {/* Past Speakers */}

      <Speakers />

      {/* Sponsers */}
      <div className='flex flex-col justify-center items-center overflow-hidden relative my-6'>
        <div className='flex items-center justify-center mb-6'>
          <p className='font-rosario text-center mb-5 text-7xl md-1:text-5xl'>Sponsors</p>
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

