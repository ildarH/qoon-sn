import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    newMessageText: state.messagesPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (message) => {
      dispatch(updateNewMessageActionCreator(message));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
