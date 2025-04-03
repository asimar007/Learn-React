import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFirebase } from "../context/Firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(firebase);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // Navigate to Home Page
      navigate("/");
    }
  }, [firebase, navigate]);

  // for Email and Password
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login user....");
    const result = await firebase.loginUserWithEmailAndPassword(
      email,
      password
    );
    console.log("successfull user", result);
  };
  // for Google Auth
  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    console.log("Google login....");
    const result = await firebase.signWithGoogle();
    console.log("successfull user", result);
  };
  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <h1 className="mt-5 mb-5">Or</h1>
      <Button onClick={handleGoogleLogin} variant="danger">
        Signin with Google
      </Button>
    </div>
  );
};

export default Login;
