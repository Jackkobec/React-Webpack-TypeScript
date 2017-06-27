/**
 * Created by jack on 6/26/17.
 */
import * as React from "react";
import './hello.css';
import {Link} from 'react-router'

export const UserList = ({users}) => {

    /*let f = () => {}; // создание функции для дальнейшего експорта
     function s() {} // простое создание функции */

    return (
        <div>
            <ul>
                {users.map((item, i) =>
                <li>{ item.name }</li>
                )}
            </ul>
        </div>
    );
}
