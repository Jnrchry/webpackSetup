import React from "react";
import "./sidebar.scss";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import LogoutIcon from "@mui/icons-material/Logout";
import Menulink from "../Menulink/Menulink";
import Friends from "../Friends/Friends";
import { Users } from "../../data";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Menulink icon={<RssFeedOutlinedIcon />} text="Feed" />
        <Menulink icon={<ChatOutlinedIcon />} text="Chat" />
        <Menulink icon={<VideocamOutlinedIcon />} text="Videos" />
        <Menulink icon={<GroupOutlinedIcon />} text="Friends" />
        <Menulink icon={<BookmarkBorderIcon />} text="Bookmark" />
        <Menulink icon={<ShoppingCartIcon />} text="Market place" />
        <Menulink icon={<EventIcon />} text="Events" />
        <Menulink icon={<SettingsBrightnessIcon />} text="Theme" />
        <Menulink icon={<LogoutIcon />} text="Logout" />

        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friends user={u} key={u.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
