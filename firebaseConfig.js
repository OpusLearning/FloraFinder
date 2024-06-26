import { initializeApp } from "firebase/app";

//  Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBsPzSQ1eXecS87LRQ7N0BNZyb7j6AFClk",
  authDomain: "flora-finder-4bef9.firebaseapp.com",
  projectId: "flora-finder-4bef9",
  storageBucket: "flora-finder-4bef9.appspot.com",
  messagingSenderId: "427579675203",
  appId: "1:427579675203:web:3749220bb4d43a98f6faf6",
};

const app = initializeApp(firebaseConfig);

export default app;
