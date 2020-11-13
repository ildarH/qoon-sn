import PropTypes from "prop-types";
import { React } from "react";
import style from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// import unknownUser from "../../../assets/unknown-user.jpg"
const plusElement = (
  <FontAwesomeIcon className={style.fontAwesomeStyle} icon={faPlus} />
);
const minusElement = (
  <FontAwesomeIcon className={style.fontAwesomeStyle} icon={faMinus} />
);

const User = (props) => {
  // console.log("User: ", props);

  let onFollow = () => props.follow(props.id);
  let onUnfollow = () => props.unfollow(props.id);

  let renderAvatar = () => {
    if (props.photo) {
      return (
        <img
          className={style.userAvatarImg}
          src={props.photo}
          alt={props.name}
        />
      );
    } else {
      let nameSplit = String(props.name)
        .toUpperCase()
        .split(/\.|,|__|_|-| /);
      // console.log('nameSplit: ', nameSplit);
      let initials;
      let colors = [
        "#1abc9c",
        "#2ecc71",
        "#3498db",
        "#9b59b6",
        "#34495e",
        "#16a085",
        "#27ae60",
        "#2980b9",
        "#8e44ad",
        "#2c3e50",
        "#f1c40f",
        "#e67e22",
        "#e74c3c",
        "#ecf0f1",
        "#95a5a6",
        "#f39c12",
        "#d35400",
        "#c0392b",
        "#bdc3c7",
        "#7f8c8d",
      ];
      if (nameSplit.length == 1) {
        initials = nameSplit[0] ? nameSplit[0].charAt(0) : "?";
      } else {
        initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
      }
      let charIndex = (initials == "?" ? 72 : initials.charCodeAt(0)) - 64;
      let colorIndex = charIndex % 20;
      return (
        <span
          className={style.userAvatarInitial}
          style={{ backgroundColor: colors[colorIndex - 1] }}
        >
          {initials}
        </span>
      );
    }
  };

  return (
    <div className={style.userContainer}>
      <div className={style.userAvatar}>{renderAvatar()}</div>
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
          <button className={style.button} onClick={onUnfollow}>
            {minusElement}
          </button>
        ) : (
          <button className={style.button} onClick={onFollow}>
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
};

export default User;
