import React from "react";
import "./feed.scss";
import Stories from "../Stories/Stories";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
      </div>
    </div>
  );
};

export default Feed;
