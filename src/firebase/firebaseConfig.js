//Configuración para la conexión con Firebase y Firestore

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDhXVoAYd9Th750jY0VCfRC4vBUkBJ66A",
  authDomain: "miniproyecto-b1c1c.firebaseapp.com",
  projectId: "miniproyecto-b1c1c",
  storageBucket: "miniproyecto-b1c1c.appspot.com",
  messagingSenderId: "496060543435",
  appId: "1:496060543435:web:e12f99fea11fca9f69064e",
  measurementId: "G-H6GL7SSZPF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);