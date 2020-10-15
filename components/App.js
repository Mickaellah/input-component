import React from "react";
import InputComponent from "./input_components";
import TextArea from "./TextArea_component";

function App(props) {
    return (
        <main>
            <h1>Input components</h1>
            <form>
                {`<Input />`}
                <label className="label1">
                    <p>Default input</p>
                    <InputComponent placeholder="Placeholder" default />
                </label>
                <br />
                {`<Input error />`}
                <label className="label2">
                    <p>Input with error</p>
                    <InputComponent placeholder="Placeholder" error/>
                </label>
                <br />
                {`<Input disabled/>`}
                <label className="label3">
                    <p>Disabled input</p>
                    <InputComponent placeholder="Placeholder" disabled/>
                </label>
                <br />
                <div className="container">
                    <div>
                        {'<Input helperTtext="Some interesting text"/>'}
                        <label className="label4">
                            <p>Input with some text underneath</p>
                            <InputComponent placeholder="Placeholder" helperText="Some-interesting-text"/>
                        </label>
                        <p>Some interesting text</p>
                    </div>
                    <br />
                    <div>
                        {`<Input helperText="Some-interesting-text" error />`}
                        <label className="label5">
                            <p>Input with some text underneath that is colored</p>
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
                            <p>Input with startIcon</p>
                            <InputComponent placeholder="Placeholder" startIcon />
                        </label>
                    </div>
                    <br />
                    <div>
                        {`<Input endIcon />`}
                        <label className="label7">
                            <p>Input with endIcon</p>
                            <InputComponent placeholder="Placeholder" endIcon />
                        </label>
                    </div>
                </div>
                <br />
                {`<Input value="text" />`}
                <label className="label8">
                    <p>Text</p>
                    <InputComponent placeholder="Text" value="text"/>
                </label>
                <br />
                <div className="container">
                    <div>
                        {`<Input size="sm"/>`}
                        <label>
                            <p>Small sized input</p>
                            <InputComponent placeholder="Placeholder" size="sm" />
                        </label>
                    </div>
                    <br />
                    <div>
                        {`<Input size="md" />`}
                        <label>
                            <p>Medium sized input</p>
                            <InputComponent placeholder="Placeholder" size="md" />
                        </label>
                    </div>
                </div>
                <br />
                {`<Input fullWidth />`}
                <label>
                    <p>FullWidth input</p>
                    <InputComponent placeholder="Text" fullWidth />
                </label>
                <br />
                {`<Input multiline row="4" />`}
                <label>
                    <p>Multiline input</p>
                    <TextArea row="4" placeholder="Placeholder" multiline/>
                </label>
            </form>
        </main>
    );
}

export default App;