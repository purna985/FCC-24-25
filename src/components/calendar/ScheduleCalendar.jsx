import React, { useState } from "react";
import CardComponent from "./CardComponent";
import data from "./data";
import MyCalendar from "./Calendar";

function getEventDate(eventDate) {
  const [day, month, year] = eventDate.split(" ");
  const months = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  return new Date(year, months[month.substring(0, 3)], parseInt(day));
}

function isWithinDaysRange(eventDate, selectedDate, range) {
  const event = getEventDate(eventDate);
  const diffTime = event.getTime() - selectedDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 && diffDays <= range;
}

function ScheduleCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredData = data.filter((item) =>
    isWithinDaysRange(item.date, selectedDate, 0)
  );

  return (
    <div className="App md:flex md:mt-12 ">
      <MyCalendar onDateChange={handleDateChange} />
      <div className="md:w-1/2">
        <h1 className="text-xl font-bold text-center mb-4">
          {selectedDate.toDateString()}
        </h1>
        {filteredData.length > 0 ? (
          <div className="flex flex-col md:h-screen md:overflow-y-scroll md:border-l-2 border-slate-800">
            {filteredData.map(createCard)}
          </div>
        ) : (
          <h1 className='text-3xl text-center md:h-screen md:border-l-2 border-slate-800'>
            No events on this day...
          </h1>
        )}
      </div>
    </div>
  );
}

function createCard(item) {
  return (
    <div key={item.id}>
      <CardComponent
        day={item.day}
        date={item.date}
        title={item.title}
        subtitle={item.subtitle}
        speaker={item.speaker}
        time={item.time}
        venue={item.venue}
        link={item.link}
        linkText={item.linkText}
      />
    </div>
  );
}

export default ScheduleCalendar;
