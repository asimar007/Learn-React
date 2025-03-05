import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqYIK-KcUgvR9CuytgKAPv_A-8vMoDgOI",
  authDomain: "fir-efefb.firebaseapp.com",
  projectId: "fir-efefb",
  storageBucket: "fir-efefb.firebasestorage.app",
  messagingSenderId: "518629585612",
  appId: "1:518629585612:web:5b3ec47a4374de0b1b8869",
  databaseURL: "https://fir-efefb-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signInWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => {
    set(ref(database, key), data);
  };
  return (
    <FirebaseContext.Provider value={{ signInWithEmailAndPassword, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
