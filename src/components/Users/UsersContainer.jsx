import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAc,
  setCurrentPageAc,
  setTotalUsersCountAc,
} from "./../../redux/usersReducer";
import * as axios from "axios";
import PropTypes from "prop-types";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    // console.log('componentDidMount props: ', this.props);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    // console.log('onPageChange props: ', this.props);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        // console.log(response.data.items);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        users={this.props.users}
        onPageChange={this.onPageChange}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
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
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAc(page));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAc(totalCount));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIContainer);

export default UsersContainer;

UsersAPIContainer.propTypes = {
  users: PropTypes.array,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  setUsers: PropTypes.func,
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setTotalUsersCount: PropTypes.func,
};
