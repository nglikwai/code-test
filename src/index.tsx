import React from "react";
import ReactDOM from "react-dom";
import Switch from "./Switch"

interface Props {}

interface State {
    isSwitchChecked: boolean;
    isSwitchDisabled: boolean;
}

class App extends React.PureComponent<Props, State> {

    public state: State = {
        isSwitchChecked: false,
        isSwitchDisabled: false,
    };

    onToggleDisable = () => this.setState(({ isSwitchDisabled }) => ({ isSwitchDisabled: !isSwitchDisabled }));

    onChange = (checked: boolean) => this.setState({ isSwitchChecked: checked });

    render() {
      const { isSwitchChecked, isSwitchDisabled } = this.state
        return (
            <div>
                <h3>Controlled Switch</h3>
                <Switch
                    disabled={isSwitchDisabled}
                    checked={isSwitchChecked}
                    onChange={this.onChange}
                />

                <h3>Uncontrolled Switch</h3>
                <Switch disabled={isSwitchDisabled} />

                <h3>isSwitchDisabled : {JSON.stringify(isSwitchDisabled)}</h3>

                <button type="button" onClick={this.onToggleDisable}>
                    Toggle Disable
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app")!);
