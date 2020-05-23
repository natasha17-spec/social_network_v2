import React from 'react';
import s from "../n1_ui/Dialogs/Dialogs.module.css";


const AddMessagesBox = () => {
    return <div className={s.addMessage_container}>
        <div className={s.addMessage}>
            <div className={s.message_box}>
                <textarea className={s.decore_textarea}>Add message</textarea>
                <button className={s.decore_button}>></button>
            </div>
        </div>
    </div>
};

export default AddMessagesBox;