import { Component } from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => (
  <div className="user-profile">
    <img className="user-avatar" src={user.img} />
    <div className="user-info">
      <div className="bold">{user.name}</div>
      {/* <div>{status}</div> */}
      <div>avilable</div>
    </div>
  </div>
);

export default UserProfile;
