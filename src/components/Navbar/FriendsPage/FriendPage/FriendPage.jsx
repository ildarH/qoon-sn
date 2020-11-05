import style from './FriendPage.module.css'
// import { NavLink } from 'react-router-dom';

const FriendPage = (props) => {
  return (
    <div className={style.friend}>
      <img className={style.friendImg} src={props.avatarUrl} alt={props.friendName} />
    </div>
  )
};

export default FriendPage;
