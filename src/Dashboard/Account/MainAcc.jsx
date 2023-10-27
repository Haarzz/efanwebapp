import { useNavigate } from "react-router-dom";
import ChangePass from "./ChangePass";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../components/CreateContext";
import "./style/style.css";

export default function MainAcc() {
  const loginContext = useContext(LoginContext)
  const AccountTitle = "Account";
  useEffect(() => {
    const oriTitle = document.title;
    document.title = AccountTitle;
    return () => {
      document.title = oriTitle;
    };
  }, []);
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      navigate("/register");
    } catch {
      console.log("Error Regist");
    }
  };
  return (
    <div className="vh-100 flex-row d-flex">
      <div className="flex-grow-1 flex-column d-flex pt-1">
        <h2 className="fw-bolder m-2" id="dashboardmid">
          ACCOUNT
        </h2>
        <div className="card mx-2 rounded-0 flex-grow-1" id="applist">
          <div className="card-header fs-5 rounded-0" id="appbox">
            <div className="text-uppercase fw-bolder"> Hi, {loginContext.user.username}</div>
          </div>
          <div className="card-body text-center">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="bi bi-person-circle text-light" id="imageprofile"></h1>
              </div>
              <div className="col-12">
                <h2 className="text-light fw-bolder pt-2 pb-4">{loginContext.user.userprofile}</h2>
              </div>
              <div className="col-12 pb-2">
                <button className="btn btn-secondary w-25" onClick={handleRegister}>
                  {" "}
                  Register New Account{" "}
                </button>
              </div>
            </div>
            <ChangePass />
          </div>
        </div>
      </div>
    </div>
  );
}
