import { useRef } from "react";

/* FOCUSING AN INPUT ELEMENT: AFTER BUTTON CLICK */
export const FocusInputBtn = () => {
    const inputRef = useRef(null);

    // Focus the input element after the button click
    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Focus input</button>
        </div>
    );
};