import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
          <div className="navbarIconItem"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
