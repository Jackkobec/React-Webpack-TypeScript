import React from "react";
import * as mui from "material-ui";
import { PopoverAnimationVertical } from "material-ui/Popover";
import { visibility } from "./visibility";
import icons from "./icons";
export class ChapterMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleTouchTap = (event) => {
            event.preventDefault();
            this.setState({
                open: true,
                anchorEl: event.currentTarget,
            });
        };
        this.handleRequestClose = () => {
            this.setState({
                open: false,
            });
        };
        this.NavigationItem = (item, key) => {
            const click = () => {
                this.setState({
                    open: false,
                });
            };
            return ((item.visibilityCode && (visibility(item.visibilityCode) || item.visibilityCode == '*'))
                ? item.children
                    ? React.createElement(mui.MenuItem, { key: key, leftIcon: item.icon, primaryText: item.label, rightIcon: icons.arrowDropRight, menuItems: item.children && item.children.map((item, key) => this.NavigationItem(item, key)) })
                    : React.createElement(mui.MenuItem, { key: key, leftIcon: item.icon, primaryText: item.label, onTouchTap: click })
                : null);
        };
        this.state = {
            open: false,
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(mui.FlatButton, { onTouchTap: this.handleTouchTap, label: this.props.name, labelPosition: "after", icon: this.props.icon }),
            React.createElement(mui.Popover, { open: this.state.open, anchorEl: this.state.anchorEl, anchorOrigin: { horizontal: 'left', vertical: 'bottom' }, targetOrigin: { horizontal: 'left', vertical: 'top' }, onRequestClose: this.handleRequestClose, animation: PopoverAnimationVertical },
                React.createElement(mui.Menu, null, this.props.menuItems && this.props.menuItems.map((item, key) => this.NavigationItem(item, key))))));
    }
}
//# sourceMappingURL=menuBar.js.map