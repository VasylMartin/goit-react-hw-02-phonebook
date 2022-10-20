import React from "react";
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';

class App extends React.Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
],
  }

  onFormSubmit = data => {
    const {name, number} = data
    const id = nanoid()
    const friend = {
      id,
      name,
      number,
    }

    this.setState(({contacts}) => ({
      contacts: [friend, ...contacts]
    }))
  }

  render() {
    return (
      <>
        <Form onSubmit={this.onFormSubmit}/>
        <ContactList contacts={this.state.contacts}/>
      </>
    )
  };
};

export { App };