import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-scroll";

export default function ToolBar(props) {
    return (
        <div className="toolbar-container">
            <Link to="welcome" smooth={true}><Button><div className="labels main-label" style={{ color: props.color }}>MAIN</div></Button></Link>
            <Link to="projects" smooth={true}><Button><div className="labels projects-label" style={{ color: props.color }}>PROJECTS</div></Button></Link>
            <Link to="contact" smooth={true}><Button><div className="labels contact-label" style={{ color: props.color }}>CONTACT</div></Button></Link>
        </div>

    )

}
