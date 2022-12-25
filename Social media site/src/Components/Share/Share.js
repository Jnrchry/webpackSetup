import React from "react";
import "./share.scss";
import {
  EmojiEmotions,
  PermMedia,
  VideoCameraFront,
} from "@mui/icons-material";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="./assets/person/user.jpg"
            alt=""
            className="shareProfileImg"
          />

          <input
            type="text"
            name=""
            placeholder="What's on your mind Junior?"
            className="shareInput"
          />
        </div>

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFront
                className="shareIcon"
                style={{ color: "#bb0000f2" }}
              />
              <span className="shareOptionText">Live Video</span>
            </div>

            <div className="shareOption">
              <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
              <span className="shareOptionText">Photo / Video</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <span className="shareOptionText">Fellings / Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
