import React from "react";
import "./App.css";
import ClassEvent from "./Components/ClassEvent";
import Classstate from "./Components/Classstate";
import ConditionalComp from "./Components/ConditionalComp";
import FunctionEvent from "./Components/FunctionEvent";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Product from "./Components/Product";
import Profile from "./Components/Profile";
import Statehook from "./Components/Statehook";

const App = () => {
  return (
    <div>
      <Hello />
      {/* class based component */}
      <Message messagecontent="This is a message from prop" />
      {/* Function component */}
      <Profile name="Jnr" lastname="Wahab" />
      <Profile name="Mark" lastname="Ash">
        <h3>This is a profile of a person</h3>
      </Profile>
      <Classstate />
      <FunctionEvent />
      <ClassEvent />
      <Statehook />
      <ConditionalComp />
      <Product />
    </div>
  );
};

export default App;
