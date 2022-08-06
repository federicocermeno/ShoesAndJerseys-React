// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDnUL1ZP67Gq1mQx2Qve7o_BboFBZpeiMY",
  authDomain: "coderhouse-react243.firebaseapp.com",
  projectId: "coderhouse-react243",
  storageBucket: "coderhouse-react243.appspot.com",
  messagingSenderId: "677504002642",
  appId: "1:677504002642:web:1b0ffd45c5bef0f29ecd8b",
  measurementId: "G-6W6DCX7DTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseConnections = () => app