// src/components/Login.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import localStorageKey from "../constant/localStorageKey.jsx";
import { useUser } from "../Contexts/UserContext.jsx";
import { Message } from "primereact/message";
import { Button } from "primereact/button";

function Login() {
  const loginTitle = "Login";
  useEffect(() => {
    const oriTitle = document.title;
    document.title = loginTitle;
    return () => {
      document.title = oriTitle;
    };
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/login", { username, password });
      setSuccessMessage(response.data.message);
      if (response.status === 200) {
        const tokenBaru = response.data.token;
        localStorage.setItem(localStorageKey.JWT_TOKEN_KEY, tokenBaru);
        login(username);
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    } catch (error) {
      setMessage("Username or Password is Incorrect");
      setTimeout(()=>setMessage(''), 1000);
    }
  };

  return (
    <div className="loginbg">
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="https://ibb.co/88HjNhL">
            <img src="https://i.ibb.co/6vjQJ8b/Panasonic-Transparent-BG.png" alt="Panasonic-Transparent-BG" border="0" width="45" height="30" className="d-inline-block align-text-top"></img>&nbsp; ELECTRIC FAN WEB APPLICATION
          </a>
        </div>
      </nav>
      <div className="container d-flex justify-content-center vh-100 align-items-center">
        <div className="card w-50 pt-5 pb-5 rounded-5 text-white" id="cardbg">
          <div className="card-body">
            <form>
              <div className="cardlogin">
                <h2 className="text-primary text-center">Login</h2>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Username" value={username}></input>
                <div className="mb-2">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control pb-1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="buttonlogin">
                  <Button label="Login" onClick={(e) => handleSubmit(e)} className="rounded-pill w-50" />
                </div>
                <p className="pt-3 text-center">
                  {message && <Message severity="error" text={message} />}
                  {successMessage && <Message severity="success" text={successMessage} />}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
