import { useState, useEffect } from "react";
import "./App.css";
import ChatList from "./components/ChatList/ChatList";
import MainPage from "./components/MainPage/MainPage";
import { UserContext } from "./contexts/UserContext";
import { useFetch } from "./utils/UseFetch";

const App = () => {
  const [curentChatId, setCurentChatId] = useState();

  const setContact = (chatId) => {
    setCurentChatId(chatId);
  };

  const { data: user, loading: loadingUser } = useFetch(
    "https://instapp-api.herokuapp.com/users/1"
  );

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <ChatList onContactSelected={setContact} />
        <MainPage
          chat={
            !loadingUser && user.chats.find((chat) => chat.id === curentChatId)
          }
        />
      </UserContext.Provider>
    </div>
  );
};

export default App;
