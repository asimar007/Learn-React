import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {

    
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
