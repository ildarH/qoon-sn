const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText,
        name: 'Hubert Simmons',
        dialogDate: '03.11.2020',
        avatarUrl: 'img/avatar_1.jpg',
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  };
};

export const addMessageActionCreator = () => ({type : ADD_MESSAGE})

export const updateNewMessageActionCreator = (text) => {
  return {type : UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default messagesReducer;