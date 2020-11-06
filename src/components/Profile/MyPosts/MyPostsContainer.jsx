import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//     let state = props.store.getState().profilePage;
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostActionCreator(text));
//     }

//     return <MyPosts updateNewPostText={onPostChange}
//         addPost={addPost}
//         posts={state.posts}
//         newPostText={state.newPostText} />
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => { dispatch(updateNewPostActionCreator(text)) },
        addPost: () => { dispatch(addPostActionCreator()) }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;