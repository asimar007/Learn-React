import "./App.css";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { app } from "./firebase";

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Kolkata",
      country: "India",
      pinCode: 700001,
      lat: 123,
      long: 456,
    });

    console.log("Result", result);
  };
  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/4YH7EiXFWcxSraR74acp/sector"), {
      name: "Salt Lake",
      country: "India",
      pinCode: 700001,
      lat: 123,
      date: Date.now(),
    });
  };

  const readData = async () => {
    const ref = doc(firestore, "cities", "4YH7EiXFWcxSraR74acp");
    const snap = await getDoc(ref);
    console.log("Snap", snap.data());
  };
  const queryCollection = async () => {
    const citiesRef = collection(firestore, "cities");
    const q = query(citiesRef, where("name", "==", "Kolkata"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };
  const updateData = async () => {
    const docRef = doc(firestore, "cities", "4YH7EiXFWcxSraR74acp");
    await updateDoc(docRef, {
      name: "new Kolkata",
    });
  };
  return (
    <div>
      <h1>Hello from Firebase</h1>
      {/* <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put Sub Collection Data</button> */}
      <button onClick={readData}>Show data in Console</button>
      <button onClick={queryCollection}>Query</button>
      <button onClick={updateData}>update</button>
    </div>
  );
}

export default App;
