import { ref, firebaseAuth, facebookProvider } from '~/config/constants';

export function authWithToken(accessToken) {
  return firebaseAuth.signInWithCredential(facebookProvider.credential(accessToken));
}

export function updateUser(user) {
  return ref.child(`users/${user.uid}`).set(user);
}
