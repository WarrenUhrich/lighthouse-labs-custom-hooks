import { React, useState, useEffect } from 'react';
import useUpdateTitle from '../hooks/useUpdateTitle';

const InputField = () => {
    const [title, setTitle] = useState('React App');
    useUpdateTitle(title);
    
    return (
        <section>
            <h1>{title}</h1>
            <label>
                Enter Title for Web Page:
                <input
                    type="text"
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
            </label>
        </section>
    );
};

export default InputField;
