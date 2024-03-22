import React, { useState, useEffect } from 'react';

const TitleInput = () => {
    const [title, setTitle] = useState('My React Page');

    const handleChange = (event) => {
        const inputElement = event.target;
        const newText = inputElement.value;
        setTitle(newText);
    };

    // How often do we need to update the <title> ???
    useEffect(() => { // Function that will run if a value changes.
        document.title = title;
    }, [title]); // A list of values that might change.

    return (
        <section>
            <h2>Use this Field to Update the Page Title</h2>
            <label>
                Type in a Document Title:
                <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                />
            </label>
            <p>
                Title is currently set to: {title}
            </p>
        </section>
    );
};

export default TitleInput;
