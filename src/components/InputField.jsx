import React, { useEffect, useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';

const InputField = () => {
    // Order doesn't matter in object structuring...
    // ...but NAMES do! This CAN make it easier
    // to pull a specific value out of a large
    // dataset! But it makes renaming/re-usability
    // a bit harder.
    const { handleChange, title } = usePageTitle();

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
