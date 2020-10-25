import React, { useEffect, useState } from "react";
import "./Chat.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useSelector } from "react-redux";
import db from "../../firebase";
import firebase from "firebase";
import ChatHeader from "../../components/Chat/ChatHeader/ChatHeader";
import Message from "../../components/Chat/Message/Message";
import { selectChannelId, selectChannelName } from "../../features/app/appSlice";
import { selectUser } from "../../features/user/userSlice";
import Sidebar from "../../components/Chat/Sidebar/Sidebar";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  function ChatComponent() {
    return (
        <div className="chat">
        <ChatHeader channelName={channelName} />
  
        <div className="chat__messages">
          {messages.map((message) => (
            <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
            />
          ))}
        </div>
  
        <div className="chat__input">
          <AddCircleIcon fontSize="large" />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Message #${channelName}`}
              disabled={!channelId}
            />
            <button
              className="chat__inputButton"
              type="submit"
              onClick={sendMessage}
            >
              Send Message
            </button>
          </form>
  
          <div className="chat__inputIcons">
            <CardGiftcardIcon fontSize="large" />
            <GifIcon fontSize="large" />
            <EmojiEmotionsIcon fontSize="large" />
          </div>
        </div>
      </div>
    );
  }

  return (

    <div className="display__flex">
    {user ? (
      <>
        <Sidebar />
        <ChatComponent />
      </>
    ) : (
      <h2>You must login</h2>
    )}
  </div>
  );
}

export default Chat;
