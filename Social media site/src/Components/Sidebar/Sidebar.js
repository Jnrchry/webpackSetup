import React from "react";
import "./sidebar.scss";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <ChatOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>

          <li className="sidebarListItem">
            <VideocamOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>

          <li className="sidebarListItem">
            <GroupOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>

          <li className="sidebarListItem">
            <BookmarkBorderIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <RssFeedOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
