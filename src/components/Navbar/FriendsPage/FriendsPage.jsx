import style from './FriendsPage.module.css'
// import { NavLink } from 'react-router-dom';
import FriendPage from './FriendPage/FriendPage';

const FriendsPage = (props) => {
  console.log(props);
  let FriendElement = props.friendsPage.friends.map(friend => <FriendPage
    friendName={friend.friendName}
    avatarUrl={friend.avatarUrl} />);

  return (
    <div className={style.friendsSection}>
      {FriendElement}
    </div>
  )
};

export default FriendsPage;
