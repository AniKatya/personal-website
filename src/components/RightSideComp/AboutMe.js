import React, { useEffect } from "react";
let json = require('../../aboutMe.json');
let myPic = require('../../me.jpg')


export default function AboutMe () {
    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, []);
    
  return(
        <div>
      <img src={myPic} alt="" className="pic"></img>
      <br></br>
      <div>{json.welcome.welcomeParagraph1}</div>
      <br></br>
      <div>{json.welcome.welcomeParagraph2}</div>
      <h1>
        <i>Technologies I use</i>
      </h1>
      {json.welcome.technologies.map((tech) => (
        <div className="tech-tag">{tech}</div>
      ))}
      </div>
  );
}
