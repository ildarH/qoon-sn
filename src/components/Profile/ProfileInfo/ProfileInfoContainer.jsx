import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';

// const ProfileInfoContainer = (props) => {
//     console.log('ProfileInfoContainer: ', props);
//     let state = props.store.getState().profilePage.userInfo;
//     return (
//         <ProfileInfo state={state} />
//     )
// };

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;