import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import { React, createRef } from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';


const Dialogs = (props) => {
    // debugger;
    let dialogElements = props.messagesPage.dialogs.map(dialog => <DialogItem
        name={dialog.name}
        id={dialog.id}
        dialogDate={dialog.dialogDate}
        dialogAvatarUrl={dialog.dialogAvatarUrl} u
        unreadMessages={dialog.unreadMessages} />);
    let messagesElements = props.messagesPage.messages.map(message => <Message
        message={message.message}
        name={message.name}
        dialogDate={message.dialogDate}
        avatarUrl={message.avatarUrl} />);

    let newMessageElement = createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(message));
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
                            value={props.messagesPage.newMessageText} />
                    </div>
                    <div className={style.dialogIcons}>
                        <img className={style.dialogIcon} src="img/image_icon.svg" alt="" />
                        <img className={style.dialogIcon} src="img/map_icon.svg" alt="" />
                        <img className={style.dialogIcon} src="img/video_icon.svg" alt="" />
                    </div>
                    <div className={style.buttonContainer}>
                        <button className={style.dialogButton} onClick={addMessage}>Add post</button>
                    </div>
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;