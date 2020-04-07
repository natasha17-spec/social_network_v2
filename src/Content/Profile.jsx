import React from 'react';
import s from "./Profile.module.css"
import photo from "../picture/img_content.jpg"

const Profile = () => {
    return <div className="content">
        <div className={s.content_container}>
            <div className={s.photo}><img src={photo}/></div>
            {/*//аватар+описание*/}
            <div>ava+description</div>
            {/*//Посты*/}
            <div>My Post
                <div>New Post
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>

    </div>
};

export default Profile;