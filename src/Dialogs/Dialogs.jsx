import React from 'react';
import s from "./Dialogs.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import Dialog from "./Dialog";
import Natali from "./MessageUsers/Natali/Natali";

const Dialogs = (props) => {
    return (

        <BrowserRouter>
            <div className={s.dialogs_container}>

                <div className={s.users}>
                    <Dialog nameUser="Natali" pathTo={'/natali'}/>
                    <Dialog nameUser="Kirill" pathTo={"/kirill"}/>
                    <Dialog nameUser="Sveta" pathTo={"/sveta"}/>
                    <Dialog nameUser="Dmitriy" pathTo={"/dmitriy"}/>
                    <Dialog nameUser="Katya" pathTo={"/katya"}/>
                    <Dialog nameUser="Anton" pathTo={"/anton"}/>
                </div>


                <div className={s.dialogs}>
                    <Route path='/natali' render={(props) => {
                        return <Natali/>
                    }}/>


                </div>

              </div>
        </BrowserRouter>

    )

};

export default Dialogs;