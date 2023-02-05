import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("+49");
  const [inputEmail, setInputEmail] = useState("");

  useEffect(() => {
    if (props.contacts.find(contact => contact.name === inputName)) {
      alert("name exists")
    }
  }, [inputName, props.contacts])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.contacts.find(contact => contact.name === inputName)) {
      alert("name exists")
    } else {
      props.addNewContact(inputName, inputPhone, inputEmail);
      setInputName("");
      setInputPhone("");
      setInputEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={inputName}
          setName={setInputName}
          phone={inputPhone}
          setPhone={setInputPhone}
          email={inputEmail}
          setEmail={setInputEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
