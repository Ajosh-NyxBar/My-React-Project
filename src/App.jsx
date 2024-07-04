import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Notifiaction from "./components/notification/Notifiaction";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore"; // Added missing import

const App = () => {
  const { currentUser, fetchUserInfo, isLoading } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if(user){
        fetchUserInfo(user?.uid)
      }else{
        fetchUserInfo(null)
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser)

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List user={currentUser} />
       {chatId && <Chat  />}
      {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notifiaction />
    </div>
  );
};

export default App;
