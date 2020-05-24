import React from 'react';
import ava from "../../../../picture/Ava-pats-12.jpg"
import s from "../MyPosts.module.css"

const Posts = (props) => {
    return <div className={s.post_container}>
        <div className={s.post}>
            <img src={ava} alt="ava"/>
            <div className={s.post_message}>
                {props.dataPosts}
                <p>{props.text}</p>
            </div>
        </div>
        <div className={s.like}>
            <button>Like {props.likeCount}</button>
        </div>
    </div>

};

export default Posts;