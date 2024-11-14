import React, { useState } from "react";
import CardComponent from "./CardComponent";
import data from "./data";
import MyCalendar from "./Calendar";

// Function to parse date and return it in a comparable format
function getEventDate(eventDate) {
  const [day, month, year] = eventDate.split(" ");
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  return new Date(year, months[month.substring(0, 3)], parseInt(day));
}

// Function to check if a date is within a range of days
function isWithinDaysRange(eventDate, selectedDate, range) {
  const event = getEventDate(eventDate);
  const diffTime = event.getTime() - selectedDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 && diffDays <= range;
}

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredData = data.filter((item) =>
    isWithinDaysRange(item.date, selectedDate, 2)
  );

  return (
    <div className="App">
      <MyCalendar onDateChange={handleDateChange} />
      {filteredData.map(createCard)}
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
        speaker={item.speaker}
        time={item.time}
        location={item.location}
      />
    </div>
  );
}

export default App;
