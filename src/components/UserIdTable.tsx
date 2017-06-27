import * as React from "react";
import './hello.css';
import {Link} from 'react-router'

export const UserIdTable = ({users}) => {

    /*let f = () => {}; // создание функции для дальнейшего експорта
     function s() {} // простое создание функции */

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>

                </tr>
                {users.map((item, i) =>
                    <tr key={ i }>
                        <td>
                            <Link
                                to={`/users/detail/${item.id}`} activeClassName="active">
                                { item.id }
                            </Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
