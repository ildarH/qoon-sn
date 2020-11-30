import PropTypes from "prop-types";
import React from "react";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // console.log("Profile: ", props);
  // debugger;
  return (
    <div className={style.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  profile: PropTypes.object,
};
