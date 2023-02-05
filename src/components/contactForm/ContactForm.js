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
        name="name"
        required />
      <input
        type="tel"
        pattern="\+49\d{11}"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        id="phone"
        name="phone"
        required />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        required />
      <button 
        type="submit">Submit</button>
    </form>
  );
};
