import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDmoZ-D7XMT9U3_TfIc2uU5ZoWOa3tGUKc',
  authDomain: 'clone-f609f.firebaseapp.com',
  databaseURL: 'https://clone-f609f.firebaseio.com',
  projectId: 'clone-f609f',
  storageBucket: 'clone-f609f.appspot.com',
  messagingSenderId: '404607664945',
  appId: '1:404607664945:web:ad65892d6102420eb9a610',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
