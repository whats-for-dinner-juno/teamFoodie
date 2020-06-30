import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'; 
  
  // Your web app's Firebase configuration
  let firebaseConfig = {
  // apiKey: "AIzaSyBgf7VxE8zKIMQ8v0KQR8uH_yw_uZa2a7U",
  // authDomain: "teamfoodie-a5ee7.firebaseapp.com",
  // databaseURL: "https://teamfoodie-a5ee7.firebaseio.com",
  // projectId: "teamfoodie-a5ee7",
  // storageBucket: "teamfoodie-a5ee7.appspot.com",
  // messagingSenderId: "1047488727973",
  // appId: "1:1047488727973:web:6d8421b9abc25d1e41b64c"
  apiKey: "AIzaSyBgf7VxE8zKIMQ8v0KQR8uH_yw_uZa2a7U",
  authDomain: "teamfoodie-a5ee7.firebaseapp.com",
  databaseURL: "https://teamfoodie-a5ee7.firebaseio.com",
  projectId: "teamfoodie-a5ee7",
  storageBucket: "teamfoodie-a5ee7.appspot.com",
  messagingSenderId: "1047488727973",
  appId: "1:1047488727973:web:6d8421b9abc25d1e41b64c"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;  
