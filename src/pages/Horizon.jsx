import React from 'react'

import image1 from '../assets/images/horizon-about/1.svg'
import image2 from '../assets/images/horizon-about/2.svg'
import image3 from '../assets/images/horizon-about/3.svg'
import image4 from '../assets/images/horizon-about/4.svg'

import psimg1 from '../assets/images/pastspeakers/akhilsharma.svg'
import psimg2 from '../assets/images/pastspeakers/gauravmahindra.svg'
import psimg3 from '../assets/images/pastspeakers/rishabhjain.svg'
import psimg4 from '../assets/images/pastspeakers/subbaperepa.svg'

import simg1 from '../assets/images/sponsors/abhibus-min.png'
import simg2 from '../assets/images/sponsors/decathalon-min.png'
import simg3 from '../assets/images/sponsors/easemytrip-min.png'
import simg4 from '../assets/images/sponsors/edufabrica-min.png'
import simg5 from '../assets/images/sponsors/elearnmarkets-min.png'
import simg6 from '../assets/images/sponsors/finlarics-min.png'
import simg7 from '../assets/images/sponsors/grabon-min.png'
import simg8 from '../assets/images/sponsors/monster-min.png'
import simg9 from '../assets/images/sponsors/plum-min.png'
import simg10 from '../assets/images/sponsors/preplounge-min.png'
import simg11 from '../assets/images/sponsors/product-min.png'
import simg12 from '../assets/images/sponsors/sid farm-min.png'
import simg13 from '../assets/images/sponsors/startupnews-min.png'
import simg14 from '../assets/images/sponsors/stockgro-min.png'

function Horizon() {

  const images = [
    { img_id: image1 }, { img_id: image2 }, { img_id: image3 }, { img_id: image4 }
  ];

  const ps_images = [
    { img_id: psimg1 }, { img_id: psimg2 }, { img_id: psimg3 }, { img_id: psimg4 }
  ];

  const s_images = [
    { img_id: simg1 }, { img_id: simg2 }, { img_id: simg3 }, { img_id: simg4 }, { img_id: simg5 },
    { img_id: simg6 }, { img_id: simg7 }, { img_id: simg8 }, { img_id: simg9 }, { img_id: simg10 },
    { img_id: simg11 }, { img_id: simg12 }, { img_id: simg13 }, { img_id: simg14 }
  ]

  return (
    <div className='text-white font-roboto'>

      {/* Landing part Horizon */}
      <div className='h-auto px-6 py-12 my-12 text-center  '>
        <p className='text-vw-2.3 font-normal text-dark-blue pb-6 md-1:pb-4 md-1:text-xl'>
          FCC IIT-HYDERABAD Presents
        </p>
        <div className='mx-auto w-full flex-col gap-0 m-6 md-1:mb-6 mt-0'>
          <p className='w-full font-normal text-vw-10 md:text-vw-10 md-1:text-6xl md-1:leading-normal'>HORIZON 24'</p>
        </div>
        <div className="gap-2 flex justify-center py-8 md-1:py-2">
          <button className="bg-custom-butt-bg hover:bg-custom-butt-bg-hover rounded-lg text-xl px-6 py-2 md-1:w-70p md-1:inline-block
          font-normal ">TODAY'S SCHEDULE </button>
        </div>
      </div>

      {/* About the Event */}
      <div className="mt-10p ml-auto mr-auto w-full h-auto flex flex-col items-center p-1p 
        justify-center bg-custom-grad-1">
        <div className='m-auto w-90p my-4'>
          <div className="md-1:hidden w-full flex items-baseline h-50p text-vw-7 pt-2p pl-2p text-left leading-100p
            font-medium">
            About,
            <br></br>
            the Event
          </div>
          <div className='md-2:hidden flex justify-center w-full items-baseline h-50p text-vw-7 pt-2p pl-2p pb-4'>
            About the Event
          </div>
          <div className="w-full h-auto text-custom-white text-vw-2.75 font-extralight leading-normal p-2p 
            md-1:text-vw-5 md-1:text-center">Horizon 2024, the flagship event of FCC IITH, brings in some of the best speakers and leaders to promote the knowledge of Finance, Consulting,
            and Product Management among the community via thought-provoking Keynote Talks, Panel Discussions,
            Career Guidance Meetups, Networking Lobbies, Workshops and Competitions.
          </div>

          <div className='w-full h-auto flex justify-evenly items-center flex-wrap my-4'>
            <div className='w-full flex flex-wrap justify-center'>
              {images.map((image, index) => (
                <img className='md-1:w-1/2 md-2:w-23p' key={index} src={image.img_id} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>

          <div className='md-1:hidden flex items-baseline h-1/2 leading-100p text-left font-medium text-vw-7 pt-2p pl-2p'>
            Our Vision
            <br></br>
            for 2024
          </div>
          <div className='md-2:hidden flex items-baseline h-1/2 leading-100p justify-center font-medium text-vw-7 pt-2p pl-2p md-1:pb-4'>
              Our Vision for 2024
          </div>

          <div className='w-full h-auto text-custom-white text-vw-2.75 font-extralight leading-normal p-2p
              md-1:text-vw-5 md-1:text-center'>
            In 2023-24,  Horizon aims to expand its influence to students community by inviting industry, academia, and government experts to share insights on Finance, Consulting,
            and Product Management.
            <p className='mt-0 mb-4'>We will introduce new competitions and workshops solidifying its status as the go-to platform for Finance, Consulting, and Product Management enthusiasts.</p>
          </div>
        </div>
      </div>
      
      {/* Past Speakers */}
      <div className='flex flex-col h-auto w-full items-center justify-center my-6'>
        <div className='flex items-center justify-center w-90p my-6'>
          <p className='mt-0 mb-4 text-7xl md-1:text-5xl md-1:w-full md-1:text-center'>Past Speakers</p>
        </div>
        <div className='px-12 my-6 flex justify-content-evenly w-full'>
          <div className='flex justify-evenly flex-wrap md-1:gap-3'>
            {ps_images.map((image,index)=>(
              <img className='w-23p h-auto md-1:w-2/5 md-1:flex-wrap ' src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsers */}
      <div className='flex flex-col justify-center items-center overflow-hidden relative my-6'>
        <div className='flex items-center justify-center'>
          <p className='text-center mb-4 text-7xl md-1:text-5xl'>Sponsors</p>
        </div>
        <div className='flex w-full gap-3p animate-scroll-1'>
          <div className='flex basis-1/5 md-1:flex md-1:basis-1/4 gap-3p'>
            {s_images.map((image, index)=>(
              <img src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Horizon  
