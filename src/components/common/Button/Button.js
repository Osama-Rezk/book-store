import React from "react";
import "./button.css";
const SideBarCard = props => {
  const { text } = props;
  return (
    <button {...props} className="edit-btn">
      {text}
    </button>
  );
};

export default SideBarCard;
