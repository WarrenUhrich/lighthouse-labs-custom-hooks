import React, { useEffect, useState } from 'react';

const InputField = () => {
    const [title, setTitle] = useState('React App');

    // document
    //     .querySelector('input')
    //     .addEventListener('change', (event) => {});

    const handleChange = (event) => {
        // Know WHICH element is changing...
        const targetElement = event.target; // <INPUT>

        // Get the value of the target <INPUT>
        const currentElementValue = targetElement.value;

        // Update state accordingly.
        setTitle(currentElementValue);
    };

    // Use changing state to update the page title.
    useEffect(() => { // Function that should run if a value changes.
        // document.querySelector('title').textContent = title;
        document.title = title;
    }, [title]); // A list of values that might change.

    return (
        <section>
            <h2>Update Page Title</h2>
            <p>
                <strong>Preview of Title:</strong>
                &nbsp;
                {title}
            </p>
            <label>
                Enter new Page Title:
                <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                />
            </label>
        </section>
    );
};

export default InputField;
