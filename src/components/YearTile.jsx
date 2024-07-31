import React from 'react'

function YearTile({year, setYearChange }) {

  const changeYear = (e) => {
    const data = e.target.value;
    setYearChange(data);
  };

  return (
    <div>
      <button className='bg-custom-bg2 text-white
        w-auto py-3 px-7 rounded-full flex justify-center items-center font-medium text-2xl'
              onClick={changeYear} value={year}>
        {year}
      </button>
    </div>
  )
}

export default YearTile
