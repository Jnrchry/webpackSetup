import React from "react";
import "../Style/Header.css";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import HeaderOption from "./HeaderOption";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://imgs.search.brave.com/dAcaKtHnTHF6sE9JlIkdaYjzFsTNNsUexq9XBen5hQs/rs:fit:880:876:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvbGlua2Vk/aW4tY2xpcGFydC01/LmpwZw"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />

          <input type="search" name="" id="" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="My Network" />
        <HeaderOption Icon={ChatIcon} title="My Network" />
        <HeaderOption Icon={NotificationsIcon} title="My Network" />
        <HeaderOption
          avatar="https://imgs.search.brave.com/ZQ6mrgxhCBq2H4TPUqfSxqDTWTL9xnw4VgwAwKplud8/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/MTU0NzUxMDI1MS5w/bmc"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
