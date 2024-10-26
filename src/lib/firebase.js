import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBQir89yQmEUxpymreUnFAVo9NWz28f9U",
  authDomain: "church-app-a9ecc.firebaseapp.com",
  projectId: "church-app-a9ecc",
  storageBucket: "church-app-a9ecc.appspot.com",
  messagingSenderId: "673739783284",
  appId: "1:673739783284:web:a834efec33c634fc506521",
  measurementId: "G-2C2NL47KTK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);