import PropTypes from "prop-types";
import * as React from "react";
import User from "./User/User";
import style from "./Users.module.css";

let Users = (props) => {
  console.log("Users: ", props);
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

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  createPages(pages, pagesCount, props.currentPage);

  let userElement = props.users.map((user) => (
    <User
      key={user.id}
      id={user.id}
      followed={user.followed}
      name={user.name}
      photo={user.photos.small}
      status={user.status}
      unfollow={props.unfollow}
      follow={props.follow}
      followingInProgress={props.followingInProgress}
    />
  ));

  return (
    <div className={style.users}>
      <div className={style.pagination}>
        {pages.map((page) => {
          return (
            <span
              key={page}
              onClick={() => props.onPageChange(page)}
              className={`${
                props.currentPage === page ? style.pageSelected : ""
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
              onClick={() => props.onPageChange(page)}
              className={`${
                props.currentPage === page ? style.pageSelected : ""
              } ${style.pageNumber}`}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;

Users.propTypes = {
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  users: PropTypes.array,
  unfollow: PropTypes.func,
  follow: PropTypes.func,
  followingInProgress: PropTypes.array,
};
