import { useRef } from "react";

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