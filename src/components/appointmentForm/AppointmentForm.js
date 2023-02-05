import React from "react";
import {ContactPicker} from "../../components/contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        required />
      <input
        type="date"
        min={getTodayString}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        id="date"
        required />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        id="time"
        required />
      <ContactPicker 
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)} />
      <button
        type="submit"
        onChange={handleSubmit}>Submit</button>
    </form>
  );
};
