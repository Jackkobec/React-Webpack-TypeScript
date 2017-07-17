import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Test} from "../test";
import {render} from "react-dom";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default class TabsExampleControlled extends React.Component<any, any>{

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });

        if(value == "b"){
            return <Test />
        }
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="ЦК" value="a">
                    <div>
                        <h2 style={ styles }>Controllable Tab A</h2>
                        <p>
                            Tabs are also controllable if you want to programmatically pass them their values.
                            This allows for more functionality in Tabs such as not
                            having any Tab selected or assigning them different values.
                        </p>
                    </div>
                </Tab>
                <Tab label="ЧК" value="b">
                    <div>
                        <h2 style={ styles }>Controllable Tab B</h2>
                        <p>
                            This is another example of a controllable tab. Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}