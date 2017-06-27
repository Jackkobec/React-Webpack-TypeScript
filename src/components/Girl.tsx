import * as React from "react";
import {get} from '../config/backend';

type Girl = {
    id: number;
    name: string;
}

type GirlsState = {
    girls?: Array<Girl>;
    // users?: Array<any>; или без типизации
}

export class Girls extends React.Component<any, GirlsState> {
    constructor(props) {
        super(props);

        this.state = {
            girls: []
        }
    }

    componentWillMount() {
        get('/api/users/girls')
            .then((girls: Array<any>) => {
                this.setState({girls})
            })
            .catch(e => console.log(e));
    }

    render() {
        const {girls} = this.state;//так пишут если нужно много раз юзать и ретурн ниже

        // return (
        //     <UserTable users={ users }/>
        // );

        return (
            <div>
                <ul>
                    {this.state.girls.map((item, i) =>
                        <li>{ item.name }</li>
                    )}
                </ul>
            </div>

        );
    }
}