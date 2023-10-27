import { useNavigate } from "react-router-dom";
import ChangePass from "./ChangePass";
import { useEffect } from "react";

export default function MainAcc(){
    
    const AccountTitle = "Account";
    useEffect(() => {
    const oriTitle = document.title;
    document.title = AccountTitle;
    return () => {
      document.title = oriTitle;
    };
  } , []);
    const navigate = useNavigate()
    const handleRegister = async () => {
        try{
          navigate('/register');
        }
        catch{
          console.log("Error Regist")
        }
      }
    return(
        <div className="vh-100 flex-row d-flex">
            <div className="flex-grow-1 flex-column d-flex pt-1">
                <h2 className="fw-bolder m-2" id="dashboardmid">
                    ACCOUNT
                </h2>
                <div className="card mx-2 rounded-0 flex-grow-1" id="applist">
                    <div className="card-header fs-5 rounded-0" id="appbox">
                        Hi,{}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 pb-2">
                            <button className="btn btn-secondary w-25" onClick={handleRegister}> Register New Account </button>
                            </div>
                        </div>
                            <ChangePass />
                    </div>
                </div>
            </div>
        </div>
    )
}