import React from "react";
import "./storycard.scss";

const Storycard = ({ user }) => {
  return (
    <div className="storyCard">
      <img src={user.profilePicture} alt="" className="storyProfile" />
      <img src={user.profilePicture} alt="" className="storyBackground" />
      <img src="./assets/person/upload.png" alt="" className="storyAdd" />

      <span className="text">Junior</span>
    </div>
  );
};

export default Storycard;
