import React from "react";
import "./friends.scss";

const Friends = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      </li>
    </div>
  );
};

export default Friends;
