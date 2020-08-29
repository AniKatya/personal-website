import React from "react";
import myPic from "../../images/me.jpg";
import "./AboutRight.scss";

export default function AboutRight(props) {
  const tags = [
    "html5",
    "css",
    "javascript",
    "jquery",
    "react.js",
    "mobx",
    "redux",
    "git",
    "express.js",
    "node.js",
    "sql",
    "mongodb",
  ];
  return (
    <div className="right-side">
      <div className="content" style={{ color: props.data.backgroundColor }}>
        <div className="paragraph">I am Full Stack Developer from Russia based in Israel.</div>
        <img src={myPic} alt="" className="pic"></img>
        <br></br>
        <div className="paragraph">
          In code I love structure and order. I enjoy spending time on fixing small details in order
          to optimize web apps.
        </div>
        <div className="paragraph">
          I am passionate about design and minimalism, because truly believe that less is more.
        </div>
        <h2 className="paragraph">Technologies I use</h2>
        {tags.map((tech) => (
          <div className="tech-tag">{tech}</div>
        ))}
      </div>
    </div>
  );
}
