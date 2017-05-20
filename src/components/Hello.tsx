import * as React from "react";

type HelloState = {
    name?: string;
}

export class Hello extends React.Component<any, HelloState> {
    constructor(props) {
        super(props);

        this.state = {
            name: 'App'
        }
    }

    render() {
        const { name } = this.state;

        return (
            <div>
                <h1>Hello, { name } !</h1>
            </div>
        );
    }
}
