import { ref, firebaseAuth, facebookProvider } from '~/config/constants';
import { LoginManager } from 'react-native-fbsdk';

export function authWithToken(accessToken) {
  return firebaseAuth.signInWithCredential(facebookProvider.credential(accessToken));
}

export function updateUser(user) {
  return ref.child(`users/${user.uid}`).set(user);
}

export function logout(uid) {
  ref.child(`users/${uid}`).set(null);
  firebaseAuth.signOut();
  ref.off();
}
