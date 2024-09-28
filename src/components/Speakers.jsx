import React, {useState} from 'react'

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

function Speakers() {
  const ps_images_2022 = [
    { img_id: ps_2023_1 }, { img_id: ps_2023_1 },{ img_id: ps_2023_1 },{ img_id: ps_2023_1 },
  ];
  const ps_images_2023 = [
    { img_id: ps_2023_1 }, { img_id: ps_2023_2 },{ img_id: ps_2023_3 },{ img_id: ps_2023_4 },
  ];
  const ps_images_2024 = [
    { img_id: ps_2024_1 }, { img_id: ps_2024_2 },{ img_id: ps_2024_3 },{ img_id: ps_2024_4 },
    { img_id: ps_2024_5 }, { img_id: ps_2024_6 },{ img_id: ps_2024_7 },{ img_id: ps_2024_8 },
    { img_id: ps_2024_9 }, { img_id: ps_2024_10 }
  ];

  const [year, setYear] = useState(localStorage.getItem("year") || "2024");

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
    localStorage.setItem("year", selectedYear);
  };


  return (
    <div>
      <div className='flex flex-col w-full items-center justify-center my-6'>
        <div className='flex items-center justify-center w-90p my-6'>
          <p className='font-rosario mt-0 mb-4 text-7xl md-1:text-5xl md-1:w-full md-1:text-center'>Previous Speakers</p>
        </div>
        <div className='px-5 my-6 flex flex-row w-full'>
          <div className='w-1/4 h-full mr-8 flex flex-col items-center justify-between gap-3'>
            <YearTile year= "2024" setYearChange={handleYearChange}/>
            <YearTile year= "2023" setYearChange={handleYearChange}/>
            {/* <YearTile year= "2022" setYearChange={handleYearChange}/> */}
            {/* <YearTile />
						<YearTile /> */}
          </div>
          {year === "2022" && (
            <div className='w-3/4'>
              <div className='flex justify-evenly flex-wrap gap-3p md-1:gap-3'>
                {ps_images_2022.map((image,index)=>(
                  <img className='h-auto md:p-4 flex-wrap w-1/4 md-1:w-2/5 md-1:flex-wrap ' src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
                ))}
              </div>
            </div>
          )}
          {year === "2023" && (
            <div className='w-3/4'>
              <div className='flex justify-evenly flex-wrap gap-3 md-1:gap-3'>
                {ps_images_2023.map((image,index)=>(
                  <img className='h-auto md:p-4 flex-wrap w-1/4 md-1:w-2/5 md-1:flex-wrap ' src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
                ))}
              </div>
            </div>
          )}
          {year === "2024" && (
            <div className='w-3/4'>
              <div className='flex justify-evenly flex-wrap gap-3 md-1:gap-3'>
                {ps_images_2024.map((image,index)=>(
                  <img className='h-auto md:p-4 flex-wrap w-1/4 md-1:w-2/5 md-1:flex-wrap  ' src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Speakers
