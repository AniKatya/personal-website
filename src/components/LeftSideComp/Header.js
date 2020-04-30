import React from "react";
import "../../App.css";

export default function Header (props){
    return <div className="header">
        {props.header[0]}
        <br></br>
        {props.header[1]}
    </div>
}

