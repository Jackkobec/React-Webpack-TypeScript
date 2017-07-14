import * as React from "react";
import { get } from '../config/backend';
export class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        console.log(this.props);
        get(`/api/users/detail/${this.props.params.userId}`)
            .then((user) => {
            this.setState({ user });
        })
            .catch(e => console.log(e));
    }
    render() {
        return (React.createElement("div", null, this.state.user && React.createElement("div", null,
            React.createElement("span", null, this.state.user.id),
            React.createElement("br", null),
            React.createElement("span", null, this.state.user.name))));
    }
}
//# sourceMappingURL=UserDetails.js.map