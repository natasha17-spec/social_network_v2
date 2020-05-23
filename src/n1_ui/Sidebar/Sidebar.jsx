import React from 'react';
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return  <div className="sidebar">
        <div className={s.sidebar_container}>
            <div className={s.profile}>
                <NavLink to="/profile">Profile</NavLink>
        </div>
            <div className={s.message}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>
            <div className={s.users}>
                <NavLink to="/users">Users</NavLink></div>
            <div className={s.news}>
                <NavLink to="/news">News</NavLink>
            </div>
        </div>


        </div>

};

export default Sidebar;