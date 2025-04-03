import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import getFirestore from "firebase/firestore";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyB6v_uYY3h164DMXggs6KEuetVKPnJp-80",
  authDomain: "bookify-87006.firebaseapp.com",
  projectId: "bookify-87006",
  storageBucket: "bookify-87006.firebasestorage.app",
  messagingSenderId: "1079300603531",
  appId: "1:1079300603531:web:7e0749fe26105289469e8e",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      console.log("user", user);
    });
  }, []);

  const isLoggedIn = user ? true : false;

  const handleCreateNewListing = (name,isbn,price,cover) =>{
    
  }

  // Google Auth
  const googleProvider = new GoogleAuthProvider();

  // Sign in with Google
  const signWithGoogle = async () =>
    await signInWithPopup(firebaseAuth, googleProvider);

  // Login
  const loginUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  // Create Email Account
  const signupUserWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        signWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
