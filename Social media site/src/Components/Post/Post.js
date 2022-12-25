import React from "react";
import "./post.scss";
import { Users } from "../../data";
import { IconButton } from "@mui/material";
import {
  ChatBubbleOutline,
  FavoriteOutlined,
  MoreVert,
  ShareOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            <IconButton>
              <MoreVert className="postVertButton" />
            </IconButton>
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.body}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteOutlined
              className="buttonLeftIcon"
              style={{ color: "red" }}
            />
            <ThumbUp className="buttonLeftIcon" style={{ color: "orange" }} />
            <span className="postLikeCounter">{post.like}</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommonText">
              {post.comment} · comments · share
            </span>
          </div>
        </div>

        <hr className="footerHr" />

        <div className="postBottomFooter">
          <div className="postBottomFooterItem">
            <ThumbUpAltOutlined className="footerIcon" />
            <span className="footerText">Like </span>
          </div>

          <div className="postBottomFooterItem">
            <ChatBubbleOutline className="footerIcon" />
            <span className="footerText">Comment </span>
          </div>

          <div className="postBottomFooterItem">
            <ShareOutlined className="footerIcon" />
            <span className="footerText">Share </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
