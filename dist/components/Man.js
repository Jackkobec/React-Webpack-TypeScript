import * as React from "react";
import { get } from '../config/backend';
export class Mans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mans: []
        };
    }
    componentWillMount() {
        get('/api/users/mans')
            .then((mans) => {
            this.setState({ mans });
        })
            .catch(e => console.log(e));
    }
    render() {
        const { mans } = this.state; //так пишут если нужно много раз юзать и ретурн ниже
        // return (
        //     <UserTable users={ users }/>
        // );
        return (React.createElement("div", null,
            React.createElement("ul", null, this.state.mans.map((item, i) => React.createElement("li", null, item.name)))));
    }
}
//# sourceMappingURL=Man.js.map