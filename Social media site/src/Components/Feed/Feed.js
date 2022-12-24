import React from "react";
import "./feed.scss";
import Stories from "../Stories/Stories";
import Share from "../Share/Share";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <Share />
      </div>
    </div>
  );
};

export default Feed;
