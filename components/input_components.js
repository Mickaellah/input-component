import React from "react";
import '../css/styles.css'

function inputComponent(props) {
    const label = props.label || props.children;
    let classes = props.value ? `bttn bttn--${props.value}` : 'bttn';

    if (props.default) {
        classes = `${classes} bttn--default`;
    }
    if (props.error) {
        classes = `${classes} bttn--error`;
    }
    if (props.startIcon) {
        classes = `${classes} bttn--startIcon`;
    }
    if (props.endIcon) {
        classes = `${classes} bttn--endIcon`;
    }
    if (props.size) {
        classes = `${classes} bttn--${props.size}`;
    }
    if (props.row) {
        classes = `${classes} bttn--${props.row}`;
    } 
    if (props.fullWidth) {
        classes = `${classes} bttn--fullWidth`;
    }
    if (props.helperText) {
        classes = `${classes} bttn--${props.helperText}`;
    }

    return <input className={classes} disabled={props.disabled} placeholder={props.placeholder} />

}

export default inputComponent