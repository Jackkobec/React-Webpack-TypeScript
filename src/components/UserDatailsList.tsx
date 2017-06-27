import * as React from "react";
import {get} from '../config/backend';
import {UserTable} from "./UserTable";
import {UserList} from "./UserList";
import {UserIdTable} from "./UserIdTable";


type User = {
    id: number;
    name: string;
}

type UsersState = {
    users?: Array<User>;
    // users?: Array<any>; или без типизации
}

export class UserDetailList extends React.Component<any, UsersState> {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        get('/api/users')
            .then((users: Array<any>) => {
                this.setState({users})
            })
            .catch(e => console.log(e));
    }

    render() {
        const {users} = this.state;//так пишут если нужно много раз юзать и ретурн ниже

        // return (
        //     <UserTable users={ users }/>
        // );

        return (
            <div>
                <UserIdTable users={ this.state.users }/>
                <UserList users={ this.state.users }/>
            </div>

        );
    }
}
