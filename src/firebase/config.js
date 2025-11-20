import { initializeApp } from "firebase/app";
import {apiKey, authDomain,projectId,storageBucket,messagingSenderId,appId}from "../env/env.env";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

export const app = initializeApp(firebaseConfig);