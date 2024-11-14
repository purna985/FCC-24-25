// Calendar.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import data from "./data"; // Import the event data

const MyCalendar = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Helper function to check if a date has an event
  const hasEvent = (date) => {
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(" ", " "); // Adjust for matching formats (e.g., "28 Oct 2024")

    return data.some((event) => event.date === formattedDate);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <Calendar
        formatMonthYear={(locale, date) =>
          date.toLocaleString(locale, { month: "long" })
        }
        onChange={handleDateChange}
        value={selectedDate}
        showNavigation={true}
        prevLabel={null}
        nextLabel={null}
        prev2Label={null}
        next2Label={null}
        tileContent={({ date, view }) =>
          view === "month" && hasEvent(date) ? (
            <div className="event-dot"></div>
          ) : null
        }
      />
    </div>
  );
};

export default MyCalendar;
