import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profiles() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <>
      <h3>List of Profiles</h3>
      {profiles.map((profile) => (
        <Link key={profile} to={`/profiles/${profile}`}>
          Profile-{profile} <br />
        </Link>
      ))}

      <Outlet />
    </>
  );
}

export default Profiles;
