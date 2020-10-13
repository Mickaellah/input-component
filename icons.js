import React from "react";
import iconCall from "./icons/call-24px.svg";
import iconInfo from "./icons/info-24px.svg";
import iconLock from "./icons/lock-24px.svg";
import iconSetting from "./icons/settings_applications-24px.svg";
import iconSource from "./icons/source-24px.svg";

function Icon(props) {
    let icon;
    const style = props.align === 'right' ? 'icon--right' : null;
    switch (props.name) {
        case 'call':
            icon = <img src={iconCall} className={style} />;
            break;
        case 'info':
            icon = <img src={iconInfo} className={style} />;
            break;
        case 'lock':
            icon = <img src={iconLock} className={style} />;
            break;
        case 'setting':
            icon = <img src={iconSetting} className={style} />;
            break;
        case 'source':
            icon = <img src={iconSource} className={style} />
            break;
        default: 
            icon = <span />
            break;
    }
    return icon;
}

export default Icon;