// import profileCoverImg from './img/profile_cover.jpg';
import PropTypes from "prop-types";
import React from "react";
import style from "./ProfileInfo.module.css";
// import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationArrow,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { renderAvatar } from "./../../Common/Avatar";

const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
const websiteIcon = <FontAwesomeIcon icon={faLocationArrow} />;
const vkIcon = <FontAwesomeIcon icon={faVk} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const instagamIcon = <FontAwesomeIcon icon={faInstagram} />;
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const mainlinkIcon = <FontAwesomeIcon icon={faExternalLinkAlt} />;

const ProfileInfo = (props) => {
  // console.log('ProfileInfo: ', props);

  // const avatar = props.profile ?
  let name = props.profile ? props.profile.fullName : "unknown";
  let photo = props.profile ? props.profile.photos.large : null;

  return (
    <div className={style.container}>
      <div className={style.cover}>
        <img
          className={style.coverImg}
          src="img/profile_cover.jpg"
          alt="view"
        />
        <div className={style.coverImgBlur}></div>
        <div className={style.coverMenu}>
          <div className={style.coverMenuItem}>Timeline</div>
          <div className={style.coverMenuItem}>About</div>
          <div className={style.coverMenuItem}>Album</div>
          <div className={style.coverMenuItem}>Friends</div>
        </div>
      </div>

      <div className={style.descriptionContainer}>
        <div className={style.avatarContainer}>
          {renderAvatar(name, photo, style)}
          {
            // props.profile ?
            //   <img className={style.avatarImg}
            //     src={props.profile.photos.large}
            //     alt={`foto: ${props.profile.fullName}`}
            //   /> : <span className={style.avatarNoImg}></span>
          }
        </div>
        <div className={style.bioContainer}>
          {props.profile ? (
            <div className={style.bioText}>
              <div className={style.contacts}>
                <h3 className={`${style.bioTitle} ${style.bioName}`}>
                  {props.profile.fullName}
                </h3>
                <div>
                  <span className={`${style.icon} ${style.facebook}`}>
                    {facebookIcon}
                  </span>
                  <span className={`${style.icon} ${style.website}`}>
                    {websiteIcon}
                  </span>
                  <span className={`${style.icon} ${style.vk}`}>{vkIcon}</span>
                  <span className={`${style.icon} ${style.twitter}`}>
                    {twitterIcon}
                  </span>
                  <span className={`${style.icon} ${style.instagram}`}>
                    {instagamIcon}
                  </span>
                  <span className={`${style.icon} ${style.youtube}`}>
                    {youtubeIcon}
                  </span>
                  <span className={`${style.icon} ${style.github}`}>
                    {githubIcon}
                  </span>
                  <span className={`${style.icon} ${style.mainLink}`}>
                    {mainlinkIcon}
                  </span>
                </div>
              </div>
              <div className={style.contacts}>
                <h4 className={`${style.bioTitle} ${style.bioPersonalInfo}`}>
                  About me:
                </h4>
                <p className={style.bioTextP}>{props.profile.aboutMe}</p>
              </div>
              <div className={style.contacts}>
                <h4 className={`${style.bioTitle} ${style.bioPersonalInfo}`}>
                  WorkExperience:
                </h4>
                {/* {workExperience} */}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  // userInfo: PropTypes.object,
  // userName: PropTypes.string,
  // userAvatarUrl: PropTypes.string,
  // userDateOfBirth: PropTypes.string,
  // userPersonalInformation: PropTypes.string,
  // userPosition: PropTypes.string,
  // userWorkExperience: PropTypes.object,
  // company: PropTypes.string,
  // position: PropTypes.string,
  // yearStart: PropTypes.number,
  // yearFinish: PropTypes.number,
  profile: PropTypes.object,
  photos: PropTypes.object,
  large: PropTypes.string,
  fullName: PropTypes.string,
  contacts: PropTypes.object,
  aboutMe: PropTypes.string,
};

export default ProfileInfo;
