import React from "react";
import InputComponent from "./input_components";

function App() {
    return (
        <main>
            <h1>Input components</h1>
            <form>
                {`<Input />`}
                <InputComponent placeholder="Placeholder" default />
                <br />
                {`<Input error />`}
                <InputComponent placeholder="Placeholder" error/>
                <br />
                {`<Input disabled/>`}
                <InputComponent placeholder="Placeholder" disabled/>
                <br />
                <div className="container">
                    <div>
                        {'<Input helperTtext="Some interesting text"/>'}
                        <InputComponent placeholder="Placeholder" helperText="Some intersting text"/>
                    </div>
                    <br />
                    <div>
                        {`<Input helperText="Some interesting text" error />`}
                        <InputComponent placeholder="Placeholder" helperText="Some interesting text" error />
                    </div>
                </div>
                <br />
                <div className="container">
                    <div>
                        {`<Input startIcon/>`}
                        <InputComponent placeholder="Placeholder" startIcon />
                    </div>
                    <br />
                    <div>
                        {`<Input endIcon />`}
                        <InputComponent placeholder="Placeholder" endIcon />
                    </div>
                </div>
                <br />
                {`<Input value="text" />`}
                <InputComponent placeholder="Text" value="text"/>
                <br />
                <div className="container">
                    <div>
                        {`<Input size="sm"/>`}
                        <InputComponent placeholder="Placeholder" size="sm" />
                    </div>
                    <br />
                    <div>
                        {`<Input size="md" />`}
                        <InputComponent placeholder="Placeholder" size="md" />
                    </div>
                </div>
                <br />
                {`<Input fullWidth />`}
                <InputComponent placeholder="Text" fullWidth />
                <br />
                {`<Input multiline row="4" />`}
                <InputComponent placeholder="Placeholder" row="4" multiline />
            </form>
        </main>
    );
}

export default App;