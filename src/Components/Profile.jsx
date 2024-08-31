import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const param = useParams();
  //   console.log(param);

  return (
    <>
      <h3>This is Profile page - {param.profileId} </h3>
    </>
  );
}

export default Profile;
