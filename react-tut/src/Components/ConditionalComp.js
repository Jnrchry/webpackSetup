import React, { useState } from "react";

const ConditionalComp = () => {
  const [display, setDisplay] = useState(false);

  return display ? (
    <div>This is a conditional component</div>
  ) : (
    <div>Nothing here</div>
  );
};

export default ConditionalComp;
