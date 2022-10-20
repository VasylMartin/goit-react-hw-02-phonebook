import React from "react";


export const ContactList = ({contacts, onDeletContact}) => {
    return (
        <div>
            <h2>Contacts</h2>
                <ul>
                    {contacts.map(({name, id, number}) => (
                            <li name={name}
                                key={id}
                                >{name}: {number}
                                <button onClick={() => onDeletContact(id)}>Delete</button>
                                </li>
                    )
                    )}
                </ul>
        </div>
        
    )
}