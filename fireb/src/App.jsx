import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);
const logOut = signOut(auth);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <h1> Hello from Firebase App</h1>
        <Signup />
        <br />
        <Signin />
      </>
    );
  }
  return (
    <>
      <h1>Hello from {user.email}</h1>
      <button onClick={logOut}>Logout</button>
    </>
  );
}

export default App;
