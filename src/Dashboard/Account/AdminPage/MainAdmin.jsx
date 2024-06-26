
import { useNavigate } from "react-router";
import { useEffect } from "react";
import "./admin.css";
import RegisterNewAccount from "./component/RegisterNewAccount";
import AddModel from "./component/AddModel";
import AddGroup from "./component/AddGroup";


export default function MainAdmin() {
  const EnergyTitle = "Admin Page";
  useEffect(() => {
    const oriTitle = document.title;
    document.title = EnergyTitle;
    return () => {
      document.title = oriTitle;
    };
  } , []);
    const navigate = useNavigate();
    const handleBack = async () => {
    try {
      navigate("/account");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="vh-100 flex-row d-flex" id="bgadmin">
      <div className="flex-grow-1 flex-column d-flex pt-1">
        <h2 className="fw-bolder m-2 text-center" id="dashboardmid">
          ADMIN PAGE
        </h2>
        <div className="card mx-2 rounded-0 flex-grow-1" id="applist">
          <div className="card-header fs-5 rounded-0" id="bgadmincard">
            <button className="btn btn-danger" onClick={handleBack}>
              {" "}
              Back
            </button>
          </div>
          <div className="card-body" id="">
            <div className="row">
              <div className="col-6 align-items-stretch">
                <div className="card border-light" id="bgadmin" style={{width: "auto"}}>
                  <div className="card-header fw-bolder text-center" id="bgadmincardhead">
                    REGISTER NEW ACCOUNT
                  </div>
                  <div className="card-body" id="bgadmincardbody">
                    <form>
                        <RegisterNewAccount />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-6 align-items-stretch">
                <AddModel />
                <AddGroup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
