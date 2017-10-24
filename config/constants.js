import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyA76A5KYMBL4iywrguPZ4cQzpcE-1E9GPs',
  authDomain: 'reactmodoro-11aa2.firebaseapp.com',
  databaseURL: 'https://reactmodoro-11aa2.firebaseio.com',
  projectId: 'reactmodoro-11aa2',
  storageBucket: 'reactmodoro-11aa2.appspot.com',
  messagingSenderId: '928316499699'
});

const ref = firebase.database().ref();
const firebaseAuth = firebase.auth();
const facebookProvider = firebase.auth.FacebookAuthProvider;

export {
  ref,
  firebaseAuth,
  facebookProvider
};
