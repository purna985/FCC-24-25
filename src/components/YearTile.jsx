import React from 'react'

function YearTile({year}) {
  return (
    <div>
      <button className='bg-custom-bg2 text-white
        w-[8vw] h-[6vh] rounded-3xl flex justify-center items-center font-medium text-2xl'>
        {year}
      </button>
    </div>
  )
}

export default YearTile