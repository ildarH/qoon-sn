import style from './Menu.module.css'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item +' '+style.profile}><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></div>
      <div className={style.item +' '+style.messages}><NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink></div>
      <div className={style.item +' '+style.news}><NavLink to="/news" activeClassName={style.active}>News</NavLink></div>
      <div className={style.item +' '+style.music}><NavLink to="/music" activeClassName={style.active}>Music</NavLink></div>
      <div className={style.item +' '+style.settings}><NavLink to="/settings" activeClassName={style.active}>Settings</NavLink></div>
    </nav>
  )
};

export default Menu;
