import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDcoJAM57iX7g3zgqITOr7rnlI1g9pz7fQ',
  authDomain: 'planedemic-f5ce6.firebaseapp.com',
  projectId: 'planedemic-f5ce6',
  storageBucket: 'planedemic-f5ce6.appspot.com',
  messagingSenderId: '830313717549',
  appId: '1:830313717549:web:98c9ca3374dd0074dc3da4',
  measurementId: 'G-RVPEQYKD5P',
};

const firebaseService = (!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebaseService;