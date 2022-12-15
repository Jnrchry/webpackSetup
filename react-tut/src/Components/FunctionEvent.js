import React from "react";

const FunctionEvent = () => {
  let handleClick = () => {
    console.log(`hi`);
  };

  return (
    <div>
      Functional Component
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default FunctionEvent;
