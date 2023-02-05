import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+49");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (props.contacts.find(contact => contact.name === name)) {
      alert("name exists")
    }
  }, [name, props.contacts])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.contacts.find(contact => contact.name === name)) {
      alert("name exists")
    } else {
      props.addNewContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
