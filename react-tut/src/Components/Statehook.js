import React, { useState } from "react";

const Statehook = () => {
  const [counter, setCounter] = useState(0);

  const clickHandle = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={clickHandle}>State Hook</button>
    </div>
  );
};

export default Statehook;
