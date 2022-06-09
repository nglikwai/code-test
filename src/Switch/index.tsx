import React from "react";
import "./index.css";

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void
    disabled?: boolean;
}

type MyState = {
    isChecked: boolean
}

export default class Switch extends React.PureComponent<Props, MyState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    render() {
        return (
            <div className="comp-switch">
                <label className="switch">
                    <input
                        type={this.props.disabled ? "" : "checkbox"}
                        checked={this.props.checked ? this.props.checked : this.state.isChecked}
                        onChange={() => this.props.onChange
                            ? this.props.onChange(!this.props.checked)
                            : this.setState({ isChecked: !this.state.isChecked })}
                    />
                    <div className="slider"></div>

                </label>
            </div>
        );
    }
}
