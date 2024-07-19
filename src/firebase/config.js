import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6iHXxEnvFcUE4syPULD_RM7VUci259no",
  authDomain: "cafeteria-1d74d.firebaseapp.com",
  projectId: "cafeteria-1d74d",
  storageBucket: "cafeteria-1d74d.appspot.com",
  messagingSenderId: "572655994600",
  appId: "1:572655994600:web:8e7a39d828f2cca4dc6b5d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
