import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
    const regisTitle = "Register";
    useEffect(()=>{
    const oriTitle = document.title;
    document.title = regisTitle;
    return () => {
      document.title = oriTitle;
    }
  })
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState("");
  const [sucsessMessage, setSucsessMessage] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
        setMessage("All Fields must be Filled");
        return;
      }
    if (password !== confirmPassword ){
        setMessage("Password do not match");
        return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        username,
        password,
      });
      if (response.status === 200) {
        setSucsessMessage("Registration successful");
        setTimeout(() => navigate("/account") , 3000);
        
      } else {
        setMessage("Registration failed");
      }
    } catch (error) {
      setMessage("Registration failed");
    }
  };
  const handleBack = async () => {
    try {
      navigate("/account");
    } catch {
      console.log("Hai");
    }
  };
  const handleUsernameChange = () => {
    setMessage("");
  };
  const handlePasswordChange = () => {
    setMessage("");
  };
  const handleConfirmPasswordChange = () => {
    setMessage("");
  };
  return (
    <>
      <div className="loginbg">
        <nav className="navbar fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="https://ibb.co/88HjNhL">
              <img src="https://i.ibb.co/6vjQJ8b/Panasonic-Transparent-BG.png" alt="Panasonic-Transparent-BG" border="0" width="45" height="30" className="d-inline-block align-text-top"></img>&nbsp; ELECTRIC FAN WEB APPLICATION
            </a>
          </div>
        </nav>
        <div className="container d-flex justify-content-center vh-100 align-items-center">
          <div className="card w-50 pt-2 ps-2 pb-5 rounded-5 text-white" id="cardbg">
            <div className="card-body center">
            <button type="button" className="btn btn-danger rounded-pill ps-3 pe-3" onClick={handleBack}> Back</button>

              <form>
                <div className="cardregist">
                  <h2 className="text-primary text-center">Register User</h2>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" onChange={(e) =>{setUsername(e.target.value);handleUsernameChange()}} placeholder="Username" value={username} maxLength={12}></input>
                  <div className="mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control pb-1" placeholder="Password" value={password} onChange={(e) =>{setPassword(e.target.value);handlePasswordChange()}} ></input>
                    <label htmlFor="exampleInputPassword2" className="form-label">
                      Confirm Password
                    </label>
                    <input type="password" className="form-control pb-1" placeholder="Password" value={confirmPassword} onChange={(e) =>{setConfirmPassword(e.target.value);handleConfirmPasswordChange()}} ></input>
                  </div>
                  <div className="buttonregist">
                    <button type="submit" onClick={handleRegistration} className="btn btn-primary rounded-pill w-50">
                      Register
                    </button>
                  </div>
                </div>
                <p className="text-danger text-center">{message}</p>
                <p className="text-success text-center">{sucsessMessage}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
