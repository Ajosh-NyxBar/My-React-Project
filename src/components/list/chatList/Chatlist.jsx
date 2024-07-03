import { doc, onSnapshot } from "firebase/firestore";
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
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (doc) => {
      const res = await getDoc(doc);
      const items = res.data().chats;
     
      const promises = items.map(async (chatId) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);
         
        const userData = userDocSnap.data();
        return {...item, user};
      });
      const chatData = await Promise.all(promises);
      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    });
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
          <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Akbar Josh</span>
          <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <Adduser />}
    </div>
  );
};

export default Chatlist;
