// import { FirebaseFirestore } from '@firebase/firestore-types';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import {initializeApp} from 'firebase/app'
import { getFirestore, collection, query, where, getDocs, Firestore } from "firebase/firestore";

// import { firebase } from '@react-native-firebase/firestore';
// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {initializeFirestore} from 'firebase/firestore';


export const firebaseConfig = {
  apiKey: 'AIzaSyCAthfOgZATuKhZTHvTk0P-Odq9NZurp5M',
  authDomain: 'mhing-aaa37.firebaseapp.com',
  projectId: 'mhing-aaa37',
  storageBucket: 'mhing-aaa37.appspot.com',
  messagingSenderId: '682874080109',
  appId: '1:682874080109:android:a4f32e2dec912e165f2864',
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyCAthfOgZATuKhZTHvTk0P-Odq9NZurp5M',
//   authDomain: 'mhing-aaa37.firebaseapp.com',
//   projectId: 'mhing-aaa37',
//   storageBucket: 'mhing-aaa37.appspot.com',
//   messagingSenderId: '682874080109',
//   appId: '1:682874080109:android:a4f32e2dec912e165f2864',
// };

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'gameList');
getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs)
})



// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });


// export {auth, app, firebase,  db};