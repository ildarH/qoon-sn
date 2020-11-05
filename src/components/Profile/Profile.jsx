import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    // console.log("Profile: ", props);
    // debugger;
    return (
        <div className={style.content}>
            <ProfileInfo userInfo={props.profilePage.userInfo} />
            <MyPosts profilePage={props.profilePage}
                dispatch={props.dispatch} />
        </div>
    )
};

export default Profile;