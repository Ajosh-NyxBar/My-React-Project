import "./adduser.css";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs, setDoc, doc, serverTimestamp, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { useUserStore } from "../../../../lib/userStore";

const Adduser = () => {

  const { currentUser } = useUserStore();
  
  const handleAdd = async (user) => {
    const chatRef = collection(db, "chats");
    const userChatRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      const userChatDocRef = doc(userChatRef, user.id);
      const currentUserChatDocRef = doc(userChatRef, currentUser.id);

      await setDoc(userChatDocRef, {}, { merge: true });
      await setDoc(currentUserChatDocRef, {}, { merge: true });

      await updateDoc(userChatDocRef, {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        })
      });

      await updateDoc(currentUserChatDocRef, {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        })
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [users, setUsers] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    console.log(username);

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setUsers(querySnapshot.docs.map((doc) => doc.data()));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="adduser">
      <form onSubmit={handleSearch}>
        <input type="text" name="username" placeholder="Username" />
        <button>Search</button>
      </form>
      {users &&
        users.map((user) => (
          <div className="user" key={user.id}>
            <div className="detail">
              <img src={user.avatar || "./avatar.png"} alt="" />
              <span>{user.username}</span>
            </div>
            <button onClick={() => handleAdd(user)}>Add User</button>
          </div>
        ))}
    </div>
  );
};

export default Adduser;
