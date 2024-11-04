import React, { useState } from 'react'

import ps_2023_1 from '../assets/pastspeakers/Akhil_Sharma.png'
import ps_2023_2 from '../assets/pastspeakers/Gaurav_Mahindra.png'
import ps_2023_3 from '../assets/pastspeakers/Rishabh_Jain.png'
import ps_2023_4 from '../assets/pastspeakers/Subba_Perepa.png'

import ps_2024_1 from '../assets/pastspeakers/Abhishek_Kar.png'
import ps_2024_2 from '../assets/pastspeakers/Arjun_Beri.png'
import ps_2024_3 from '../assets/pastspeakers/Ashwini_Bajaj.png'
import ps_2024_4 from '../assets/pastspeakers/Kadam_Aggarwal.png'
import ps_2024_5 from '../assets/pastspeakers/Mohit_Choudary.png'
import ps_2024_6 from '../assets/pastspeakers/Mrityunjay_Kumar.png'
import ps_2024_7 from '../assets/pastspeakers/Paresh_Gupta.png'
import ps_2024_8 from '../assets/pastspeakers/Pratik_Dhoot.png'
import ps_2024_9 from '../assets/pastspeakers/Raghavendra_Sai_Bhaskar_Tuta.png'
import ps_2024_10 from '../assets/pastspeakers/Subhankar_Murar.png'

import YearTile from './YearTile.jsx';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Speakers() {
  const ps_images_2022 = [
    { img_id: ps_2023_1 }, { img_id: ps_2023_1 }, { img_id: ps_2023_1 }, { img_id: ps_2023_1 },
  ];
  const ps_images_2023 = [
    { img_id: ps_2023_1 }, { img_id: ps_2023_2 }, { img_id: ps_2023_3 }, { img_id: ps_2023_4 },
  ];
  const ps_images_2024 = [
    { img_id: ps_2024_1 }, { img_id: ps_2024_2 }, { img_id: ps_2024_3 }, { img_id: ps_2024_4 },
    { img_id: ps_2024_5 }, { img_id: ps_2024_6 }, { img_id: ps_2024_7 }, { img_id: ps_2024_8 },
    { img_id: ps_2024_9 }, { img_id: ps_2024_10 }
  ];

  const [year, setYear] = useState(localStorage.getItem("year") || "2024");

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
    localStorage.setItem("year", selectedYear);
  };


  return (
    <div>
      <div className='relative flex flex-col w-full items-center justify-center my-6'>
        <div className='flex items-center justify-center w-90p my-6'>
          <p className='font-rosario mt-0 mb-4 text-4xl md:text-6xl md-1:w-full md-1:text-center'>Previous Speakers</p>
        </div>

        <Tabs defaultValue="speakers" className="w-full mx-auto text-center">
          <TabsList className='w-1/2 md:w-1/3 px-6 py-7 bg-[#1e1d1d5c] mb-4 ' >
            <TabsTrigger className='w-1/2 hover:scale-105 text-lg text-white data-[state=active]:text-white data-[state=active]:bg-[#0B418B] ' value="2023" >2023</TabsTrigger>
            <TabsTrigger className='w-1/2 hover:scale-105 text-lg text-white data-[state=active]:text-white data-[state=active]:bg-[#0B418B] ' value="2024">2024</TabsTrigger>
          </TabsList>
          <TabsContent value="2023" className=' mx-auto' >
            <div className='w-3/4 mx-auto'>
              <div className='flex justify-evenly flex-wrap gap-3 md-1:gap-3 '>
                {ps_images_2023.map((image, index) => (
                  <img className='h-auto md:p-4 flex-wrap w-1/4 md-1:w-2/5 md-1:flex-wrap ' src={image.img_id} key={index} alt={`Image ${index + 1}`}></img>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="2024" className=' mx-auto'  >
            <div className='w-3/4 mx-auto'>
              <div className='flex justify-evenly flex-wrap gap-3 md-1:gap-3  '>
                {ps_images_2024.map((image, index) => (
                  <img className='h-auto md:p-4 flex-wrap w-1/4 md-1:w-2/5 md-1:flex-wrap  ' src={image.img_id} key={index} alt={`Image ${index + 1}`}></img>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className='w-20 h-20  md:w-48 md:h-48 bg-blue-500 absolute top-0 left-0 blur-[5rem] md:blur-[8rem] z-10' ></div>
        <div className='w-20 h-20  md:w-48 md:h-48 bg-blue-500 absolute right-0 bottom-0 blur-[4rem] md:blur-[8rem] z-10' ></div>
      </div>
    </div>
  )
}

export default Speakers
