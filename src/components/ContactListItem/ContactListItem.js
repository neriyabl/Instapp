import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./ContactListItem.css";

export default class ContactListItem extends Component {
  render() {
    const { name, lastMessage, img, isMute } = this.props.contact;
    return (
      <div className="contact-list-item" onClick={this.props.onClick}>
        <img className="contact-avatar" src={img} />
        <div className="contact-info">
          <div className="contact-title">
            <div className="bold">{name}</div>
            <FontAwesomeIcon
              className="contact-mute-icon"
              icon={
                this.props.contact.isMute ? faMicrophoneSlash : faMicrophone
              }
            />
          </div>
          <div>
            {lastMessage.length > 27
              ? `${lastMessage.substring(0, 27)} ...`
              : lastMessage}
          </div>
        </div>
      </div>
    );
  }
}
