import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import style from './Profile.module.css';

const Profile = () => {
    // console.log("Profile: ", props);
    // debugger;
    return (
        <div className={style.content}>
            <ProfileInfoContainer  />
            <MyPostsContainer  />
        </div>
    )
};

export default Profile;