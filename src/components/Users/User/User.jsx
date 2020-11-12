import PropTypes from "prop-types";
import { React } from "react";
import style from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const plusElement = (
  <FontAwesomeIcon className={style.fontAwesomeStyle} icon={faPlus} />
);
const minusElement = (
  <FontAwesomeIcon className={style.fontAwesomeStyle} icon={faMinus} />
);

const User = (props) => {
  console.log("User: ", props);

  let onFollow = () => props.follow(props.id);
  let onUnfollow = () => props.unfollow(props.id);

  return (
    <div className={style.userContainer}>
      <div className={style.userAvatar}>
        <img
          className={style.userAvatarImg}
          src={props.photo}
          alt={props.name}
        />
        {props.followed ? (
          <button className={style.button} onClick={onUnfollow}>
            {minusElement}
          </button>
        ) : (
          <button className={style.button} onClick={onFollow}>
            {plusElement}
          </button>
        )}
      </div>
      <div className={style.userInfo}>
        <div className={style.userName}>
          <h3 className={style.userTitle}>{props.name}</h3>
        </div>
        <div className={style.userStatus}>
          <p className={style.userStatusP}>{props.status}</p>
        </div>
      </div>
      <div className={style.userLocation}>
        {/* <div><span>From: <strong>{props.location.cityName}</strong>,</span></div>
                <div>{props.location.countryName}</div> */}
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
  status: PropTypes.object,
  currentStatus: PropTypes.string,
  location: PropTypes.object,
  cityName: PropTypes.string,
  countryName: PropTypes.string,
};

export default User;
