import React from "react";
import InputComponent from "./input_components";

function App(props) {
    return (
        <form>
            <div>
                {`<Input />`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input error />`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input disabled />`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input helperText="Some interesting text"/>`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input startIcon />`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input endIcon/>`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input value="text" />`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input size="sm" />`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input size="md" />`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input fullWidth/>`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
            <div>
                {`<Input multiline row="4"/>`}
                <InputComponent type="text" placeholder="Placeholder" />
            </div>
        </form>
    );
}

export default App;