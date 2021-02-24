import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./ChatListItem.css";

const ChatListItem = ({ chat, onClick }) => {
  const user = useContext(UserContext);
  const { name, img } = chat.name
    ? chat
    : chat.members.find((chat) => chat.id !== user.id);
  const {
    lastMessage: { content: lastMessage },
  } = chat;
  return (
    <div className="contact-list-item" onClick={onClick}>
      <img className="contact-avatar" src={img} />
      <div className="contact-info">
        <div className="contact-title">
          <div className="bold">{name}</div>
          {/* <FontAwesomeIcon
            className="contact-mute-icon"
            icon={this.props.contact.isMute ? faMicrophoneSlash : faMicrophone}
          /> */}
        </div>
        <div>
          {lastMessage.length > 27
            ? `${lastMessage.substring(0, 27)} ...`
            : lastMessage}
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
