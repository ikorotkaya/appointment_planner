import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList"

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
      const formData = new FormData(e.target);
      props.addNewContact(formData.get('name'), formData.get('phone'), formData.get('email'));
      setName("");
      setPhone("+49");
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
        <TileList items={props.contacts}/>
      </section>
    </div>
  );
};
