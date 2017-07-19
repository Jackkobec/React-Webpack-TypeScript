import * as React from "react";


export async function alertLoop() {
    for (let i = 0; i < 77; i++) {
        alert("Дослушайте гимн!")
    }
}

export const AlertLoop = () => {

    window.onload = () => alertLoop();

    return (
        <div>

        </div>
    );
};