import React from 'react';
import s from "./Header.module.css"


const Header = () => {
    return <div className="header">
        <div className={s.header_container}>
            <div className={s.main}>Main</div>
            <div className={s.skills}>Skills</div>
            <div className={s.project}>Project</div>
            <div className={s.contact}>Contacts</div>
        </div>
        </div>
};

export default Header;