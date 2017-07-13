import React from "react";
import * as mui from "material-ui";
import {PopoverAnimationVertical} from "material-ui/Popover";
import {visibility} from "./visibility";
import icons from "./icons";

interface ChapterMenuProps {
    menuItems: Array<MenuItem>;
    name: string;
    icon?: any;
}

export interface MenuItem {
    location?: string;
    label: string;
    icon?: any;
    chapter?: any;
    children?: Array<MenuItem>;
    visibilityCode: string;
}

export class ChapterMenu extends React.Component<ChapterMenuProps, any> {

    constructor(props: ChapterMenuProps) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
       });
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
       });
    }

    NavigationItem = (item: MenuItem, key) => {
        const click = () => {
            this.setState({
                open: false,
           });
        };

        return (
            (item.visibilityCode && ( visibility(item.visibilityCode) || item.visibilityCode == '*' ))
                ? item.children
                ? <mui.MenuItem
                key={ key }
                leftIcon={ item.icon }
                primaryText={ item.label }
                rightIcon={ icons.arrowDropRight }
                menuItems={ item.children && item.children.map((item, key) => this.NavigationItem(item, key)) }
            />
                : <mui.MenuItem
                key={ key }
                leftIcon={item.icon}
                primaryText={item.label}
                onTouchTap={click}
            />
                : null
        );
    }

    render() {
        return (
            <div>
                <mui.FlatButton
                    onTouchTap={this.handleTouchTap}
                    label={ this.props.name }
                    labelPosition="after"
                    icon={ this.props.icon }
                />
                <mui.Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={ { horizontal: 'left', vertical: 'bottom' } }
                    targetOrigin={ { horizontal: 'left', vertical: 'top' } }
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}
                >
                    <mui.Menu>
                        { this.props.menuItems && this.props.menuItems.map((item: MenuItem, key) => this.NavigationItem(item, key)) }
                    </mui.Menu>
                </mui.Popover>
            </div>
        );
    }
}
