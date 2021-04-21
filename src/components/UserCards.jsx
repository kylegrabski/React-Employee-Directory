import React from "react";

function UserCards({ name }) {
  console.log(name[0].name.first)
  return (
    <>
      <p>NAME: {name.first}</p>
    </>
  );
}

export default UserCards;
