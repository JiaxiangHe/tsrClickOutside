import * as React from "react";
import * as ReactDOM from "react-dom";

import { ClickOutside } from "../../src";
import './style.less';

export class App extends React.Component<undefined, { clickPosition: string }> {
    constructor() {
        super();
        this.state = {
            clickPosition: ''
        }
    }
    render() {
        return <div className="demo-wrapper">
            <ClickOutside wrapperElement="div" className="click-zone" onClickOutside={() => {
                this.setState({
                    clickPosition: 'outside'
                });
            }} onClick={(event) => {
                this.setState({
                    clickPosition: 'inside'
                });
            }}>
                <div className="demo-wrapper">
                    <div>Inside</div>
                </div>
            </ClickOutside>
            <div className="status-zone">Click Positon: {this.state.clickPosition}</div>
        </div>
    }
}

ReactDOM.render(<App></App>, document.getElementById('app'));