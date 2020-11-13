const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [],
  pageSize: 100,
  currentPage: 1,
  totalUsersCount: 0,
  // users: [
  //   {
  //     id: 1,
  //     followed: false,
  //     fullname: 'Finnian Coleman',
  //     userAvatarUrl: 'img/avatar_8.jpg',
  //     location: {
  //       cityName: 'Berlin',
  //       countryName: 'Germany',
  //     },
  //     status: {
  //       currentStatus: 'Irure labore consequat eu aute tempor aute et eiusmod id. Proident tempor Lorem laboris mollit dolore et laborum qui sint ea sint. Nisi laborum nisi consequat enim sit exercitation voluptate est id esse Lorem.',
  //     },
  //   },
  //   {
  //     id: 2,
  //     followed: true,
  //     fullname: 'Bradlee Barnett',
  //     userAvatarUrl: 'img/avatar_10.jpg',
  //     location: {
  //       cityName: 'Berlin',
  //       countryName: 'Germany',
  //     },
  //     status: {
  //       currentStatus: 'Culpa in ad culpa officia esse veniam ad sit ullamco ex qui deserunt. Voluptate nulla Lorem sint aliquip proident occaecat exercitation nostrud excepteur nostrud aliquip. Officia voluptate nulla elit Lorem sit proident laborum reprehenderit Lorem nulla mollit minim elit. Enim adipisicing occaecat ullamco quis velit. Qui ipsum laborum nisi amet sit consectetur culpa cupidatat. Do anim ullamco proident consectetur velit consectetur in culpa cupidatat deserunt sunt dolore velit excepteur.',
  //     },
  //   },
  //   {
  //     id: 3,
  //     followed: false,
  //     fullname: 'Hawwa Shepard',
  //     userAvatarUrl: 'img/avatar_3.jpg',
  //     location: {
  //       cityName: 'Berlin',
  //       countryName: 'Germany',
  //     },
  //     status: {
  //       currentStatus: 'Ad incididunt laborum consequat cillum nostrud aliqua incididunt adipisicing culpa nisi ex dolor. Ad aliqua incididunt consectetur eu in quis reprehenderit fugiat incididunt fugiat qui elit. Sunt eiusmod velit incididunt sit eu proident officia. Nisi aute dolor proident sunt elit cupidatat commodo officia nisi proident do ipsum qui. Dolore duis magna irure occaecat aliquip labore reprehenderit anim culpa aliquip proident ad culpa sunt.',
  //     },
  //   },
  // ],
};

const usersReducer = (state = initialState, action) => {
  // debugger; // eslint-disable-line no-debugger
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAc = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAc = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAc = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export default usersReducer;
