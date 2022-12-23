import React from "react";
import "./menulink.scss";

const Menulink = ({ icon, text }) => {
  return (
    <div className="menuLink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && "(Junior)"}
      </span>
    </div>
  );
};

export default Menulink;
