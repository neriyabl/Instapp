import React from "react";
import { useFetch } from "../../utils/UseFetch";
import MessageCard from "../MessageCard/MessageCard";
import "./ChatContent.css";

const ChatContent = ({ chat }) => {
  const { data, loading } = useFetch(
    `https://instapp-api.herokuapp.com/chats/${chat.id}`
  );

  return (
    <div className="chat-content scroll">
      {!loading &&
        data.messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
    </div>
  );
};

export default ChatContent;
