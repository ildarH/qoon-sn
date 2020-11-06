import { createRef, React } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';

const MyPosts = (props) => {
  // console.log('MyPosts: ', props );
  // debugger;
  let postsElements = props.posts.map((post) => (
    <Post
      message={post.post}
      likesCount={post.likesCount}
      avatarURL={post.avatarUrl}
      userName={post.userName}
      postImgUrl={post.postImgUrl}
      key={post.id}
    />
  ));
  let newPostElement = createRef();
  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    // debugger
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={style.postsBlock}>
      <div className={style.formContainer}>
        <div className={style.textareaContainer}>
          <textarea
            className={style.postTextarea}
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div className={style.postIcons}>
          <img className={style.postIcon} src="img/image_icon.svg" alt="" />
          <img className={style.postIcon} src="img/map_icon.svg" alt="" />
          <img className={style.postIcon} src="img/video_icon.svg" alt="" />
        </div>
        <div className={style.buttonContainer}>
          <button className={style.postButton} onClick={onAddPost}>
            Add post
          </button>
        </div>
      </div>
      <h3 className={style.postsHeader}>My Posts</h3>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

MyPosts.propTypes = {
  posts: PropTypes.array,
  addPost: PropTypes.func,
  newPostText: PropTypes.string,
  updateNewPostText: PropTypes.func,
};

export default MyPosts;
