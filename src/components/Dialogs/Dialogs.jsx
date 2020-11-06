import PropTypes from 'prop-types';
import { createRef, React } from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    // console.log('Dialogs: ', props);
    // debugger;
    let dialogElements = props.messagesPage.dialogs.map(dialog => <DialogItem
        name={dialog.name}
        id={dialog.id}
        dialogDate={dialog.dialogDate}
        dialogAvatarUrl={dialog.dialogAvatarUrl}
        unreadMessages={dialog.unreadMessages}
        key={dialog.id} />);
    let messagesElements = props.messagesPage.messages.map(message => <Message
        message={message.message}
        name={message.name}
        dialogDate={message.dialogDate}
        avatarUrl={message.avatarUrl}
        key={message.id} />);

    let newMessageElement = createRef();
    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageText(message);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                {dialogElements}
            </div>
            <div className={style.messagesList}>
                <div className={style.formContainer}>
                    <div className={style.textareaContainer}>
                        <textarea className={style.dialogTextarea}
                            ref={newMessageElement}
                            onChange={onMessageChange}
                            value={props.newMessageText} />
                    </div>
                    <div className={style.dialogIcons}>
                        <img className={style.dialogIcon} src="img/image_icon.svg" alt="" />
                        <img className={style.dialogIcon} src="img/map_icon.svg" alt="" />
                        <img className={style.dialogIcon} src="img/video_icon.svg" alt="" />
                    </div>
                    <div className={style.buttonContainer}>
                        <button className={style.dialogButton} onClick={onAddMessage}>Add post</button>
                    </div>
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

Dialogs.propTypes = {
    messagesPage: PropTypes.object,
    dialogs: PropTypes.object,
    messages: PropTypes.object,
    newMessageText: PropTypes.string,
    addMessage: PropTypes.func,
    updateNewMessageText: PropTypes.func,

};

export default Dialogs;