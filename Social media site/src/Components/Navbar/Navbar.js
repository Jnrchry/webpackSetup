import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import User from "../../assets/person/user.jpg";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Sociout</span>
      </div>

      <div className="navbarCenter">
        <div className="searchBar">
          <SearchOutlinedIcon className="searchIcon" />
          <input
            type="text"
            name=""
            class="searchInput"
            placeholder="Search for friends post or video"
          />
        </div>
      </div>

      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
        </div>

        <div className="navbarIcons">
          <div className="navbarIconItem">
            <PersonOutlinedIcon />
            <span className="navbarIconBadge">2</span>
          </div>

          <div className="navbarIconItem">
            <ChatBubbleOutlineOutlinedIcon />
            <span className="navbarIconBadge">20 </span>
          </div>

          <div className="navbarIconItem">
            <NotificationsNoneOutlinedIcon />
            <span className="navbarIconBadge">8</span>
          </div>
        </div>

        <img src={User} alt="" className="navbarImg" />
      </div>
    </div>
  );
};

export default Navbar;
