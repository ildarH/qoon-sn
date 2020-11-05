const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0,
        avatarUrl: 'img/avatar_1.jpg',
        userName: 'Hubert Simmons',
        postImgUrl: '',
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  };
};

export const addPostActionCreator = () => ({type : ADD_POST})
export const updateNewPostActionCreator = (text) => {
  return {type : UPDATE_NEW_POST_TEXT, newText : text}
}

export default profileReducer;