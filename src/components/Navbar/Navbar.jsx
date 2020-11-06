import React from 'react';
import style from './Navbar.module.css'
import Menu from './Menu/Menu';
import FriendsPageContainer from './FriendsPage/FriendsPageContainer';

const Navbar = () => {
  // debugger;
  // console.log('Navbar: ', props);
  return (
    <div className={style.nav}>
      <Menu />
      <FriendsPageContainer />
    </div>
  )
};

export default Navbar;
