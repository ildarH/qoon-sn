import style from './Navbar.module.css'
import Menu from './Menu/Menu';
import FriendsPage from './FriendsPage/FriendsPage';

const Navbar = (props) => {
  // console.log(props);
  return (
    <div className={style.nav}>
      <Menu />
      <FriendsPage friendsPage={props.friendsPage} />
    </div>
  )
};

export default Navbar;
