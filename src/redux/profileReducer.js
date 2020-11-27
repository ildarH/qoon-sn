import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    {
      id: 1,
      post:
        "Sed quis leo vitae nisi viverra ultrices vitae et magna. Pellentesque pharetra dictum arcu ut gravida. Pellentesque nec ultrices quam, quis sagittis velit. Nam accumsan augue non finibus aliquet. Cras porttitor urna non interdum tincidunt. Curabitur sodales, justo vitae interdum viverra, ex augue pulvinar augue, sit amet sollicitudin odio purus vitae arcu. Cras lacinia nisl sit amet massa iaculis finibus.",
      likesCount: "12",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "img/post_id_1/post_1.jpg",
    },
    {
      id: 2,
      post:
        "Proin hendrerit, libero nec feugiat faucibus, elit urna lacinia nulla, quis ultricies nisi magna et nibh. Vestibulum vel maximus risus. Maecenas id interdum nisl. In hac habitasse platea dictumst. Vestibulum et ante eu risus fringilla tempor. Integer quis vulputate tellus. Vivamus eleifend mi a metus viverra efficitur. Integer vitae augue eros. Duis vitae sodales purus, nec feugiat mi. Morbi auctor blandit mauris quis fermentum. Ut pretium tortor vitae erat lobortis, eu laoreet magna suscipit. Maecenas egestas velit ac urna pulvinar porta. Integer ac hendrerit nunc, id hendrerit dolor.",
      likesCount: "18",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "img/post_id_1/post_2.jpg",
    },
    {
      id: 3,
      post:
        "Aenean ut congue nisi. Aliquam et lectus at enim cursus consectetur in vitae massa. Vestibulum feugiat aliquam felis sed luctus. Fusce congue sit amet libero vitae laoreet. Praesent faucibus maximus massa eget fringilla. Praesent rutrum velit id nulla suscipit porta eu ut lacus. Maecenas id posuere libero. Donec ullamcorper, purus eu tempus finibus, mauris urna tempor nibh, vitae malesuada ipsum magna a arcu. Mauris nunc est, efficitur eu felis et, hendrerit tempor nisl. Ut sagittis mauris ac diam placerat finibus. Mauris quis dictum libero, eget volutpat elit. Duis erat turpis, hendrerit quis dignissim nec, euismod in turpis. Donec gravida dui sed mauris semper, fermentum aliquam nisl pharetra. Sed mauris leo, vehicula vitae interdum ac, sagittis sit amet felis. Sed imperdiet dui et congue accumsan. Mauris sit amet semper odio.",
      likesCount: "55",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "img/post_id_1/post_3.jpg",
    },
    {
      id: 4,
      post:
        "Donec sit amet ligula vel felis convallis pretium sit amet sit amet velit. Nullam pharetra cursus ex, quis placerat nisi volutpat a. Praesent iaculis dui id felis efficitur, a mattis lacus commodo. Morbi dignissim sed mi quis vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam porttitor lectus eu leo gravida egestas. Etiam vehicula enim urna, eget pellentesque risus porta eget. Ut lobortis tellus sed diam pharetra cursus. Phasellus condimentum a nisi a faucibus. Vestibulum fringilla ullamcorper neque, ac sollicitudin nulla aliquam sit amet. Aliquam ut suscipit arcu. Nullam ac lacinia ipsum. Etiam at malesuada diam. Donec pharetra massa et felis finibus pharetra. Pellentesque quis lobortis lectus.",
      likesCount: "2",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "img/post_id_1/post_4.jpg",
    },
    {
      id: 5,
      post:
        "In hac habitasse platea dictumst. Vestibulum vehicula sodales tincidunt. Maecenas lectus tellus, semper in ipsum quis, consectetur pharetra magna. Integer congue venenatis augue, vitae tincidunt arcu iaculis ac. Sed cursus eu ligula varius euismod. Aliquam erat volutpat. Cras nec massa ut risus porttitor consequat in id quam. Cras gravida luctus leo.",
      likesCount: "189",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "",
    },
    {
      id: 6,
      post:
        "Nam finibus quam non quam suscipit auctor. Nulla vehicula tortor vel porta condimentum. Nulla facilisi. Nullam interdum sem purus, vel finibus massa dictum eu. In facilisis, libero vel pharetra tincidunt, lacus risus auctor magna, bibendum venenatis justo diam ut nulla. In id sapien nibh. Sed dignissim lacinia ligula in dapibus. Aenean molestie magna vel mauris volutpat tempor. Mauris quis tempor leo, eu venenatis lorem. Nam at aliquet neque. Aenean rhoncus aliquet odio nec dictum.",
      likesCount: "65",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "",
    },
    {
      id: 7,
      post:
        "Quisque nec tortor feugiat enim vehicula lacinia. Donec maximus est a pellentesque pellentesque. Nam posuere, mauris non rutrum placerat, metus justo placerat libero, non congue turpis ante quis augue. Proin pellentesque id augue nec commodo. In fringilla odio vel felis vehicula dapibus. Donec ornare ultricies lorem ac sagittis. Sed dignissim dignissim sapien in interdum. Aliquam placerat viverra finibus. Curabitur consequat rhoncus massa at lacinia. Nulla efficitur odio eget arcu tempor, quis molestie nibh finibus. Nullam elementum rhoncus felis, ac mattis velit ornare ac. Sed consequat magna in vulputate porttitor. Aliquam eleifend laoreet purus et pellentesque. Etiam convallis enim mi, ut finibus dui tincidunt ut. Vivamus consectetur non nisi at imperdiet. Mauris dignissim molestie placerat.",
      likesCount: "32",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "",
    },
    {
      id: 8,
      post:
        "Pellentesque iaculis ac elit ut consectetur. Ut condimentum dignissim gravida. Morbi interdum nunc rhoncus odio consequat accumsan. Aliquam sollicitudin mi nulla, in tempus eros gravida non. Quisque aliquam felis sit amet lorem commodo tempus. Vestibulum ut finibus nibh. Quisque sed interdum mauris, imperdiet rutrum nulla. Vivamus urna est, auctor non venenatis sed, aliquet et est. Integer dignissim feugiat metus sed suscipit. Morbi metus mauris, elementum vitae efficitur nec, sagittis at arcu. Suspendisse maximus fermentum elementum. Integer vitae sem vitae dui luctus finibus id nec augue. Aenean eu dolor ac orci blandit aliquet sit amet lacinia risus.",
      likesCount: "46",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "",
    },
    {
      id: 9,
      post:
        "Aliquam mollis nunc nec dignissim molestie. Curabitur at elit erat. Fusce vulputate in lacus non fringilla. In sagittis metus metus, sit amet ornare augue facilisis in. Curabitur euismod justo magna, sed pretium urna iaculis eu. Nullam in velit tempus, porttitor felis quis, cursus massa. Aliquam erat volutpat. Nullam ultrices laoreet magna vitae cursus. Proin vitae luctus felis. In volutpat lorem sit amet hendrerit maximus. Nulla odio tortor, placerat nec massa in, scelerisque hendrerit odio.",
      likesCount: "89",
      avatarUrl: "img/avatar_1.jpg",
      userName: "Hubert Simmons",
      postImgUrl: "",
    },
  ],
  userInfo: {
    id: 1,
    userName: "Hubert Simmons",
    userAvatarUrl: "img/avatar_1.jpg",
    userDateOfBirth: "01.01.1980",
    userPersonalInformation:
      "Duis vel cursus erat. Donec pellentesque metus sed metus posuere aliquet. Nam efficitur nunc nec pellentesque maximus. Vivamus volutpat, urna et fermentum mattis, augue magna consectetur diam, ut consectetur dolor tortor ut eros. Etiam efficitur tellus lacus, ut maximus quam hendrerit ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ex elit, rhoncus at tellus sed, gravida tempus felis. Mauris volutpat, sem quis malesuada tempor, est arcu varius sapien, sed volutpat urna risus et diam. Proin tempor tempus accumsan. Aliquam ultrices porttitor lorem vitae volutpat. Cras vel feugiat arcu, vitae vulputate lectus. Quisque nec hendrerit velit, et malesuada risus. Aenean vulputate dictum tortor id bibendum. Etiam scelerisque dictum molestie. Quisque sagittis tristique lectus vitae placerat. Nam gravida, nisl non pulvinar ullamcorper, erat turpis eleifend mauris, vitae imperdiet risus mi eu tellus.",
    userPosition: "Head of marketing",
    userWorkExperience: [
      {
        company: "Springify",
        position: "Operating Officer",
        yearStart: 2012,
        yearFinish: 2014,
      },
      {
        company: "The standard",
        position: "Marketing manager",
        yearStart: 2014,
        yearFinish: 2015,
      },
      {
        company: "Webstation",
        position: "Country manager",
        yearStart: 2015,
        yearFinish: 2018,
      },
      {
        company: "Online marketing Company",
        position: "Head of marketing",
        yearStart: 2018,
        yearFinish: "present",
      },
    ],
  },
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  let newPost;
  switch (action.type) {
    case ADD_POST:
      newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0,
        avatarUrl: "img/avatar_1.jpg",
        userName: "Hubert Simmons",
        postImgUrl: "",
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      // debugger; // eslint-disable-line
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export default profileReducer;
