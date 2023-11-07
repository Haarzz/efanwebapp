import axios from "axios";
import { useState } from "react";
import "../style/ChangePass.css";
import { useUser } from "../../Contexts/UserContext";

export default function ChangePass() {
    const { user } = useUser();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [okMessage, setOkMessage] = useState("");

    const handleChangePassword = async () => {
        const refresh = () => window.location.reload(true)
        try {
        const response = await axios.post("http://localhost:4000/api/change-password", {
            username : user,
            oldPassword,
            newPassword,
        }); 
        setMessage(response.data.message);
         if (response.status === 200) {
            setOkMessage("Succsessfully Changed Password. Redirecting...")
            setTimeout(() => {refresh()} , 2000)
            
          }
        } catch (error) {
          setMessage("Error While Changing the Password. Please Try Again");
        }
      };
  const handleOldPasswordChange = () => {
    setMessage("");
  };
  const handleNewPasswordChange = () => {
    setMessage("");
  };
  return (
    <>
      <button type="button" className="btn btn-secondary w-25" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Change Password
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" id="headerpass">
              <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">
                Change Password
              </h1>
            </div>
            <div className="modal-body" id="bodypass">
              <div className="row">
                <div className="col-12 pb-2">
                  <input className="form-control" type="text" placeholder="Username" value={user} disabled /> <br />
                </div>
                <div className="col-12 pb-2">
                  <input className="form-control" type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => {setOldPassword(e.target.value);handleOldPasswordChange()}} />
                </div>
                <div className="col-12 pb-2">
                  <input className="form-control" type="password" placeholder="New Password" value={newPassword} onChange={(e) => {setNewPassword(e.target.value);handleNewPasswordChange()}} /> <br />
                </div>
              </div>
            </div>
            <div className="modal-footer" id="headerpass">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary" onClick={handleChangePassword}>
                Save changes
              </button>
              <p className="text-danger">{message}</p>
              <p className="text-success">{okMessage}</p>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
