import PropTypes from "prop-types";
import * as React from "react";
import User from "./User/User";
import style from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
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
    function createPages(pages, pagesCount, currentPage) {
      if (pagesCount > 10) {
        if (currentPage > 5) {
          for (let i = currentPage - 4; i <= currentPage + 5; i++) {
            pages.push(i);
            if (i == pagesCount) break;
          }
        } else {
          for (let i = 1; i <= 10; i++) {
            pages.push(i);
            if (i == pagesCount) break;
          }
        }
      } else {
        for (let i = 1; i <= pagesCount; i++) {
          pages.push(i);
        }
      }
    }

    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    // for (let index = 1; index <= pagesCount; index++) {
    //   pages.push(index);
    // }
    createPages(pages, pagesCount, this.props.currentPage);

    let userElement = this.props.users.map((user) => (
      <User
        key={user.id}
        id={user.id}
        followed={user.followed}
        name={user.name}
        photo={user.photos.small}
        status={user.status}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    ));

    return (
      <div className={style.users}>
        <div className={style.pagination}>
          {pages.map((page) => {
            return (
              <span
                key={page}
                onClick={() => this.onPageChange(page)}
                className={`${
                  this.props.currentPage === page ? style.pageSelected : ""
                } ${style.pageNumber}`}
              >
                {page}
              </span>
            );
          })}
        </div>
        <div className={style.usersContainer}>{userElement}</div>
        <div className={style.pagination}>
          {pages.map((page) => {
            return (
              <span
                key={page}
                onClick={() => this.onPageChange(page)}
                className={`${
                  this.props.currentPage === page ? style.pageSelected : ""
                } ${style.pageNumber}`}
              >
                {page}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

Users.propTypes = {
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

export default Users;
