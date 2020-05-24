import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div>
        <div>
            <ProfileInfo/>
            <MyPosts myPost={props.myPost}/>
        </div>
    </div>
};

export default Profile;