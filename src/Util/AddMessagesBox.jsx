import React from 'react';
import s from "../n1_ui/Dialogs/Dialogs.module.css";


const AddMessagesBox = () => {
   let addMessageRef = React.createRef()
    let addMessage = ()=>{
       debugger
        let textMessage = addMessageRef.current.value
    }
    return <div className={s.addMessage_container}>
        <div className={s.addMessage}>
            <div className={s.message_box}>
                <textarea ref = {addMessageRef} placeholder={"Add message"} className={s.decore_textarea}/>
                <button onClick={addMessage} className={s.decore_button}>></button>
            </div>
        </div>
    </div>
};

export default AddMessagesBox;