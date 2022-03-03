import { useEffect } from "react";

export default function useLogChanges(value) {
    useEffect(() => {
        console.log('Value Changed: ', value);
    }, [value]);
}
