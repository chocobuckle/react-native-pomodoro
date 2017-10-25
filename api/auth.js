import { firebaseAuth, facebookProvider } from '~/config/constants';

export default function authWithToken(accessToken) {
  return firebaseAuth.signInWithCredential(facebookProvider.credential(accessToken));
}
