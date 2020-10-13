import React from "react";
import inputComponent from "./input_components";
import InputComponent from "./input_components";
import TextArea from "./textarea";

function App() {
    return (
        <form>
            <div>
                <span>{'<Input />'}</span>
                <InputComponent 
                    type="text" 
                    name="default" 
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input error />`}</span>
                <InputComponent 
                    type="text" 
                    name="error"
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input disabled />`}</span>
                <InputComponent 
                    type="text"
                    name="disabled"
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input helperText="Some interesting text"/>`}</span>
                <InputComponent 
                    type="text" 
                    name="intresting_text"
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input helperText="Some interesting text" error/>`}</span>
                <InputComponent 
                    type="text" 
                    name="intresting_text_error"
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input startIcon />`}</span>
                <InputComponent 
                    type="text" 
                    name="startIcon"
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input endIcon/>`}</span>
                <InputComponent 
                    type="text" 
                    name="endIcon"
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input value="text" />`}</span>
                <InputComponent 
                    type="text" 
                    name="text" 
                    rows="4"
                    cols="40"
                    placeholder="Text" 
                />
            </div><br />
            <div>
                <span>{`<Input size="sm" />`}</span>
                <InputComponent 
                    type="text" 
                    name="small" 
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input size="md" />`}</span>
                <InputComponent 
                    type="text" 
                    name="medium" 
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input fullWidth/>`}</span>
                <InputComponent 
                    type="text" 
                    name="fullWidth" 
                    placeholder="Placeholder" 
                />
            </div><br />
            <div>
                <span>{`<Input multiline row="4"/>`}</span>
                <InputComponent 
                    type="text"
                    name="row_4" 
                    placeholder="Placeholder" 
                />
            </div><br />
        </form>
    );
}

export default App;