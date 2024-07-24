import React from 'react'

import psimg from '../assets/images/pastspeakers/s1.png'
import YearTile from './YearTile';

function Speakers() {
    const ps_images = [
        { img_id: psimg }, { img_id: psimg },{ img_id: psimg },{ img_id: psimg },
    ];
  return (
    <div>
        <div className='flex flex-col h-auto w-full items-center justify-center my-6'>
        <div className='flex items-center justify-center w-90p my-6'>
          <p className='font-rosario mt-0 mb-4 text-7xl md-1:text-5xl md-1:w-full md-1:text-center'>Speakers</p>
        </div>
        <div className='px-5 my-6 flex flex-row w-full'>
					<div className='w-[13vw] h-[45vh] mr-8 flex flex-col items-center justify-evenly'>
						<YearTile year={2022}/>
						<YearTile year={2023}/>
						<YearTile year={2024}/>
						<YearTile />
						<YearTile />
					</div>
          <div className='flex justify-evenly flex-wrap md-1:gap-3'>
            {ps_images.map((image,index)=>(
              <img className='w-[25%] h-auto p-2 flex-wrap md-1:w-2/5 md-1:flex-wrap ' src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers