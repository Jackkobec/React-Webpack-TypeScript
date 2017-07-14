import * as React from "react";
import { get } from '../config/backend';
export class Girls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            girls: []
        };
    }
    componentWillMount() {
        get('/api/users/girls')
            .then((girls) => {
            this.setState({ girls });
        })
            .catch(e => console.log(e));
    }
    render() {
        const { girls } = this.state; //так пишут если нужно много раз юзать и ретурн ниже
        // return (
        //     <UserTable users={ users }/>
        // );
        return (React.createElement("div", null,
            React.createElement("ul", null, this.state.girls.map((item, i) => React.createElement("li", null, item.name)))));
    }
}
//# sourceMappingURL=Girl.js.map