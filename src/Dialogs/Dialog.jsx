import React from 'react';
import s from "./Dialogs.module.css"
import ava from "../picture/Ava-pats-12.jpg"
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
                <div className={s.user}>
                    <div className={s.user_box}>
                        <img src={ava} alt=""/>
                        <div className={s.symbol}>
                            <div className={s.decor_symbol}></div>
                        </div>
                    </div>
                    <NavLink to={props.pathTo}>{props.nameUser}</NavLink>
                </div>
    )
};

export default Dialog;