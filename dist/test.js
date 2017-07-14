import * as React from "react";
import { Hello } from "./components/Hello";
export class Test extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { text: 'Ooooo' };
    }
    render() {
        return (React.createElement(Hello, { lala: this.state.text }));
    }
}
//# sourceMappingURL=test.js.map