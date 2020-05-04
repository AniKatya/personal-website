import React from "react";
import ToolBar from "./ToolBar";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function LeftSide(props) {
  const backgroundColor = props.data.backgroundColor;
  const color = props.data.color;
  const header = props.data.header.split("_");

  return (
    <div className="left-side sticky" style={{ backgroundColor, color }}>
      <HamburgerMenu />
      <div className="header">
        {header[0]}
        <br></br>
        {header[1]}
      </div>
      <ToolBar style={{ color }} />
    </div>
  );
}
