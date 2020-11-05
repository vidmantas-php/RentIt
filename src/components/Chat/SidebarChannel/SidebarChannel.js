import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../../features/app/appSlice';
import "./SidebarChannel.css";
import { AvatarImg } from "../../Avatar/Avatar";


function SidebarChannel({id, channelName }) {
    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" onClick={() => dispatch(setChannelInfo({
            channelId: id, channelName: channelName,
        }))}>
            <h5><span className="sidebarChannel__hash">
                <AvatarImg image="https://gwbcenter.imgix.net/Exhibits_and_Events/Events/2019/ForumOnLeadership/bill-gates-headshot.jpg?w=200&h=200&fit=facearea&faceindex=1&facepad=3&mask=ellipse&fm=png" />
                </span>{channelName}</h5>
        </div>
    )
}

export default SidebarChannel
