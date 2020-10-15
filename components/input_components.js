import React from "react";
import '../css/styles.css'

function inputComponent(props) {
    let classes = props.value ? `input input--${props.value}` : 'input';

    if (props.default) {
        classes = `${classes} input--default`;
    }
    if (props.error) {
        classes = `${classes} input--error`;
    }
    if (props.startIcon) {
        classes = `${classes} input--startIcon`;
    }
    if (props.endIcon) {
        classes = `${classes} input--endIcon`;
    }
    if (props.size) {
        classes = `${classes} input--${props.size}`;
    }
    if (props.row) {
        classes = `${classes} input--${props.row}`;
    } 
    if (props.fullWidth) {
        classes = `${classes} input--fullWidth`;
    }
    if (props.helperText) {
        classes = `${classes} input--${props.helperText}`;
    }

    return <input type={props.type} className={classes} disabled={props.disabled} placeholder={props.placeholder} />

}

export default inputComponent