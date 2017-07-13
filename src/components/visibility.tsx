import React from 'react';

export function visibility (code: string) {
    if ( sessionStorage['visibility']) {
        let privileges: Array<string> = JSON.parse(sessionStorage['visibility']);
        let index: number = privileges.indexOf(code);
        return (index >= 0 || code === '*' );
    } else {
        return false;
    }
}

