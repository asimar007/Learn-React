import { useEffect, useState } from 'react'
import { getPost, getRandom } from './api/index'
import './App.css';
import Postcard from './components/Postcard';
import UserCard from './components/UserCard';


function App() {
  const [data, setData] = useState(null);
  const [userdata, setUserdata] = useState(null)
  useEffect(() => {
    getPost().then((posts) => setData(posts))
  }, [])

  useEffect(() => {
    getRandom().then((random) => setUserdata(random.results[0]))
  }, [])

  const refreshbtn = () => {
    getRandom().then((random) => setUserdata(random.results[0]))
  }
  //console.log(userdata);
  return (
    <div className="App">
      {userdata && <UserCard data={userdata} />}
      <button onClick={refreshbtn}>Refresh User</button>
      {/* {data ? data.map((e) => <Postcard title={e.title} body={e.body} />) : <p>No Data</p>} */}
    </div>
  );
}

export default App;
