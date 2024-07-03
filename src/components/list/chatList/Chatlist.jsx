import { doc as firestoreDoc, onSnapshot, getDoc } from "firebase/firestore";

import { useUserStore } from "../../../lib/userStore";

import Adduser from "./addUser/Adduser";

import "./chatlist.css";

import { useEffect, useState } from "react";

import { db } from "../../../lib/firebase";

const Chatlist = () => {
  const [chats, setChats] = useState([]);

  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      firestoreDoc(db, "userchats", currentUser.id),

      async (doc) => {
        const items = doc.data().chats;

        const promises = items.map(async (chatId) => {
          const userDocRef = firestoreDoc(db, "users", chatId.receiverId);

          const userDocSnap = await getDoc(userDocRef);

          const userData = userDocSnap.data();

          // Log untuk memeriksa nilai userData.image
          console.log("User Image:", userData.avatar);

          return { ...chatId, user: userData };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />

          <input type="text" placeholder="Search..." />
        </div>

        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {chats.map((chat) => (
        <div className="item" key={chat.chatId}>
          <img
            src={chat.user.avatar || "./avatar.png"}
            alt={chat.user.avatar || "User Avatar"}
          />

          <div className="texts">
            <span>{chat.user.username}</span>

            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <Adduser />}
    </div>
  );
};

export default Chatlist;
