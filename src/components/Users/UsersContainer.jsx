import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAc } from "./../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
