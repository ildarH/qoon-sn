import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {
//     // debugger;
//     let state = props.store.getState().messagesPage;
//     let onAddMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }
//     let onMessageChange = (message) => {
//         props.store.dispatch(updateNewMessageActionCreator(message));
//     }

//     return <Dialogs state={state}
//         addMessage={onAddMessage}
//         updateNewMessageText={onMessageChange}
//         newMessageText={state.newMessageText} />
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (message) => { dispatch(updateNewMessageActionCreator(message)); },
        addMessage: () => { dispatch(addMessageActionCreator()); },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;