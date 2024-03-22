import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const TitleInput = () => {
    const [title, handleChange] = useDocumentTitle('Hello from TitleInput Component!');

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
