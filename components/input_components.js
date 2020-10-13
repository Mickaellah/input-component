import React from "react";
import '../css/styles.css'

function inputComponent(props) {
    return (
        <div>
            <label className="label">Label</label><br />
            <input 
                type={props.type} 
                className={props.name} 
                placeholder={props.placeholder} 
            />
        </div>
    )
}

export default inputComponent