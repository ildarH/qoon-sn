import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsReducer from './friendsReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;
