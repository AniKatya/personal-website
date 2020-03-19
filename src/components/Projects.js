import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import crm1 from '../crm1.png'
import crm2 from '../crm2.png'
import crm3 from '../crm3.png'
import resc1 from '../resc1.png'
import resc2 from '../resc2.png'
import resc3 from '../resc3.png'
import '../App.css'
let json = require('../aboutMe.json')


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            CRM: false,
            RESCYOUME: false
        }
    }
    addCrmInfoDiv = () => {
        this.setState({
            CRM: !this.state.CRM
        })
    }
    addRescInfoDiv = () => {
        this.setState({
            RESCYOUME: !this.state.RESCYOUME
        })
    }
    render() {
        return (
            <div className="screenshots-container">
                <Button style={{ width: '100%', color: 'white' }} className="project-title crm-title" onClick={this.addCrmInfoDiv} endIcon={<ArrowDropDownIcon> </ArrowDropDownIcon>}>CRM</Button>
                {this.state.CRM ? <div className="project-info">{json.projects.CRM}</div> : null}
                <a href="https://customer-management-tool.herokuapp.com/">
                    <div className="crm-screenshots-container">
                        <img className="projects-screenshots" src={crm1} alt=""></img>
                        <img className="projects-screenshots" src={crm2} alt=""></img>
                        <img className="projects-screenshots" src={crm3} alt=""></img>
                    </div>
                </a>

                <Button style={{ width: '100%', color: 'white' }} className="project-title rescyoume-title" onClick={this.addRescInfoDiv} endIcon={<ArrowDropDownIcon> </ArrowDropDownIcon>}>RESCYOUME</Button>
                {this.state.RESCYOUME ? <div className="project-info">{json.projects.RESCYOUME}</div> : null}
                <a href="https://resc-you-me.herokuapp.com/">
                    <div className="rescyoume-screenshots-container">
                        <img className="projects-screenshots-rescyoume" src={resc1} alt=""></img>
                        <img className="projects-screenshots-rescyoume" src={resc2} alt=""></img>
                        <img className="projects-screenshots-rescyoume" src={resc3} alt=""></img>
                    </div>
                </a>

            </div>
        )


    }
}
export default Projects;