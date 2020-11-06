const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  messages: [
    {
      id: 1,
      message: "There's a surprise for you in the garage.",
      name: 'Finnian Coleman',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_8.jpg',
    },
    {
      id: 2,
      message: "Oh yeah, you really told him, didn't you?",
      name: 'Hubert Simmons',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_1.jpg',
    },
    {
      id: 3,
      message: 'You got a package for me?',
      name: 'Finnian Coleman',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_8.jpg',
    },
    {
      id: 4,
      message: "You're paying a small price compared with what she's going through.",
      name: 'Hubert Simmons',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_1.jpg',
    },
    {
      id: 5,
      message: 'You came back!',
      name: 'Finnian Coleman',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_8.jpg',
    },
    {
      id: 6,
      message: "We can't invite her. Mother hates her.",
      name: 'Hubert Simmons',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_1.jpg',
    },
    {
      id: 7,
      message: 'The foodbank was sold out when I got there.',
      name: 'Finnian Coleman',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_8.jpg',
    },
    {
      id: 8,
      message: "I hope that what I've said hasn't hurt you too much.",
      name: 'Hubert Simmons',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_1.jpg',
    },
    {
      id: 9,
      message: "It looks like you're in trouble there. Can I help?",
      name: 'Finnian Coleman',
      dialogDate: '01.06.2020',
      avatarUrl: 'img/avatar_8.jpg',
    },
  ],
  dialogs: [
    {
      id: 1,
      name: 'Finnian Coleman',
      unreadMessages: '1',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_8.jpg',
    },
    {
      id: 2,
      name: 'Bradlee Barnett',
      unreadMessages: '2',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_10.jpg',
    },
    {
      id: 3,
      name: 'Hawwa Shepard',
      unreadMessages: '2',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_3.jpg',
    },
    {
      id: 4,
      name: 'Rupert Francis',
      unreadMessages: '5',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_6.jpg',
    },
    {
      id: 5,
      name: 'Katerina Wicks',
      unreadMessages: '',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_7.jpg',
    },
    {
      id: 6,
      name: 'Tre Xiong',
      unreadMessages: '',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_2.jpg',
    },
    {
      id: 7,
      name: 'Tarun Cisneros',
      unreadMessages: '',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_9.jpg',
    },
    {
      id: 8,
      name: 'Austen Morse',
      unreadMessages: '',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_5.jpg',
    },
    {
      id: 9,
      name: 'Tatiana Schwartz',
      unreadMessages: '',
      dialogDate: '01.06.2020',
      dialogAvatarUrl: 'img/avatar_4.jpg',
    },
  ],
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
  let newMessage;
  switch (action.type) {
    case ADD_MESSAGE: {
      newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText,
        name: 'Hubert Simmons',
        dialogDate: '03.11.2020',
        avatarUrl: 'img/avatar_1.jpg',
      };
      return ({
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      });
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return ({
        ...state,
        newMessageText: action.newText
      });
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default messagesReducer;
