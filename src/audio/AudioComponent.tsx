import * as React from "react";
import '../audio/AudioComponentStyles.css'

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
            <i className="fa fa-volume-up"></i>
            <audio autoPlay={ true } controls={ true } loop={ false } preload="">
                <source src="http://storage.mp3cc.com/download/165104/L1FPMy96TXJwM294bVM3VGt6TjlwK25DN0RqUlh3bkxadVBNcmQ1OE1vMEdGYVdUbUQyZE82U2hJWFYwcEJ0OVNqZFF2TmF0ek16VEFQdk0va052aEUrUEFGaGpXbXdlTEorWVJLbHBOanZVYjFscERlM3JJMEFoYzE0ckJKRlQ/gimn-sssr-gosudarstvennyj-gimn-sovetskogo-soyuza_(mp3CC.com).mp3" type="audio/mpeg"></source>
                <source src="http://storage.mp3cc.com/download/165108/L1FPMy96TXJwM294bVM3VGt6TjlwK25DN0RqUlh3bkxadVBNcmQ1OE1vM3BxUVl6S2VEY056MkRnLzlWQ3orYm1vZWRyaFJHb1FuYlJWMjlSeFlmYktFZTAxUWZGdkVOS3hycW5VelpGaXNNSk1IOFRGeHhUOWVNeG12VzJmZHU/gimn-sssr-gosudarstvennyj-gimn-sovetskogo-soyuza_(mp3CC.com).mp3" type="audio/mpeg"></source>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};