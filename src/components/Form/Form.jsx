import React from "react";
import { nanoid } from 'nanoid';


class Form extends React.Component {
    state = {
        name: ''
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.name)

        this.resetForm( )
    }

    handleChange = event => {
        const {name, value} = event.currentTarget
        this.setState({[name]: value})
    }

    resetForm = () => {
        this.setState({name: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Phonebook</h1>
                <label htmlFor="name">Name
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export {Form}