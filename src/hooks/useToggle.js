import { useState } from 'react';

const useToggle = () => {
    const [toggleValue, setToggleValue] = useState(false);

    const toggle = () => setToggleValue(!toggleValue);

    return [toggleValue, toggle];
};

export default useToggle;
