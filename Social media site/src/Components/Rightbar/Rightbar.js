import React from "react";
import "./rightbar.scss";
import Rightbarhome from "../Rightbarhome/Rightbarhome";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Rightbarhome />
      </div>
    </div>
  );
};

export default Rightbar;
