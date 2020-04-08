import React from 'react';
import s from "./Sidebar.module.css"

const Sidebar = () => {
    return  <div className="sidebar">
        <div className={s.sidebar_container}>
            <div className={s.profile}>
                <a href="/profile">Profile</a>
        </div>
            <div className={s.message}>
                <a href="/dialogs">Message</a>
            </div>
            <div className={s.users}>
                <a href="/users">Users
                </a></div>
            <div className={s.news}>
                <a href="/news">News</a>
            </div>
        </div>


        </div>

};

export default Sidebar;