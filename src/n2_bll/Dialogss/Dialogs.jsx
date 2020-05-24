import React from 'react';
import s from "./Dialogs.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Natali from "./MessageUsers/Natali/Natali";

const Dialogs = (props) => {
    let dialog = props.dialogUser.map((el) => {
        return <DialogItem nameUser={el.nameUser} pathTo={el.pathTo}/>
    });
    return (
        <BrowserRouter>
            <div className={s.dialogs_container}>
                <div className={s.users}>
                    {dialog}
                </div>
                <div className={s.dialogs}>
                    <Route path='/dialog/natali' render={(props) => {
                        return <Natali/>
                    }}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default Dialogs;