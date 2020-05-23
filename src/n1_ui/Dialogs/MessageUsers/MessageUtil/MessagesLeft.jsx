import React from 'react';
import s from "../Natali/allUsers.module.css";
import ava from "../../../../picture/Ava-pats-12.jpg";


const MessagesLeft = (props) => {
    return (
        <div className={s.message_box}>
                <div className={s.user}>
                    <div className={s.user_box}>
                        <img src={ava} alt=""/>
                        <div className={s.symbol}>
                            <div className={s.decor_symbol}></div>
                        </div>
                    </div>
                </div>
                <div className={s.one_user}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>
                        {props.message}
                    </div>
                </div>
            </div>

    )

};

export default MessagesLeft;