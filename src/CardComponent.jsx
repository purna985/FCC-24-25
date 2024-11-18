import React from "react";
import "./CardComponent.css";

const CardComponent = (props) => {
  return (
    <div className="card">
      <h2 className="card-day">{props.date}</h2>
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-speaker">{props.speaker}</p>
        <p className="card-location">{props.location}</p>
        <p className="card-time">{props.time}</p>
        <button className="card-button">Know More!</button>
      </div>
    </div>
  );
};

export default CardComponent;
