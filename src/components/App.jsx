import React from "react";
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";

class App extends React.Component {

  state = {
    contacts: [],
  }

  addContact = contactName => {
    const contact = {
      contactName,
      completed: false
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
    console.log(this.state.contacts)
  }
  
  render() {
    return (
      <>
        <Form onSubmit={this.addContact}/>
        <ContactList />
      </>
    )
  };
};

export { App };