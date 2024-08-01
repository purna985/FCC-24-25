import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";

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
    <div className="w-[80%] mx-auto flex flex-col items-center mt-6 min-h-screen" >
      <Calendar
        className="react-calendar"
        onChange={handleDateChange}
        value={date}
      />
      <p className="date">{date.toDateString()}</p>
      {showEvents()}
    </div>
  );
};

export default ReactCalendar;
