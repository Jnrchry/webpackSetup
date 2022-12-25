import React from "react";
import "./feed.scss";
import Stories from "../Stories/Stories";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../data";

const Feed = ({ post }) => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <Share />

        {Posts.map((p) => (
          <Post post={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
