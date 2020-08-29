import React from "react";
import reactIcon from '../../images/reactlove.svg';
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div id="footer-text">handcrafted with</div>
      <img src={reactIcon} alt="" id="react-icon" margin="auto" height="50px" width="50px"></img>
    </div>
  );
}
