import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};
export default class TabsExampleSwipeable extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (value) => {
            this.setState({
                slideIndex: value,
            });
        };
        this.state = {
            slideIndex: 0,
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Tabs, { onChange: this.handleChange, value: this.state.slideIndex },
                React.createElement(Tab, { label: "Tab One", value: 0 }),
                React.createElement(Tab, { label: "Tab Two", value: 1 }),
                React.createElement(Tab, { label: "Tab Three", value: 2 })),
            React.createElement(SwipeableViews, { index: this.state.slideIndex, onChangeIndex: this.handleChange },
                React.createElement("div", null,
                    React.createElement("h2", { style: styles.headline }, "Tabs with slide effect"),
                    "Swipe to see the next slide.",
                    React.createElement("br", null)),
                React.createElement("div", { style: styles.slide }, "slide n\u00B02"),
                React.createElement("div", { style: styles.slide }, "slide n\u00B03"))));
    }
}
//# sourceMappingURL=TabsExampleSwipeable.js.map