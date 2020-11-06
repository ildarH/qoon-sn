import PropTypes from 'prop-types';
import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    // console.log('ProfileInfo: ', props);
    let workExperience = props.userInfo.userWorkExperience.map((work) => {
        return (
            <div className={style.workExperience} key={work.company}>
                <div><span><strong>{work.company}</strong></span> &mdash; <span>{work.position}</span></div>
                <div><span className={style.workDate}>{work.yearStart}</span> &ndash; <span className={style.workDate}>{work.yearFinish}</span></div>
            </div>
        )
    })
    return (
        <div className={style.container}>
            <div className={style.cover}>
                <img className={style.coverImg} src="img/profile_cover.jpg" alt="view" />
            </div>
            <div className={style.descriptionContainer}>
                <div className={style.avatarContainer}>
                    <img className={style.avatarImg} src={props.userInfo.userAvatarUrl} alt={`foto: ${props.userInfo.userName}`} />
                </div>
                <div className={style.bioContainer}>
                    <div className={style.bioText}>
                        <h3 className={style.bioName}>{props.userInfo.userName}</h3>
                        <span className={style.bioPosition}>&mdash; {props.userInfo.userPosition}</span>
                    </div>
                    <div className={style.bioText}>
                        <h4 className={style.bioPersonalInfo}>Personal Information:</h4>
                        <p className={style.bioTextP}>{props.userInfo.userPersonalInformation}</p>
                    </div>
                    <div className={style.bioText}>
                        <h4 className={style.bioPersonalInfo}>WorkExperience:</h4>
                        {workExperience}
                    </div>
                </div>
            </div>
        </div>
    )
};

ProfileInfo.propTypes = {
    userInfo: PropTypes.object,
    userName: PropTypes.string,
    userAvatarUrl: PropTypes.string,
    userDateOfBirth: PropTypes.string,
    userPersonalInformation: PropTypes.string,
    userPosition: PropTypes.string,
    userWorkExperience: PropTypes.object,
    company: PropTypes.string,
    position: PropTypes.string,
    yearStart: PropTypes.number,
    yearFinish: PropTypes.number,
};

export default ProfileInfo;