import React, { useState } from "react";

/** This component should render a form that when submitted, 
 * creates a new Box. You should be able to specify the Box’s 
 * width, height, and background color. When the form is submitted, 
 * clear the input values.
 * 
 * props: 
 * - addBox (function)
 * 
 * state:
 * - newBox
 * 
 * events:
 * - handleSubmit (addBox)
 * - handleChange
 * 
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
    const INITIAL_DATA = { // all caps only for global constants; can move out to be global
        width: "",
        height: "",
        backgroundColor: ""
    };

    // formData would be better name; more generic
    const [newBox, setNewBox] = useState(INITIAL_DATA);

    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(newBox);
        setNewBox(INITIAL_DATA);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setNewBox(boxData => ({
            ...boxData,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                value={newBox.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={newBox.height}
                onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                value={newBox.backgroundColor}
                onChange={handleChange}
            />
            <button>Add a new box!</button>
        </form>
    );
}

export default NewBoxForm;