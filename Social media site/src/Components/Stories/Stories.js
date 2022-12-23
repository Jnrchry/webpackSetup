import React from "react";
import "./stories.scss";
import Storycard from "../Storycard/Storycard";
import { Users } from "../../data";

const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard"></div>

      {Users.map((u) => (
        <Storycard user={u} key={u.id} />
      ))}
    </div>
  );
};

export default Stories;
