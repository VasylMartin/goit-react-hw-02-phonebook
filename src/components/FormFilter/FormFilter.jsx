import React from "react";

export const FormFiler = ({value, onChange}) => {
    return (
        <label htmlFor="filter">Find contacts by Name
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    name="filter"
                />
                </label>
    )
}