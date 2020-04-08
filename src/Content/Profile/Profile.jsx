import React from 'react';
import s from "./Profile.module.css"
import photo from "../../picture/img_content.jpg"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div>
        <div className={s.content_container}>
            <div className={s.photo}><img src={photo}/></div>
            {/*//аватар+описание*/}
            <div>ava+description</div>
            {/*//Посты*/}
           <MyPosts/>
        </div>

    </div>
};

export default Profile;