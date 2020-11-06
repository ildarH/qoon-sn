import React from 'react';
import PropTypes from 'prop-types';
import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>
            <div className={style.messageInfo}>
                <div className={style.avatar}>
                    <img className={style.messageAvatarImg} src={props.avatarUrl} alt={props.name} />
                </div>
                <div className={style.details}>
                    <span className={style.messageDate}>{props.dialogDate}</span>
                </div>
            </div>
            <div className={style.messageContent}>
                <h4>
                    {props.name}
                </h4>
                <p>
                    {props.message}
                </p>
            </div>
        </div>
    )
}

Message.propTypes = {
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    dialogDate: PropTypes.string,
    message: PropTypes.string,
}

export default Message;