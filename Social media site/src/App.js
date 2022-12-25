import React from "react";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Rightbar from "./Components/Rightbar/Rightbar";
import Profilepage from "./Pages/Profilepage/Profilepage";

const App = () => {
  return (
    <div>
      <Home />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      <Profilepage />
    </div>
  );
};

export default App;
