import React from 'react';
import PropTypes from 'prop-types';
import style from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={style.dialogItem}>
            <div className={style.dialogAvatar}><NavLink to={path}><img className={style.dialogAvatarImg} src={props.dialogAvatarUrl} alt={props.name} /></NavLink></div>
            <div className={style.dialogName}><NavLink to={path}>{props.name}</NavLink><span className={style.dialogDate}>{props.dialogDate}</span></div>
            <div className={style.dialogCounter}><span className={style.dialogCounterItem}>{props.unreadMessages}</span></div>
        </div>
    )
}

DialogItem.propTypes = {
    id: PropTypes.number,
    dialogAvatarUrl: PropTypes.string,
    name: PropTypes.string,
    dialogDate: PropTypes.string,
    unreadMessages: PropTypes.string,
}

export default DialogItem;