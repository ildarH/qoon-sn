let initialState = {
  friends: [
    { id: 1, friendName: 'Finnian Coleman', avatarUrl: 'img/avatar_8.jpg' },
    { id: 2, friendName: 'Bradlee Barnett', avatarUrl: 'img/avatar_10.jpg' },
    { id: 3, friendName: 'Hawwa Shepard', avatarUrl: 'img/avatar_3.jpg' },
    { id: 4, friendName: 'Rupert Francis', avatarUrl: 'img/avatar_6.jpg' },
    { id: 5, friendName: 'Katerina Wicks', avatarUrl: 'img/avatar_7.jpg' },
    { id: 6, friendName: 'Tre Xiong', avatarUrl: 'img/avatar_2.jpg' },
    { id: 7, friendName: 'Tarun Cisneros', avatarUrl: 'img/avatar_9.jpg' },
    { id: 8, friendName: 'Austen Morse', avatarUrl: 'img/avatar_5.jpg' },
    { id: 9, friendName: 'Tatiana Schwartz', avatarUrl: 'img/avatar_4.jpg' },
  ],
};

const friendsReducer = (state = initialState) => {
  return state;
};

export default friendsReducer;
