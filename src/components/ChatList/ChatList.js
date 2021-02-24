import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ChatListItem from "../ChatListItem/ChatListItem";
import UserProfile from "../UserProfile/UserProfile";
import "./ChatList.css";

const ChatList = ({ onContactSelected }) => {
  const user = useContext(UserContext);
  return user ? (
    <div className="contact-list">
      <UserProfile user={user} />
      <div className="scroll">
        {user.chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            onClick={() => onContactSelected(chat.id)}
          />
        ))}
      </div>
    </div>
  ) : (
    <h3>loading...</h3>
  );
};

export default ChatList;
