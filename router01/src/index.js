import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useParams, NavLink } from 'react-router-dom'

const Home = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((data) => data.json().then((data) => setPost(data)))
  }, [])
  return (
    <>
      <div className="post-container">
        {post.map(post => (
          <NavLink className="post-title" style={{ display: "block" }} to={`/post/${post.id}`} key={post.id}>{post.title}</NavLink>
        ))}
      </div>
    </>
  )
}
const About = () => {
  return (
    <h1>About page</h1>
  )
}
const Profile = () => {
  return (
    <h1>Profile page</h1>
  )
}
const Settings = () => {
  return (
    <h1>Settings page</h1>
  )
}
const UseName = () => {
  const param = useParams();
  console.log(param);
  return (
    <h1>My Name is {param.userName}</h1>
  )
}
const Post = () => {
  const { PostId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [PostId]);

  // Check if data is null before accessing its properties
  return (
    <>
      {data ? (
        <>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Single Level Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:PostId' element={<Post />} />

        {/* Dynamic Routing */}
        <Route path='/user/:userName' element={<UseName />} />

        {/* Nestes Routes || Multi-Level Routes*/}
        <Route path='account'>
          <Route path='profile' element={<Profile />} />
          <Route path='setting' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
