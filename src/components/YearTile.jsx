import React from 'react'

function YearTile({year, setYearChange }) {

  const changeYear = (e) => {
    const data = e.target.value;
    setYearChange(data);
  };

  return (
    <div>
      <button className='bg-custom-bg2 text-white
        w-auto p-3 md:py-3 md:px-7 rounded-md flex justify-center items-center font-medium text-xl md:text-2xl'
              onClick={changeYear} value={year}>
        {year}
      </button>
    </div>
  )
}

export default YearTile
