import authWithToken from '~/api/auth';
import { Alert } from 'react-native';

const AUTHENTICATING = 'AUTHENTICATING';
const IS_AUTHED = 'IS_AUTHED';
const NOT_AUTHED = 'NOT_AUTHED';

const authenticating = () => ({ type: AUTHENTICATING});

const isAuthed = uid => ({ type: IS_AUTHED, uid });

const notAuthed = () => ({ type: NOT_AUTHED });

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
      const { uid } = user;
      dispatch(isAuthed(uid));
    }
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
