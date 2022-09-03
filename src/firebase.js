// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6hhMJ_DaGDO_wyhq-O5MzY6iw1I_1Frw",
  authDomain: "chat-app-634b6.firebaseapp.com",
  projectId: "chat-app-634b6",
  storageBucket: "chat-app-634b6.appspot.com",
  messagingSenderId: "285460124046",
  appId: "1:285460124046:web:92bdba15c888137d1a14df",
  measurementId: "G-R8CFSB7WRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)


// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: MESURMENT_ID
// };