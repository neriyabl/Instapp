import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./MessageCard.css";

const MessageCard = ({ message }) => {
  const user = useContext(UserContext);

  return (
    <div
      className={
        message.author.id === user.id
          ? "message-card message-card-user"
          : "message-card"
      }
    >
      {message.content}
    </div>
  );
};

export default MessageCard;
