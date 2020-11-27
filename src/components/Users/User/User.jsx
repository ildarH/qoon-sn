import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { React } from "react";
import { NavLink } from "react-router-dom";
// import { usersAPI } from "../../../api/api";
import { renderAvatar } from "./../../Common/Avatar";
import style from "./User.module.css";
// import { usersAPI } from "../../../api/api";
// import * as axios from "axios";
// import unknownUser from "../../../assets/unknown-user.jpg"
// import { toggleFollowingProgress } from './../../../redux/usersReducer';

const plusElement = (
  <FontAwesomeIcon className={style.fontAwesomeStyle} icon={faPlus} />
);
const minusElement = (
  <FontAwesomeIcon className={style.fontAwesomeStyle} icon={faMinus} />
);

const User = (props) => {
  console.log("User: ", props);

  // let onFollow = () => props.follow(props.id);
  // let onUnfollow = () => props.unfollow(props.id);
  let name = props.name ? props.name : "unknown";
  let photo = props.photo ? props.photo : null;

  return (
    <div className={style.userContainer}>
      <div className={style.userAvatar}>
        <NavLink className={style.link} to={"/profile/" + props.id}>
          {renderAvatar(name, photo, style)}
        </NavLink>
      </div>
      <div className={style.userInfo}>
        <div className={style.userName}>
          <h3 className={style.userTitle}>{props.name}</h3>
        </div>
        {props.status ? (
          <div className={style.userStatus}>
            <p className={style.userStatusP}>{props.status}</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={style.userFollow}>
        {props.followed ? (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            className={style.button}
            onClick={() => {
              props.unfollow(props.id);
            }}
          >
            {minusElement}
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            className={style.button}
            onClick={() => {
              props.follow(props.id);
            }}
          >
            {plusElement}
          </button>
        )}
      </div>
    </div>
  );
};

User.propTypes = {
  users: PropTypes.object,
  id: PropTypes.number,
  followed: PropTypes.bool,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  photo: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  currentStatus: PropTypes.string,
  location: PropTypes.object,
  cityName: PropTypes.string,
  countryName: PropTypes.string,
  toggleFollowingProgress: PropTypes.bool,
  followingInProgress: PropTypes.array,
};

export default User;
