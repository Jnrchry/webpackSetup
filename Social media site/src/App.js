import React from "react";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Rightbar from "./Components/Rightbar/Rightbar";

const App = () => {
  return (
    <div>
      <Home />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default App;
