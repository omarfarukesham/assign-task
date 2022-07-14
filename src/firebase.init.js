import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBNRr8qDSr6Nr_Wik8Tj_shDdxhGO6wfks",
  authDomain: "assign-app-d140f.firebaseapp.com",
  projectId: "assign-app-d140f",
  storageBucket: "assign-app-d140f.appspot.com",
  messagingSenderId: "493764311537",
  appId: "1:493764311537:web:72fceef5bbca8cffbf6c50"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;