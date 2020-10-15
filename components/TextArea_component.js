import React from "react";

function TextArea(props) {
    return <textarea rows={props.row} placeholder={props.placeholder} />
}

export default TextArea