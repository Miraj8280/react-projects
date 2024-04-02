import { useEffect, useRef } from "react";

/* FOCUSING AN INPUT ELEMENT: AFTER COMPONENT MOUNTS */
export const FocusInputMount = () => {
    const inputRef = useRef(null);

    // Focus the input element after the component mounts
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <label htmlFor="focus">Focused input:</label>
            <input type="text" ref={inputRef}/>
        </div>
    );
};