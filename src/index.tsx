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
                <h3>Controlled Switch</h3>
                <Switch
                    disabled={this.state.isSwitchDisabled}
                    checked={this.state.isSwitchChecked}
                    onChange={this.onChange}
                />

                <h3>Uncontrolled Switch</h3>
                <Switch disabled={this.state.isSwitchDisabled} />

                <h3>isSwitchDisabled : {JSON.stringify(this.state.isSwitchDisabled)}</h3>

                <button type="button" onClick={this.onToggleDisable}>
                    Toggle Disable
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app")!);
