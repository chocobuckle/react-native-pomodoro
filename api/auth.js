import { firebaseAuth, facebookProvider } from '~/config/constants';

export function authWithToken(accessToken) {
  return firebaseAuth.signInWithCredential(facebookProvider.credential(accessToken));
}
