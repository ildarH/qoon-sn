import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
