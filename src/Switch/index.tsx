import React from "react";
import "./index.css";

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void
    disabled: boolean;
}

interface MyState {
    isChecked: boolean
}

export default class Switch extends React.PureComponent<Props, MyState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    OnClickHandler = () => {
        this.props.onChange
            ? this.props.onChange(!this.props.checked)
            : this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        return (
            <div className="comp-switch">
                <label className="switch">
                    <input
                        type={!this.props.disabled ? "checkbox" : ''}
                        disabled={this.props.disabled}
                        onClick={this.OnClickHandler}
                    />
                    <div className="slider"></div>

                </label>
            </div>
        );
    }
}
