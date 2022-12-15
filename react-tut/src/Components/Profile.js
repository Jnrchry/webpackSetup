import React from "react";

const Profile = (props) => {
  const { name, lastname } = props;
  return (
    <div>
      <h1>
        Name: {name} {lastname}
      </h1>
      {props.children}
    </div>
  );
};

export default Profile;
