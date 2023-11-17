import { useNavigate } from "react-router-dom";
import ChangePass from "./ChangePass";
import { useEffect } from "react";
import "./style/style.css";
import { useUser } from "../../Contexts/UserContext";

export default function MainAcc() {
  const { user } = useUser();
  const AccountTitle = "Account";
  useEffect(() => {
    const oriTitle = document.title;
    document.title = AccountTitle;
    return () => {
      document.title = oriTitle;
    };
  }, []);
  const navigate = useNavigate();

  const handleAdmin = async () => {
    try {
      navigate("/efanadmin");
    } catch (error){
    console.log(error);
    }
  };
  const handleTransactionPage = async () => {
    try {
      navigate("/all-transaction");
    } catch (error){
    console.log(error);
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
            &nbsp;
          </div>
          <div className="card-body text-center">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="bi bi-person-circle text-light" id="imageprofile"></h1>
              </div>
              <div className="col-12">
                <h2 className="text-light fw-bolder pt-2 pb-4 text-uppercase">{user}</h2>
              </div>
              <div className="col-12 pb-2">
                {
                  user === "admin" ?
                <button className="btn btn-secondary w-25" onClick={handleAdmin}>
                  {" "}
                  Admin Page{" "}
                </button> : undefined
                }
              </div>
              <div className="col-12 pb-2">
                {
                  user === "admin" ?
                  <button className="btn btn-secondary w-25" onClick={handleTransactionPage}>
                    {""}Today`s Transaction{""}
                  </button> : undefined
                }
              </div>
              
            </div>
            <ChangePass />
          </div>
        </div>
      </div>
    </div>
  );
}
