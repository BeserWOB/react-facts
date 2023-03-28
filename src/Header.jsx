import React from "react";

export default function Header(props){
    return(
        <header id="header">
            <img src="logo.png" alt="react-logo" />
            <div className="flipswitch">
            <input 
                type="checkbox" 
                name="flipswitch" 
                className="flipswitch-cb" 
                id="fs" 
                onClick={props.darkMode}
                defaultChecked />
            <label className="flipswitch-label" htmlFor="fs">
                <div className="flipswitch-inner"></div>
                <div className="flipswitch-switch"></div>
            </label>
        </div>

        </header>
    )
}

