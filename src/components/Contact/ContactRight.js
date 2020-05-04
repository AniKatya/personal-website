import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import Grid from "@material-ui/core/Grid";

export default function ContactRight(props) {
  return (
    <div className="contact-right right-side">
      <div className="content" style={{color: props.data.backgroundColor, backgroundColor: props.data.color }}>
        <div>
          If you are looking for responsible and hard-working junior web-developer and a nice person
          to work with – you are very welcome to contact me.
        </div>
        <Grid className="icons-container" container>
          <Grid item xs={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/katyalopukhina"
            >
              <LinkedInIcon className="icons" id="linkedin"></LinkedInIcon>
            </a>
          </Grid>
          <Grid item xs={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AniKatya">
              <GitHubIcon className="icons" id="github"></GitHubIcon>
            </a>
          </Grid>
          <Grid item xs={2}>
            <a href="mailto:lopukhina.ekaterina@gmail.com">
              <MailOutlineOutlinedIcon className="icons" id="mail"></MailOutlineOutlinedIcon>
            </a>
          </Grid>
          <Grid item xs={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.codewars.com/users/AniKatya/stats"
            >
              <CodeIcon className="icons" id="codewars"></CodeIcon>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
