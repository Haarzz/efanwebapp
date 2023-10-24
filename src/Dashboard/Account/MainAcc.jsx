import { useNavigate } from "react-router-dom";
export default function MainAcc(){
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
                        &nbsp;
                    </div>
                    <div className="card-body">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col">
                            <button className="btn btn-secondary" onClick={handleRegister}> Register New Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}