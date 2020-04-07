import React from 'react';
import s from "./Sidebar.module.css"

const Sidebar = () => {
    return  <div className="sidebar">
        <div className={s.sidebar_container}>
            <div className={s.profile}><a href="#">Profile</a></div>
            <div className={s.message}><a href="#">Message</a></div>
            <div className={s.users}><a href="#">Users</a></div>
            <div className={s.contacts}><a href="#">Contacts</a></div>
            <div>News</div>
        </div>


        </div>

};

export default Sidebar;