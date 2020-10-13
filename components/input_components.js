import React from "react";
import '../css/styles.css'

function inputComponent(props) {
    return (
        <div>
            <label>Label</label><br />
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default inputComponent