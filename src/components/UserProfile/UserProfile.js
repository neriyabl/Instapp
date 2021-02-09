import { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    name: "David abu",
    img:
      "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg",
    status: "avilable",
  };
  render() {
    const { name, img, status } = this.state;
    return (
      <div className="user-profile">
        <img className="user-avatar" src={img} />
        <div className="user-info">
          <div className="bold">{name}</div>
          <div>{status}</div>
        </div>
      </div>
    );
  }
}
