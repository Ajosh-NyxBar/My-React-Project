import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState, useRef } from "react";
import {
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const endRef = useRef(null);

  const { chatId, user } = useChatStore();
  const { currentUser } = useUserStore();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });
    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSend = async () => {
    if (text === "" && !img.file) return;

    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      const messageDocRef = doc(db, "chats", chatId);
      const messageDocSnapshot = await getDoc(messageDocRef);

      if (!messageDocSnapshot.exists()) {
        console.log("No document to update:", messageDocRef.path);
        return;
      }

      await updateDoc(messageDocRef, {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (Id) => {
        const userChatsRef = doc(db, "userchats", Id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage =
            text.substring(0, 30) + (text.length > 30 ? "..." : "");
          userChatsData.chats[chatIndex].isSeen =
            Id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log("Error sending message:", err);
    }

    setImg({
      file: null,
      url: "",
    });

    setText("");
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user.username}</span>
            <p>{user.status || "Available"}</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png " alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {chat?.messages?.map((message) => (
          <div
            className={`message ${
              message.senderId === currentUser.id ? "own" : ""
            }`}
            key={message?.createdAt}
          >
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              <span>
                {new Date(
                  message.createdAt?.seconds
                    ? message.createdAt.seconds * 1000
                    : message.createdAt
                ).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </span>
            </div>
          </div>
        ))}
        {img.file && (
          <div className="message">
            <img src={img.url} alt="" />
          </div>
        )}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png " alt="" />
          </label>
          <input
            type="file"
            name=""
            id="file"
            style={{
              display: "none",
            }}
            onChange={handleImg}
          />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div className="picker">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        <button className="sendButton" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;