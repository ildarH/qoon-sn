import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow,
} from "./../../redux/usersReducer";
import Preloader from "./../Common/Preloader/Preloader";
import Users from "./Users";
// import { usersAPI } from './../../api/api';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    console.log("componentDidMount props: ", this.props);
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    // console.log('onPageChange props: ', this.props);
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Preloader />
          </div>
        ) : (
          <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            follow={this.props.follow}
            isFetching={this.props.isFetching}
            unfollow={this.props.unfollow}
            onPageChange={this.onPageChange}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  // toggleFollowingProgress,
  getUsers,
})(UsersAPIContainer);

// export default UsersContainer;

UsersAPIContainer.propTypes = {
  users: PropTypes.array,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setTotalUsersCount: PropTypes.func,
  toggleIsFetching: PropTypes.func,
  getUsers: PropTypes.func,
  isFetching: PropTypes.bool,
  followingInProgress: PropTypes.array,
};
