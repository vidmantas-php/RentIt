import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
// import { useSelector } from "react-redux";
import db from "../../../firebase";
import SidebarChannel from "../SidebarChannel/SidebarChannel";
// import { selectUser } from "../../../features/user/userSlice";

function Sidebar() {
  // const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h4>Chats</h4>
        <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      {/* <div className="sidebar__profile">
        <Avatar src={user.photo} />
        <div className="sidebar__profileInfo">
          <h5>{user.displayName}</h5>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
