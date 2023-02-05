import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        required />
      <input
        type="tel"
        pattern="\+49\d{11}"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        id="phone"
        required />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        required />
      <button 
        type="submit" 
        onChange={handleSubmit}>Submit</button>
    </form>
  );
};
