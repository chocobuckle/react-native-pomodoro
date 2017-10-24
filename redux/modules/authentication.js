import { authWithToken } from '~/api/auth';

const AUTHENTICATING = 'AUTHENTICATING';
const IS_AUTHED = 'AUTHED';
const NOT_AUTHED = 'NOT_AUTHED';

const authenticating = () => ({ type: AUTHENTICATING});

const authed = uid => ({ type: IS_AUTHED, uid });

const notAuthed = () => ({ type: NOT_AUTHED });

export function handleAuthWithFirebase(accessToken) {
  return function (dispatch, getState) {
    dispatch(authenticating());
    try {
      authWithToken(accessToken);
    } catch (error) {
      console.warn(`Error in handleAuthWithFirebase: ${error}`);
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
