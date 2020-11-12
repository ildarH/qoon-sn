import PropTypes from "prop-types";
import * as React from "react";
import User from "./User/User";
import style from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    // if (props.users.length === 0) {
    // debugger;// eslint-disable-line
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        // eslint-disable-line
        console.log(response.data.items);
        props.setUsers(response.data.items);
      });
    // }
    this.userElement = this.props.users.map((user) => (
      <User
        key={user.id}
        id={user.id}
        followed={user.followed}
        name={user.name}
        photo={user.photos.small}
        // location={user.location}
        status={user.status}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    ));
  }
  render() {
    return <div className={style.usersContainer}>{this.userElement}</div>;
  }
}
// const Users = (props) => {
//     console.log('Users: ', props);
//     // debugger;
//     // if (props.users.length === 0) {
//         // debugger;// eslint-disable-line
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { // eslint-disable-line
//             console.log(response.data.items);
//             // props.setUsers(response.data.items);
//         });
//     // }

//     let userElement = props.users.map(user => <User
//         key={user.id}
//         id={user.id}
//         followed={user.followed}
//         fullname={user.fullname}
//         userAvatarUrl={user.userAvatarUrl}
//         location={user.location}
//         status={user.status}
//         unfollow={props.unfollow}
//         follow={props.follow}
//     />);
//     return (
//         <div className={style.usersContainer}>
//             {userElement}
//         </div>
//     )
// }

Users.propTypes = {
  users: PropTypes.array,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  setUsers: PropTypes.func,
  // setUsers: PropTypes.func
};

export default Users;
