import { authWithToken, updateUser, logout } from '~/api/auth';
import { Alert } from 'react-native';

const AUTHENTICATING = 'AUTHENTICATING';
const IS_AUTHED = 'IS_AUTHED';
const NOT_AUTHED = 'NOT_AUTHED';
const LOGGING_OUT = 'LOGGING_OUT';

const authenticating = () => ({ type: AUTHENTICATING });
const isAuthed = uid => ({ type: IS_AUTHED, uid });
const notAuthed = () => ({ type: NOT_AUTHED });
export const loggingOut = () => ({ type: LOGGING_OUT });


export function handleAuthWithFirebase(accessToken) {
  return function (dispatch) {
    dispatch(authenticating());
    authWithToken(accessToken)
      .then(() => {
        Alert.alert('Success!');
      })
      .catch(error => console.warn(`Error in handleAuthWithFirebase: ${error}`));
  };
}

export function onAuthChange(user) {
  return function (dispatch) {
    if (!user) {
      dispatch(notAuthed());
    } else {
      const { uid, displayName, photoURL } = user;
      updateUser({
        uid,
        displayName,
        photoURL
      }).then(() => dispatch(isAuthed(uid)));
    }
  };
}

export function handleUnauth(uid) {
  return function (dispatch) {
    logout(uid);
    dispatch(loggingOut());
  };
}

const initialState = {
  isAuthed: false,
  isAuthenticating: false,
  authedId: ''
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: true
      };
    case IS_AUTHED:
      return {
        isAuthed: true,
        isAuthenticating: false,
        authedId: action.uid
      };
    case NOT_AUTHED:
      return {
        isAuthed: false,
        isAuthenticating: false,
        authedId: ''
      };
    default:
      return state;
  }
}
