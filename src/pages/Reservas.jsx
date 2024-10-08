import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Reservas = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="reservas-container">
      <h1 className="reservas-titulo">Reservas</h1>
      <div className="reservas-calendario">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div className="hora-selector">
        <label htmlFor="hora">Selecciona una hora:</label>
        <select id="hora" value={time} onChange={handleTimeChange}>
          <option value="">--Seleccione--</option>
          <option value="1:00 PM">21:00 PM</option>
          <option value="2:00 PM">22:00 PM</option>
          <option value="3:00 PM">23:00 PM</option>
          <option value="4:00 PM">00:00 PM</option>
          <option value="5:00 PM">01:00 PM</option>
        </select>
      </div>
      <button className="reservar-boton">Reservar</button>
    </div>
  );
};

export default Reservas;
