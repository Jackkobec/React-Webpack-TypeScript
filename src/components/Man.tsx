import * as React from "react";
import {get} from '../config/backend';

type Man = {
    id: number;
    name: string;
}

type MansState = {
    mans?: Array<Man>;
    // users?: Array<any>; или без типизации
}

export class Mans extends React.Component<any, MansState> {
    constructor(props) {
        super(props);

        this.state = {
            mans: []
        }
    }

    componentWillMount() {
        get('/api/users/mans')
            .then((mans: Array<any>) => {
                this.setState({mans})
            })
            .catch(e => console.log(e));
    }

    render() {
        const {mans} = this.state;//так пишут если нужно много раз юзать и ретурн ниже

        // return (
        //     <UserTable users={ users }/>
        // );

        return (
            <div>
                <ul>
                    {this.state.mans.map((item, i) =>
                        <li>{ item.name }</li>
                    )}
                </ul>
            </div>

        );
    }
}