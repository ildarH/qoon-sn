import { connect } from 'react-redux';
import FriendsPage from './FriendsPage';

// const FriendsPageContainer = (props) => {
//   // console.log('FriendsPageContainer: ', props);
//   // debugger;
//   let state = props.store.getState().friendsPage;
//   return <FriendsPage state={state} />
// };
let mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage
  }
}
let mapDispatchToProps = () => {
  return {

  }
}

const FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage);

export default FriendsPageContainer;
