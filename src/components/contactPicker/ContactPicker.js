import React from "react";

export const ContactPicker = (props) => {
  const contactOptions = props.contacts.map(contact => {
    return (<option key={contact.name} value={contact.name}>Name: {contact.name}</option>);
  })

  return (
    <select onChange={props.onChange} defaultValue={''}>
      <option value={''} disabled>Select a contact</option>
      {contactOptions}
    </select>
  );
};
