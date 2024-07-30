import React from 'react'

function YearTile({year, setYearChange }) {

  const changeYear = (e) => {
    const data = e.target.value;
    setYearChange(data);
  };
  
  return (
    <div>
      <button className='bg-custom-bg2 text-white
        w-[8vw] h-[6vh] rounded-3xl flex justify-center items-center font-medium text-2xl'
        onClick={changeYear} value={year}>
        {year}
      </button>
    </div>
  )
}

export default YearTile
