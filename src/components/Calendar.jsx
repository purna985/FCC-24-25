import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import '../styles/calendar.css'

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showEvents = () => {
    return events
      .filter(event => new Date(event.date).toDateString() === date.toDateString())
      .map((event, index) => <p key={index}>{event.title}</p>);
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center mt-6 min-h-screen" >
      <h1 className="w-[80%] text-2xl md:text-5xl text-center text-wrap mt-5 font-normal mb-8" >No Events Scheduled Currently. <br /> Please Stay Tuned...</h1>
      <Calendar
        className="react-calendar w-[80%] md:w-1/2 flex flex-col flex-wrap border-none p-5 mt-6 bg-[#3E3E3A] shadow-md shadow-black text-white font-montserrat"
        onChange={handleDateChange}
        value={date}
      />
      <p className="date">{date.toDateString()}</p>
      {showEvents()}

    </div>
  );
};

export default ReactCalendar;
