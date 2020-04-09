import React from 'react';
import s from "./allUsers.module.css";
import MessagesLeft from "../MessageUtil/MessagesLeft";
import MyMessage from "../MessageUtil/MyMessage/MyMessage";
import AddMessagesBox from "../../../Util/AddMessagesBox";



const Natali = () => {
    return (
        <div className={s.container}>
            <MessagesLeft name='Natali' message='Hello, how are you?'/>
            <MyMessage message="Hi! I'm fine! And you?"/>
            <MessagesLeft name='Natali' message='Very good'/>
            <MyMessage message="Ok"/>
            <AddMessagesBox/>

        </div>
    )
};

export default Natali;