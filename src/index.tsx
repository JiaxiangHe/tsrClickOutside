import * as React from "react";
import * as ReactDOM from "react-dom";

import "./style.less";

export interface ClickOutsideProps {
    wrapperElement?: string
    className?: string
    onClickOutside?(): void
    onClick?(event: any): void
}

export class ClickOutside extends React.Component<ClickOutsideProps, undefined> {
    private inside: boolean
    private wrapper: Element
    private onClickOutside: () => void
    componentDidMount() {
        ReactDOM.findDOMNode(this.wrapper).addEventListener('mousedown', () => { this.inside = true });
        ReactDOM.findDOMNode(this.wrapper).addEventListener('mouseup', () => { this.inside = false });
        this.onClickOutside = () => {
            if (!this.inside) {
                if (this.props.onClickOutside) {
                    this.props.onClickOutside();
                }
            }
        }
        window.addEventListener('mousedown', this.onClickOutside);
    }
    componentWillUnmount() {
        window.removeEventListener('mousedown', this.onClickOutside);
    }
    render() {
        return React.createElement(this.props.wrapperElement || "div", { 
            className: this.props.className,
            onClick: this.props.onClick,
            ref: ref => { if (ref) this.wrapper = ref }
        }, React.Children.map(this.props.children, (child) => {
            return child
        }))
    }
}