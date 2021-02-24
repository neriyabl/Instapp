import "./MainPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useFetch } from "../../utils/UseFetch";
import ChatContent from "../ChatContent/ChatContent";

const MainPage = ({ chat }) => {
  const user = useContext(UserContext);
  const { name } = chat
    ? chat.name
      ? chat
      : chat.members.find((member) => member.id !== user.id)
    : {};

  return (
    <div className="main-page">
      <div className="header">
        {name && (
          <>
            <div className="bold">{name}</div>
            {/* <div onClick={() => this.props.onMute(id)} className="icon-button">
              <FontAwesomeIcon
                icon={isMute ? faMicrophoneSlash : faMicrophone}
              />
            </div> */}
          </>
        )}
      </div>
      <div className="conversation-page">
        {chat && (
          <>
            <ChatContent chat={chat} />
            <div className="test">
              <input />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
