import React from "react";
import ReactDOM from "react-dom";
import Switch from "./Switch";
import "./index.css";

interface Props { }

interface State {
    isSwitchChecked: boolean;
    isSwitchDisabled: boolean;
    uncontrolledChecked: boolean | null;
}

class App extends React.PureComponent<Props, State> {

    public state: State = {
        isSwitchChecked: false,
        isSwitchDisabled: false,
        uncontrolledChecked: false,
    };

    ref = React.createRef<Switch>();

    onToggleDisable = () => this.setState(({ isSwitchDisabled }) => ({ isSwitchDisabled: !isSwitchDisabled }));

    onChange = (checked: boolean) => this.setState({ isSwitchChecked: checked });

    getUncontrolledChecked = () => this.setState({
        uncontrolledChecked: this.ref.current
            && this.ref.current.inputRef.current
            && this.ref.current.inputRef.current.checked,
    })

    render() {
        const { isSwitchChecked, isSwitchDisabled, uncontrolledChecked } = this.state;
        return (
            <div className="wrapper">
                <div>
                    <h3>Controlled Switch</h3>
                    <Switch
                        disabled={isSwitchDisabled}
                        checked={isSwitchChecked}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <h3>Uncontrolled Switch</h3>
                    <h4>uncontrolled check : {JSON.stringify(uncontrolledChecked)}
                    </h4>

                    <Switch ref={this.ref} disabled={isSwitchDisabled} />
                    <button onClick={this.getUncontrolledChecked}>uncontrolled Status</button>

                </div>
                <div>
                    <h3>isSwitchDisabled : {JSON.stringify(isSwitchDisabled)}</h3>
                    <button type="button" onClick={this.onToggleDisable}>
                        Toggle Disable
                    </button>
                </div>

            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app")!);
