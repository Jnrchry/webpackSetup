import React from "react";
import "./rightbarhome.scss";
import Online from "../Online/Online";
import { Usersonline } from "../../data";

const Rightbarhome = () => {
  return (
    <div className="rightbarHome">
      <div className="birthdayContainer">
        <img
          src="./assets/birthdaygifts/gift.png"
          alt=""
          className="birthdayImg"
        />

        <span className="birthdayText">
          <b>Felix Asare</b> and <b>other firends have a birthday today</b>
        </span>
      </div>

      <img src="./assets/ads/adv.jpg" alt="" className="rightbarAdvert" />

      <span className="righbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online onlineuser={u} key={u.id} />
        ))}
      </ul>
    </div>
  );
};

export default Rightbarhome;
