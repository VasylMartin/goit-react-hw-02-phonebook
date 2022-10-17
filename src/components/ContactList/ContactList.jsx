import React from "react";


export const ContactList = ({contacts}) => {
    return (
        <div>
            <h2>Contacts</h2>
                <ul>
                    {contacts.map(({name, id, number}) => (
                        <li name={name}
                        key={id}
                        >{name}: {number}</li>
                    )
                    )}
                </ul>
        </div>
        
    )
}