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

/* MANAGING MEDIA PLAYBACK */
export const VideoPlayer = () => {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    }

    return (
        <div>
            <button onClick={handlePlay}>Play Video</button>
            <video ref={videoRef} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" />
            <button onClick={handlePause}>Pause Video</button>
        </div>
    );
};


