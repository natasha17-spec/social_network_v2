import React from 'react';
import s from "./MyMessage.module.css";
import ava from "../../../../../picture/avaMe.jpg";


const MyMessage = (props) => {
    return (
        <div className={s.my_container}>
            <div className={s.My_message_box}>
                <div>
                    <div className={s.my_name}>Me</div>
                    <div className={s.my_message}>
                        {props.message}
                    </div>
                </div>
                <div className={s.my_user}>
                    <div className={s.my_user_box}>
                        <img src={ava} alt=""/>
                        <div className={s.my_symbol}>
                            <div className={s.my_decor_symbol}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )

};

export default MyMessage;