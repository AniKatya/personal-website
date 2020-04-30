import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

export default function ToolBar(props) {
  const menuLabels = ["main", "projects", "contact"];
  return (
    <div className="toolbar-container">
      {menuLabels.map((label) => (
        <Link to={label} smooth={true}>
          <Button>
            <div className={`labels ${label}-label`} style={{ color: props.color }}>
              {label}
            </div>
          </Button>
        </Link>
      ))}
    </div>
  );
}
