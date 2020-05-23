import React from 'react';
import Posts from "./post/Posts";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {


    let posts = props.myPost.map((el)=>{return <Posts dataPosts={el.dataPosts} likeCount={el.likeCount} text={el.text}/>})

    return <div className={s.post_container}>
        <h1>My Post</h1>
        <div className={s.myPosts}>
            <textarea name="addPost"></textarea>
            <div className={s.addPost_button}>
                <button>Add</button>
            </div>
        </div>
        {posts}
    </div>
};

export default MyPosts;