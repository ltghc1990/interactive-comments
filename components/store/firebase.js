import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAlyslKkDfpddLhq54p2LSLu0cCgMH5u5s",
  authDomain: "interactive-comments-ebba2.firebaseapp.com",
  projectId: "interactive-comments-ebba2",
  storageBucket: "interactive-comments-ebba2.appspot.com",
  messagingSenderId: "145267524904",
  appId: "1:145267524904:web:2ac1f9e622db609e187c1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth();

const colRef = collection(db, "comments");

// grab all comments sorted by datecreated

export const fetchComments = async () => {
  // const q = query(colRef, orderBy("createdOn", "==", "asc"));

  const response = await getDocs(colRef);
  const data = response.docs.map((doc) => {
    return {
      docID: doc.id,
      ...doc.data(),
    };
  });
  console.log(data);

  return data;
};

export const createNewUser = async (email, password) => {
  // response isnt need
  // has some auto verification, password has to be 6 or long
  // should give you back the created user object
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response);
};
