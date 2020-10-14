import React from "react";
import InputComponent from "./input_components";

function App(props) {
    return (
        <main>
            <h1>Input components</h1>
            <form>
                {`<Input />`}
                <label className="label1">
                    <p>Label</p>
                    <InputComponent placeholder="Placeholder" default />
                </label>
                <br />
                {`<Input error />`}
                <label className="label2">
                    <p>Label</p>
                    <InputComponent placeholder="Placeholder" error/>
                </label>
                <br />
                {`<Input disabled/>`}
                <label className="label3">
                    <p>Label</p>
                    <InputComponent placeholder="Placeholder" disabled/>
                </label>
                <br />
                <div className="container">
                    <div>
                        {'<Input helperTtext="Some interesting text"/>'}
                        <label className="label4">
                            <p>Label</p>
                            <InputComponent placeholder="Placeholder" helperText="Some-interesting-text"/>
                        </label>
                        <p>Some interesting text</p>
                    </div>
                    <br />
                    <div>
                        {`<Input helperText="Some-interesting-text" error />`}
                        <label className="label5">
                            <p>Label</p>
                            <InputComponent placeholder="Placeholder" helperText="Some-interesting-text" textCoror="intresting" error />
                        </label>
                        <p>Some intersting text</p>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div>
                        {`<Input startIcon/>`}
                        <label className="label6">
                            <p>Label</p>
                            <InputComponent placeholder="Placeholder" startIcon />
                        </label>
                    </div>
                    <br />
                    <div>
                        {`<Input endIcon />`}
                        <label className="label7">
                            <p>Label</p>
                            <InputComponent placeholder="Placeholder" endIcon />
                        </label>
                    </div>
                </div>
                <br />
                {`<Input value="text" />`}
                <label className="label8">
                    <p>Label</p>
                    <InputComponent placeholder="Text" value="text"/>
                </label>
                <br />
                <div className="container">
                    <div>
                        {`<Input size="sm"/>`}
                        <label>
                            <p>Label</p>
                            <InputComponent placeholder="Placeholder" size="sm" />
                        </label>
                    </div>
                    <br />
                    <div>
                        {`<Input size="md" />`}
                        <label>
                            <p>Label</p>
                            <InputComponent placeholder="Placeholder" size="md" />
                        </label>
                    </div>
                </div>
                <br />
                {`<Input fullWidth />`}
                <label>
                    <p>Label</p>
                    <InputComponent placeholder="Text" fullWidth />
                </label>
                <br />
                {`<Input multiline row="4" />`}
                <label>
                    <p>Label</p>
                    <InputComponent placeholder="Placeholder" row="4" multiline />
                </label>
            </form>
        </main>
    );
}

export default App;