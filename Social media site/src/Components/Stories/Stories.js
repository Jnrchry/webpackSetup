import React from "react";
import "./stories.scss";
import Storycard from "../Storycard/Storycard";
import { Users } from "../../data";

const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>

        <img src="./assets/person/user.jpg" alt="" className="storyProfile" />
        <img
          src="./assets/person/user.jpg"
          alt=""
          className="storyBackground"
        />
        <img src="./assets/person/upload.png" alt="" className="storyAdd" />
        <span className="text">Junior</span>
      </div>
      {Users.map((u) => (
        <Storycard user={u} key={u.id} />
      ))}
    </div>
  );
};

export default Stories;
