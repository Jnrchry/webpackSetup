import React from "react";
import "./profilepage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Profilepage = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/profilecover/profilecover.jpg"
                alt=""
                className="profileCoverImg"
              />
            </div>
          </div>

          <div className="profileRightBottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
