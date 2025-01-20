import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMaGDjkA2QwMLBPKk0ysjpNftbVZ2xs6s",
  authDomain: "nomnomdb-110f7.firebaseapp.com",
  projectId: "nomnomdb-110f7",
  storageBucket: "nomnomdb-110f7.firebasestorage.app",
  messagingSenderId: "265359745930",
  appId: "1:265359745930:web:82909986c055015ad8de73"
};

export const app = initializeApp(firebaseConfig);