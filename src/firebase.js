// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO5kCCMr_X97Z74IfUdGPRWv4CaBZoVGU",
  authDomain: "chat-app-cb514.firebaseapp.com",
  projectId: "chat-app-cb514",
  storageBucket: "chat-app-cb514.appspot.com",
  messagingSenderId: "771166012712",
  appId: "1:771166012712:web:bd123dc51566bba1ef7c1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

