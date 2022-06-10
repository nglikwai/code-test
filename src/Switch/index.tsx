import React from "react";
import "./index.css";

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void
    disabled?: boolean;
}

interface State {
    _checked: boolean
}

export default class Switch extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
          _checked: false
        }
    }

    OnClickHandler = () => {
      const { checked, onChange } = this.props;
        onChange
            ? onChange(!checked)
            : this.setState(({ _checked }) => { _checked: !_checked })
    }

    render() {
      const { disabled } = this.props
        return (
            <div className="comp-switch">
                <label className="switch">
                    <input
                        type="checkbox"
                        disabled={disabled}
                        onClick={this.OnClickHandler}
                    />
                    <div className="slider"></div>

                </label>
            </div>
        );
    }
}
