import React, { useEffect } from "react";
import "../../App.css";
import ToolBar from "../LeftSideComp/ToolBar.js";
import Header from "./Header";

export default function LeftSide(props){
  const backgroundColor = props.data.backgroundColor;
  const color = props.data.color;
  const header = props.data.header.split("_");


  useEffect(()=>{
      console.log("using effect")
    // window.addEventListener('scroll', this.handleScroll, true);

  })

  return (
    <div
      style={{
        backgroundColor,
        color,
      }}
      className="left-side"
      id={props.data.name} >
      <Header header={header} />
      <ToolBar color={color} />
    </div>
  );
};

