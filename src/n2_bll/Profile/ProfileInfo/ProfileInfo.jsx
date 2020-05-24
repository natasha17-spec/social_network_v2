import React from 'react';
import s from "../Profile.module.css"
import photo from "../../../picture/img_content.jpg"


const ProfileInfo = () => {
    return <div>
        <div className={s.photo}><img src={photo}/></div>
        {/*//аватар+описание*/}
        <div>ava+description</div>
        {/*//Посты*/}
    </div>
};

export default ProfileInfo;