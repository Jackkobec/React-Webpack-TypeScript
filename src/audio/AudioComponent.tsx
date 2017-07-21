import * as React from "react";
import '../audio/AudioComponentStyles.css'

const cccpMp3 = require("../audio/cccp.mp3")

export function alertLoop() {
    <AudioComponent />
    for (let i = 0; i < 77; i++) {
        alert("Дослушайте гимн!")
    }
}

export const AudioComponent = () => {

    // window.onload = () => alertLoop();

    return (
        <div id="backgroundaudio">
            <i className="fa fa-volume-up fa-red"></i>
            <audio autoPlay={ true } controls={ true } loop={ false } preload="">
                <source src={ cccpMp3 } type="audio/mpeg"></source>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};