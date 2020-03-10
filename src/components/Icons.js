import React, { Component } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import Grid from '@material-ui/core/Grid';



class Icons extends Component {
  
    render() {
        return (
            <Grid className="icons-container" container>
                <Grid item xs={2}>
                    <a target="_blank" href="https://www.linkedin.com/in/katyalopukhina">
                        <LinkedInIcon className="icons" id="linkedin">
                        </LinkedInIcon>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a target="_blank" href="https://github.com/AniKatya">
                        <GitHubIcon className="icons" id="github" >
                        </GitHubIcon>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href="mailto:lopukhina.ekaterina@gmail.com">
                        <MailOutlineOutlinedIcon className="icons" id="mail">
                        </MailOutlineOutlinedIcon>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a target="_blank" href="https://www.codewars.com/users/AniKatya/stats">
                        <CodeIcon className="icons" id="codewars">
                        </CodeIcon>
                    </a>
                </Grid>
                
            </Grid>
        )
    }
}
export default Icons;