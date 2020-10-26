import React, { useEffect, useState } from "react";
import "./Chat.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SendIcon from '@material-ui/icons/Send';
import { useSelector } from "react-redux";
import db from "../../firebase";
import firebase from "firebase";
import ChatHeader from "../../components/Chat/ChatHeader/ChatHeader";
import Message from "../../components/Chat/Message/Message";
import { selectChannelId, selectChannelName } from "../../features/app/appSlice";
import { selectUser } from "../../features/user/userSlice";
import Sidebar from "../../components/Chat/Sidebar/Sidebar";
import "../../MainPage.css";

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

  return (

    <div className="display__flex">
    {user ? (
      <>
        <Sidebar />
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
          <AddCircleIcon className="margin__right__09rem icons__color" fontSize="large" />
          <form className="message__border__radius background__color__input display__flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={"Write message..."}
              disabled={!channelId}
            />
            <button
              className="chat__inputButton"
              type="submit"
              onClick={sendMessage}
            >
              Send Message
            </button>
            <SendIcon className="icons__color" />
          </form>
        </div>
      </div>
      </>
    ) : (
      <h2>You must login</h2>
    )}
  </div>
  );
}

export default Chat;
