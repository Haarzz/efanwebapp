import { useState } from "react";
import AddArduino from "./AddArduino";
import axios from "axios";
import { Message } from 'primereact/message';
        

export default function RegisterNewAccount() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage ,setSuccessMessage] = useState("")
  const [arduinoNames, setArduinoNames] = useState([])
  const handleUsernameChange = () => {
    setMessage("");
  };
  const handlePasswordChange = () => {
    setMessage("");
  };
  const handleConfirmPasswordChange = () => {
    setMessage("");
  };
  const handleRegistration = async (e) => {
    e.preventDefault()
    if (!username || !password || !confirmPassword) {
      setMessage("All Fields must be Filled");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Password do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
          username,
          password,
          arduinoName: arduinoNames,
        })
      if (response.status === 200) {
        setSuccessMessage("Registration Successfull")
        setTimeout(()=> window.location.reload(true), 2000)
      }
    } catch (error) {
      console.error(error)
      setMessage("Registration Failed");
      setTimeout(()=> setMessage(''), 2000)
    }
  }
  const setParentArduinoName = (name) => {
    setArduinoNames(name);
  };
  return (
    <>
      <label htmlFor="exampleInputEmail1" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          setUsername(e.target.value);
          handleUsernameChange();
        }}
        placeholder="Username"
        value={username}
        maxLength={12}
      ></input>
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control pb-1"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          handlePasswordChange();
        }}
      ></input>
      <label htmlFor="exampleInputPassword2" className="form-label">
        Confirm Password
      </label>
      <input
        type="password"
        className="form-control pb-1"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          handleConfirmPasswordChange();
        }}
      ></input>
      <AddArduino setParentArduinoName={setParentArduinoName} arduinoNames={arduinoNames} />
      <div className="buttonregist">
        <button type="submit" onClick={handleRegistration} className="btn btn-primary rounded-pill w-50">
          Register
        </button>
      </div>
        <div className="text-center pt-2">
      {successMessage && (
      <Message severity="success" text={successMessage} />
    )}
    {message && (
      <Message severity="error" text={message} />
    )}
    </div>
    </>
  );
}
