import style from './MyPosts.module.css'
import Post from './Post/Post'
import { React, createRef } from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/profileReducer';

const MyPosts = (props) => {
    // debugger;
    let postsElements = props.profilePage.posts.map(post => <Post
        message={post.post}
        likesCount={post.likesCount}
        avatarURL={post.avatarUrl}
        userName={post.userName}
        postImgUrl={post.postImgUrl} />);
    let newPostElement = createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        // debugger;
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }
    return (
        <div className={style.postsBlock}>
            <div className={style.formContainer}>
                <div className={style.textareaContainer}>
                    <textarea className={style.postTextarea}
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.profilePage.newPostText} />
                </div>
                <div className={style.postIcons}>
                    <img className={style.postIcon} src="img/image_icon.svg" alt="" />
                    <img className={style.postIcon} src="img/map_icon.svg" alt="" />
                    <img className={style.postIcon} src="img/video_icon.svg" alt="" />
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.postButton} onClick={addPost}>Add post</button>
                </div>
            </div>
            <h3 className={style.postsHeader}>My Posts</h3>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;