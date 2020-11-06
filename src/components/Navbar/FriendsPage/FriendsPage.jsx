import React from 'react';
import FriendPage from './FriendPage/FriendPage';
import style from './FriendsPage.module.css';
import PropTypes from 'prop-types';

const FriendsPage = (props) => {

  let FriendElement = props.friendsPage.friends.map(friend => <FriendPage
    friendName={friend.friendName}
    avatarUrl={friend.avatarUrl}
    key={friend.id}/>);

  return (
    <div className={style.friendsSection}>
      {FriendElement}
    </div>
  )
};

FriendsPage.propTypes = {
  friendsPage: PropTypes.object,
  friends: PropTypes.object,
};

export default FriendsPage;
