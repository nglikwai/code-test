import React from "react";
import ReactDOM from "react-dom";
import Switch from "./Switch"

interface State {
    isSwitchChecked: boolean;
    isSwitchDisabled: boolean;
}

class App extends React.PureComponent<{}, State> {

    public state: State = {
        isSwitchChecked: false,
        isSwitchDisabled: false,
    };

    onToggleDisable = () => this.setState({ isSwitchDisabled: !this.state.isSwitchDisabled });

    onChange = (checked: boolean) => this.setState({ isSwitchChecked: checked });

    render() {
        return (
            <div>
                <Switch
                    disabled={this.state.isSwitchDisabled}
                    checked={this.state.isSwitchChecked}
                    onChange={this.onChange}
                />
                <Switch />
                <button type="button" onClick={this.onToggleDisable}>
                    Toggle Disable
                </button>
                <span style={{ display: "block" }}>isSwitchDisabled : {this.state.isSwitchDisabled ? "true" : "false"}</span>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app")!);
