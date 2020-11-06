import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendPage.module.css'

const FriendPage = (props) => {
  return (
    <div className={style.friend}>
      <img className={style.friendImg} src={props.avatarUrl} alt={props.friendName} />
    </div>
  )
};

FriendPage.propTypes = {
  avatarUrl: PropTypes.string,
  friendName: PropTypes.string
}

export default FriendPage;
