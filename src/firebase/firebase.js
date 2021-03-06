import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnOSWqzZjBgdjnhY8AD9IVRiF1HiyRnQo",
  authDomain: "kidsy-a512e.firebaseapp.com",
  projectId: "kidsy-a512e",
  storageBucket: "kidsy-a512e.appspot.com",
  messagingSenderId: "104773125573",
  appId: "1:104773125573:web:ccbe6babd660c274c077ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
