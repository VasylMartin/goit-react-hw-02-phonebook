import React from "react";
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import { FormFiler } from "./FormFilter/FormFilter";

class App extends React.Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
],
    filter: '',
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
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

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase()
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <>
        <Form onSubmit={this.onFormSubmit}/>
        <FormFiler value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeletContact={this.deleteContact}/>
      </>
    )
  };
};

export { App };